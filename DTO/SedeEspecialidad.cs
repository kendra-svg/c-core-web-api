using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class SedeEspecialidad: BaseClass
    {

        public SedeEspecialidad()
        {
            this.Sede = new List<Sede>();
            this.Especialidad = new List<Especialidad>();
            this.Usuario = new List<UsuarioBase>();
        }
        public List<Sede> Sede { get; set; }
        public List<Especialidad> Especialidad { get; set; }
        public List<UsuarioBase> Usuario { get; set; }

    }
}
