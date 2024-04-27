using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class Facturas : BaseClass
    {
        public Facturas()
        {
            this.Usuarios = new List<UsuarioBase>();
            this.SedesEspec = new List<SedeEspecialidad>();
            this.especialidad = new List<Especialidad>();
            this.citas = new List<Cita>();
        }
        
                
        public DateTime FechaPago { get; set; }
        public string Estado { get; set; }

        public int MontoFinal { get; set; }

        public int  IdCita { get; set; }
        public List<UsuarioBase> Usuarios { get; set; }
        public List<SedeEspecialidad> SedesEspec { get; set; }
        public List<Especialidad> especialidad { get; set; }
        public List<Cita> citas { get; set; }

        
    }
}
