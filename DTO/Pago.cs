using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class Pago
    {
        public DateTime FechaEmision { get; set; }
        public DateTime FechaPago { get; set; }
        public int Monto { get; set; }
        public UsuarioBase Usuario { get; set; }
    }
}