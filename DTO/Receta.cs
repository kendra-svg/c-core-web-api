using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class Receta : BaseClass
    {
        public DateTime FechaEmision { get; set; }
        public string DosisRecomendada { get; set; }
        public string RecomendacionAdicional { get; set; }
        public string Foto { get; set; }
        public string NombreMedicamento { set; get; }
    }
}