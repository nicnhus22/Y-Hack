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

            // Discard the initial InputNamePacket the kernel will send when launched.
            ml.WaitAndDiscardAnswer();
            var evalStr = @"Data = Import[""C:\Users\zhadowoflight\Desktop\Studies\COEN_9\y-hack\lotr.wav"" , ""DATA""] ";
            ml.Evaluate( evalStr );
            PacketType p = ml.WaitForAnswer();
            try
            {
                string res = ml.GetSymbol();
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
            Console.ReadKey();
        }
    }
}
