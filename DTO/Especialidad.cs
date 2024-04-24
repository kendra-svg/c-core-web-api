using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class Especialidad : BaseClass
    {
        public Especialidad() 
        {
            this.Usuario = new List<UsuarioBase>();
            this.Sedespe = new List<SedeEspecialidad>();
            this.Sede = new List<Sede>();
        }
        public string Nombre { get; set; }
        public int Costo { set; get; }
        public int IVA { set; get; }

        //public int IdSede { get; set; }
        
        public List<UsuarioBase> Usuario { set; get; }
        public List<SedeEspecialidad> Sedespe { set; get; }
        public List<Sede> Sede {  set; get; }
    }
}
