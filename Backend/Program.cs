using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Wolfram.NETLink;

namespace TestMathematica
{
    class Program
    {
        static void Main(string[] args)
        {
            // This launches the Mathematica kernel:
            IKernelLink ml = MathLinkFactory.CreateKernelLink();

            var path = @"C:\Users\zhadowoflight\Desktop\Studies\COEN_9\y-hack\lotr.wav";
            // Discard the initial InputNamePacket the kernel will send when launched.
            var data = GetDataFromWav(ml, path);
            var fft_data = GetFourierTransform(ml, data);

            Console.ReadKey();
        }

        private static double[] GetDataFromWav(IKernelLink ml, string path)
        {
            object obj = null;
            ml.WaitAndDiscardAnswer();
            var wavCommandFormat = string.Format(@"Import[""{0}"" , ""Data""]", path);
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

        private static object GetFourierTransform(IKernelLink ml, double[] data)
        {
            object o = null;

            Expr template = new Expr(ExpressionType.Symbol,"Fourier");
            Expr arg = new Expr(data);
            Expr quer = new Expr(template, new object[] { arg });

            ml.Evaluate(quer);
            ml.WaitForAnswer();

            try
            {
                o = ml.GetE();
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
            var cast = (double[,])o;
            var res = new double[cast.GetLength(1)];
            for (var ii = 0; ii < cast.GetLength(1); ++ii) //TODO: Kill this for loop! there ought to be a native way
            {
                res[ii] = cast[0, ii];//Throw away one channel, we're not stereo anyways
            }

            return res;
        }
    }
}
