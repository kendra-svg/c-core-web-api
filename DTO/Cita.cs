using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class Cita : BaseClass
    {
        public UsuarioBase Usuarios { get; set; } //Esta es la linea que intenta llamar a UsuarioBase
        public int IdCita { get; set; } //Se genera automaticamente
        public string Titulo { get; set; } //Usuario escoge
        public string Especialidad { get; set; } //Usuario escoge
        public string Diagnostico { get; set; } //Queda vacio por el usuario y lo llena el doctor
        public string NotasMedicas { get; set; } //Queda vacio por el usuario y lo llena el doctor
        public string NotasEnfermeria { get; set; } //Queda vacio por el usuario y lo llena el enfemero
        //public UsuarioBase UsuarioId { get; set; } //ROL_USUARIO_id_rol_usuarios en diagrama base de datos
        public Laboratorio Laboratorios { get; set; } //Hace referencia al Id de la clase Laboratorio
    }
}