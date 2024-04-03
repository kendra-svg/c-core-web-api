using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class Receta
    {
        public string Id { get; set; }
        public DateTime FechaEmision { get; set; }
        public string DosisRecomendada { get; set; }
        public string RecomendacionAdicional { get; set; }
        public string Foto { get; set; }
        public string IdRol { get; set; }
        public Sede Sedes{ get; set; } //Hace referencia al Id de la clase Sede
        public Expediente Expedientes { get; set; } //Hace referencia al Id de la clase Expediente

    }
}
