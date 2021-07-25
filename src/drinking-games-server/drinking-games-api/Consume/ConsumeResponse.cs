using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Consume
{
    public class ConsumeResponse
    {
        public string Barcode { get; set; }
        public string Name { get; set; }
        public int Volume { get; set; }
        public double Percentage { get; set; }
    }
}
