using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class Cita : BaseClass
    {
        //    public UsuarioBase Usuarios { get; set; } //Esta es la linea que intenta llamar a UsuarioBase
        //    public int IdCita { get; set; } //Se genera automaticamente
        //    public string Titulo { get; set; } //Usuario escoge
        //    public string Especialidad { get; set; } //Usuario escoge
        //    public string Diagnostico { get; set; } //Queda vacio por el usuario y lo llena el doctor
        //    public string NotasMedicas { get; set; } //Queda vacio por el usuario y lo llena el doctor
        //    public string NotasEnfermeria { get; set; } //Queda vacio por el usuario y lo llena el enfemero
        //    public Laboratorio Laboratorios { get; set; } //Hace referencia al Id de la clase Laboratorio

        public DateTime FechasProgramadas { get; set; }

        
        //public DateTime Hora { get; set; }

        public string Diagnostico { get; set; }

        public string NotasMedicas { get; set; }

        public string NotasEnfermeria { get; set; }
        public string Estado { get; set; }
        
        public int IdUsuario { get; set; } 

        public int IdSedeEspecialidad { get; set; }  

    }
}
