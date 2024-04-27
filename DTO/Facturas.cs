using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class Facturas : BaseClass
    {
        public DateTime FechaPago { get; set; }
        public string Estado { get; set; }

        public int MontoFinal { get; set; }

        public int  IdCita { get; set; }
    }
}
