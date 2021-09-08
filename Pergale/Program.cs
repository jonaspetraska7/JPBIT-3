using System;

namespace Pergale
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Iveskite Pirmaji skaiciu");
            int Skaicius1 = int.Parse(Console.ReadLine());
            Console.WriteLine("Iveskite Antraji skaiciu");
            int Skaicius2 = int.Parse(Console.ReadLine());
            Console.WriteLine("Iveskite Treciaji skaiciu");
            int Skaicius3 = int.Parse(Console.ReadLine());
            Console.WriteLine("Iveskite Ketvirtaji skaiciu");
            int Skaicius4 = int.Parse(Console.ReadLine());

            Console.WriteLine("Buriame is kavos tirsciu {0}", '\n');
            
            Nugalesim(Skaicius1, Skaicius2, Skaicius3, Skaicius4);
                
        }
        static void Nugalesim(int a, int b, int c, int d)
        {
            int rezultatas1 = a * b;
            int rezultatas2 = c + d;

            if (rezultatas1 >= rezultatas2)
            {
                Console.WriteLine("Zalgiris laimes eurolyga");
                Console.WriteLine();
                for (int i = 0; i < 5; i++)
                {
                    Console.WriteLine("ŽALGIRIS");
                    Console.WriteLine("***");
                }
            }
            else
            {
                Console.WriteLine("Bandyk laime po kitu kamsteliu");
            }

            Console.ReadLine();
                
        }

        
    }
      
}
