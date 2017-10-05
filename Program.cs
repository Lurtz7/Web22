using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace test
{
    class Program
    {
        static void Main(string[] args)
        {
            string a = "ACADEMY";
            string b = "ACADEMY";

            int resultat = string.Compare(a, b);

            if (resultat < 0)
            {

                Console.WriteLine($"{a} är mindre än {b}");
            }
            else if (resultat > 0)
            {
                Console.WriteLine($"{a} är mindre än {b}");
            }

            else
            {
                Console.WriteLine($"{a} är lika med {b}");
            }
        }
    }
}
