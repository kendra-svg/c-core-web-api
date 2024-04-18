using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class Especialidad : BaseClass
    {
        public string Nombre { get; set; }
        public int Costo { set; get; }
        public int IVA { set; get; }
    }
}
