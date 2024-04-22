using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class Sede : BaseClass
    {
        public Sede()
        {
            this.Especialidad = new List<Especialidad>();
            this.Usuario = new List<UsuarioBase>();
            this.SedeEspe = new List<SedeEspecialidad>();
        }

        public string Nombre { get; set; }

        public string Descripcion { get; set; }

        public DateTime FechaCreacion { get; set; }

        public string Ubicacion { get; set; }

        public string Canton { get; set; }

        public string Provincia { get; set; }

        public string Distrito { get; set; }

        public string Direccion { get; set; }

        public string Foto { get; set; }

        //public List<Sede> Sede { get; set; }
        public List<Especialidad> Especialidad { get; set; }
        public List<UsuarioBase> Usuario { get; set; }
        public List<SedeEspecialidad> SedeEspe { get; set; }
    }
}
