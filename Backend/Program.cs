#define DYN_THRESH
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
        static int SAMPLE_COUNT = 500;// chunks of 500 / rate (ms) 
        static double LOWER_THRESHOLD = 1;//For tuning = 5;
        static int UPPER_THRESHOLD = 100;
        static void Main(string[] args)
        {
            double[] arr = { 0, 10, 100, 1000, 10000, 400, 440, 32.703 };
            foreach (double d in arr)
            {
                string actual = FrequencyToNote(d).ToString();
            }
            // This launches the Mathematica kernel:
            IKernelLink ml = MathLinkFactory.CreateKernelLink();
            var myComplexType = new Complex(1,2);
            ml.ComplexType = myComplexType.GetType();
            ml.WaitAndDiscardAnswer();
            // Discard the initial InputNamePacket the kernel will send when launched.


            var path = @"C:\Users\zhadowoflight\Desktop\Studies\COEN_9\y-hack\lotr.wav";
            //var path = @"C:\Users\zhadowoflight\Desktop\Studies\COEN_9\y-hack\fureliseshort.wav";
            //var path = @"C:\Users\zhadowoflight\Desktop\Studies\COEN_9\y-hack\furelise2.wav";
            //var path = @"C:\Users\zhadowoflight\Desktop\Studies\COEN_9\y-hack\furs.wav"; //toats shit
            //var path = @"C:\Users\zhadowoflight\Desktop\Studies\COEN_9\y-hack\all.wav";

            var data = GetDataFromWav(ml, path);
            data = MovingAverageSmooth(data);
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
                fft_data = MovingAverageSmooth(fft_data);
                MajorFrequencies.Add(GetMajorFrequenciesFromTransform( fft_data , rate ));
#if DEBUG
             //  File.WriteAllText(string.Format("test{0}.txt",ii),string.Join("\n",fft_data));
#endif
            }

            List<Note[]> MajorNotes = GetMajorNotesFromFrequencies(MajorFrequencies);
            WriteResults(MajorNotes);
            WriteResults(MajorFrequencies);
            var a = MakeMusicSheet(MajorNotes);
            Console.WriteLine("All done");
            Console.ReadKey();
        }

        public class Note 
        {
            public string _step;
            public int _octave;
            public int _start;
            public int _end;

            public Note(string step, int octave, int start, int end)  
            {_step = step; _octave = octave; _start = start ; _end = end;}

            public override string ToString()
            {
                return string.Format("{0}{1}",_step,_octave);
            }
        }

        public static List<Note> MakeMusicSheet(List<Note[]>  majorNotes)
        {
            var res = new List<Note>();
            //skip early silence
            var sil = 0;
            for (; sil < majorNotes.Count; ++sil)
            {
                if (majorNotes[sil].Length > 0)
                    break;
            }

            var count = 1;
            List<Note> now = new List<Note>();
            for (var ii = sil; ii < majorNotes.Count; ++ii)
            {
                var instant = majorNotes[ii];
                for (var ll = 0; ll < instant.Length; ++ll)
                {

                    for (var kk = 0; kk < instant.Length; ++kk)
                    {
                        if (!HasTheNote(now, majorNotes[ii][kk]))
                        {
                            instant[kk]._start = count;
                            now.Add(instant[kk]);
                        }
                    }

                }

                for (var kk = 0; kk < now.Count; ++kk)
                {
                    if (!HasTheNote(instant, now[kk]))
                    {
                        now[kk]._end = count;
                        res.Add(now[kk]);
                        now.RemoveAt(kk);
                        --kk;
                    }
                }
                count++;
            }

            return res;
        }

        private static bool HasTheNote(Note[] instant, Note note)
        {
            foreach (var n in instant)
            {
                if (n._octave == note._octave && n._step == note._step)
                    return true;
            }
            return false;
        }

        static public bool HasTheNote(List<Note> list, Note c )
        {
            foreach(var n  in list)
            {
                if(n._octave == c._octave && n._step == c._step)
                    return true;
            }
            return false;
        }

        static public int WhereIsTheNote(List<Note> list, Note c)
        {
            for (var ii = 0; ii < list.Count; ++ii)
            {
                if (list[ii]._octave == c._octave && list[ii]._step == c._step)
                    return ii;
            }
            return -1;
        }

        private static double[] MovingAverageSmooth(double[] Data)
        {
            var res = new double[Data.Length];
            for (var ii = 1; ii < res.Length - 1; ++ii)
            {
                res[ii] = Data[ii] * 0.8 + Data[ii - 1] * 0.1 + Data[ii + 1] * 0.1; 
            }
            return res;
        }

        private static List<Note[]> GetMajorNotesFromFrequencies(List<double[]> MajorFrequencies)
        {
            var res = new List<Note[]>();
            foreach (var freqs in MajorFrequencies)
            { 
                var notes =new List<Note> ();
                for (var ii = 0; ii < freqs.Length; ++ii )
                {
                    notes.Add(FrequencyToNote(freqs[ii]));
                }
                res.Add(notes.ToArray());
            }
            return res;
        }

        static double[] cees = 
            { 
                8.176,      16.352  ,   32.703     ,65.406     ,130.813,
                261.626,    523.521 ,   1046.502   ,2093.005,   4186.009,   
                8372.018,   16744.036 
            };
        static double MagicMusicNumber = Math.Pow(2, (double)1 / (double)12);
        public static Note FrequencyToNote(double freq)
        {


            var ind = 0;
            while (freq > cees[ind])
                ind++;
            ind -= 1;//1 for the extra addition
            var CeeFam = ind - 1;// and one to account for the fact that the first index is actually C-1

            if (freq <= MagicMusicNumber)
                return new Note("L0",0,0,0); //Too low to consider

            var approx = (ind == -1 ? MagicMusicNumber : cees[ind]);
            var next = 0.0;

            var noteLetterModifier = 0;
            do
            {
                next = approx * MagicMusicNumber;
                if (freq < next)
                    break;
                ++noteLetterModifier;
                approx = next;

            } while (true);

            //Chose to go up or down
            {
                var distanceUp = Math.Abs(freq - next);
                var distanceDown = Math.Abs(freq - approx);
                if (distanceUp < distanceDown)
                {
                    noteLetterModifier += 1;
                }
            }

            var letter = NoteLetterGetter(noteLetterModifier);
            if (letter == "++")
            {
                letter = "C";
                CeeFam++;
            }
            // Console.WriteLine(string.Format("The freq {0} is approx {1} < %{0}% < {2}. Me thinks this is {3}{4}", freq, approx, next, letter, CeeFam));
            //var ret = string.Format("Family of {0} freq. The C{1} family", ind == -1 ? 0 : cees[ind], ind-1);

            return new Note(letter,CeeFam,0,0);
        }

        static string NoteLetterGetter ( int letterModifier )
        {
            switch(letterModifier)
            {
                case 0:
                    return "C";
                case 1:
                    return "C#";
                case 2:
                    return "D";
                case 3:
                    return "D#";
                case 4:
                    return "E";
                case 5:
                    return "F";
                case 6:
                    return "F#";
                case 7:
                    return "G";
                case 8:
                    return "G#";
                case 9:
                    return "A";
                case 10:
                    return "A#";
                case 11:
                    return "B";
                case 12:
                    return "++";
                default:
                    return "?";

            }
        }

        static void WriteResults(List<Note []> values)
        {
            StringBuilder buildIt = new StringBuilder();
            foreach (Note[] arr in values)
            {
                foreach (Note d in arr)
                { 
                    buildIt.Append(string.Format("{0},",d));
                }
                buildIt.Append('\n');
            }
            File.WriteAllText("Notes.txt", buildIt.ToString());
        }
        
        
        static void WriteResults(List<double[]> values)
        {
            StringBuilder buildIt = new StringBuilder();
            foreach (double[] arr in values)
            {
                foreach (double d in arr)
                {
                    buildIt.Append(string.Format("{0},", d));
                }
                buildIt.Append('\n');
            }
            File.WriteAllText("Freqs.txt", buildIt.ToString());
        }

        
        public static double[] GetMajorFrequenciesFromTransform(double[] fft_data, int rate)
        {
            List<double> freqs = new List<double>();

#if DYN_THRESH
            var THRESHOLD = 0.0;
            for (var ii = 0; ii < fft_data.Length/2; ++ii)
            {
                if (fft_data[ii] > THRESHOLD)
                {
                    THRESHOLD = fft_data[ii];
                }
            }
            THRESHOLD = THRESHOLD * 0.7;//70% of the max
            if (THRESHOLD < LOWER_THRESHOLD)
                THRESHOLD = LOWER_THRESHOLD;
#endif

            //Magic formula : Freq = Abs(2*index/length - 1 )
            for (var ii = 0; ii < fft_data.Length/2; ++ii)
            {
                if (fft_data[ii] > THRESHOLD)
                {
                    Console.Write(fft_data[ii]+",");
                    freqs.Add((double)rate  * (double)ii / ((double)fft_data.Length/2.0));
                    // freqs.Add(rate* Math.Abs(2 * (double)ii / (double)fft_data.Length - 1));
                }
                
            }
            Console.WriteLine();

            return freqs.ToArray();
        }



        public static double[] GetDataFromWav(IKernelLink ml, string path)
        {
            object obj = null;
            var wavCommandFormat = string.Format(@"Data2 = Import[""{0}"" , ""Data""]", path.Replace("\\","\\\\") );
            ml.Evaluate(wavCommandFormat);
            PacketType p = ml.WaitForAnswer();
            object tempo = checkPacketType(p);
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

        private static object checkPacketType(PacketType p)
        {
            return p.ToString();
        }

        public static int GetSamplingRateFromWav(IKernelLink ml, string path)
        {
            object obj = null;
            var wavCommandFormat = string.Format(@"Import[""{0}"" , ""SampleRate"" ]", path.Replace("\\","\\\\") );
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
