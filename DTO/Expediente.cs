using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class Expediente
    {
        public string Id { get; set; }
        public string HistorialClinico { get; set; }
        public Cita Citas { get; set; } //Hace referencia al Id de la clase Cita


    }
}
