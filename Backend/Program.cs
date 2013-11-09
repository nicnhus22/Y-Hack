using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Numerics;
using Wolfram.NETLink;
using System.IO;

namespace TestMathematica
{
    class Program
    {
        static int SAMPLE_COUNT = 1000;
        static double LOWER_THRESHOLD = 0.4;
        static int UPPER_THRESHOLD = 100;
        static void Main(string[] args)
        {
            // This launches the Mathematica kernel:
            IKernelLink ml = MathLinkFactory.CreateKernelLink();
            var myComplexType = new Complex(1,2);
            ml.ComplexType = myComplexType.GetType();
            ml.WaitAndDiscardAnswer();
            // Discard the initial InputNamePacket the kernel will send when launched.


            var path = @"C:\Users\zhadowoflight\Desktop\Studies\COEN_9\y-hack\lotr.wav";
            
            var data = GetDataFromWav(ml, path);
            var rate = GetSamplingRateFromWav(ml, path);
            List<double[]> MajorFrequencies = new List<double[]> ();
            for (var ii = 0; ii < data.Length + SAMPLE_COUNT; ii += SAMPLE_COUNT)
            {
                var temp_data = new double[SAMPLE_COUNT];
                try
                {
                    Array.Copy(data, ii, temp_data, 0, SAMPLE_COUNT);
                }
                catch (ArgumentException)
                {
                    if (ii + SAMPLE_COUNT < data.Length)
                        Console.WriteLine("Not supposed to happen!!");
                    break;
                }
                var fft_data = GetMagnitudeOfComplexArray( GetFourierTransform(ml, temp_data) );
                MajorFrequencies.Add(GetMajorFrequenciesFromTransform( fft_data , rate ));
#if DEBUG
        //        File.WriteAllText(string.Format("test{0}.txt",ii),string.Join("\n",fft_data));
#endif
            }


            WriteResults(MajorFrequencies);

            Console.ReadKey();
        }


        static void WriteResults(List<double[]> values)
        {
            StringBuilder buildIt = new StringBuilder();
            foreach (double[] arr in values)
            {
                foreach (double d in arr)
                { 
                    buildIt.Append(string.Format("{0},",d));
                }
                buildIt.Append('\n');
            }
            File.WriteAllText("Freqs.txt", buildIt.ToString());
        }


        public static double[] GetMajorFrequenciesFromTransform(double[] fft_data, int rate)
        {
            List<double> freqs = new List<double>();

            //Magic formula : Freq = Abs(2*index/length - 1 )
            for (var ii = 0; ii < fft_data.Length; ++ii)
            {
                if (fft_data[ii] > LOWER_THRESHOLD)
                {
                    freqs.Add(rate* Math.Abs(2 * (double)ii / (double)fft_data.Length - 1));
                }
            }
            return freqs.ToArray();
        }



        public static double[] GetDataFromWav(IKernelLink ml, string path)
        {
            object obj = null;
            var wavCommandFormat = string.Format(@"Data = Import[""{0}"" , ""Data""]", path);
            ml.Evaluate(wavCommandFormat);
            ml.WaitForAnswer();
            try
            {
                obj = ml.GetObject();
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return null;
            }
            var cast = (double [,] ) obj;
            var res = new double[cast.GetLength(1)];
            for (var ii = 0; ii < cast.GetLength(1); ++ii) //TODO: Kill this for loop! there ought to be a native way
            {
                res[ii] = cast[0, ii];//Throw away one channel, we're not stereo anyways
            }

            return res;
        }

        public static int GetSamplingRateFromWav(IKernelLink ml, string path)
        {
            object obj = null;
            var wavCommandFormat = string.Format(@"Import[""{0}"" , ""SampleRate"" ]", path);
            ml.Evaluate(wavCommandFormat);
            ml.WaitForAnswer();
            try
            {
                obj = ml.GetObject();
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return -1;
            }

            return (int)obj;
        }

        public static Complex[] GetFourierTransform(IKernelLink ml, double[] data)
        {
            object o = null;

            Expr template = new Expr(ExpressionType.Symbol,"Fourier");
            Expr arg = new Expr(data);
            Expr quer = new Expr(template, new object[] { arg });

            ml.Evaluate(quer);
            ml.WaitForAnswer();

            try
            {
                o = ml.GetObject();
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                try
                {
                    var problem = ml.GetSymbol();
                    Console.WriteLine(problem);
                }
                catch (Exception e2)
                {
                    Console.WriteLine(e2);
                }
                
                return null;
            }
            var cast = (Complex [])o;

            return cast;
        }

        public static double[] GetMagnitudeOfComplexArray(Complex[] data)
        {
            var res = new double[data.Length];
            for (var ii = 0; ii < data.Length; ++ii)
            {
                res[ii] = data[ii].Magnitude;
            }
            return res;
        }
    }
}
