using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class Ubicacion
    {
        public string Coordenadas { get; set; }
        public string Id { get; set; } 

        public Sede Sedes { get; set; } //Hace referencia al Id de la clase Sede
    }
}
