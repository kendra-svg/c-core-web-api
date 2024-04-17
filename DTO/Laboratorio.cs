using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class Laboratorio : BaseClass
    {
        
        public string NombreExamen { get; set; }
        public string Comentario { get; set; }
        public string Foto { get; set; }
        public DateTime Fecha { get; set; }

    }
}