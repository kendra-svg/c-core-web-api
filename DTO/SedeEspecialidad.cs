using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class SedeEspecialidad: BaseClass
    {
        public int IdSede {  get; set; }
        public int IdUsuario {  get; set; }
        public int IdEspecialidad { get; set; }

        //public List<Sede> Sede { get; set; }
        //public List<Especialidad> Especialidad { get; set; }
        //public List<UsuarioBase> Usuario { get; set; }

    }
}
