﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class UsuarioBase : BaseClass
    {
        public string Nombre { get; set; }

        public string Apellidos { get; set; }

        public string Telefono { get; set; }

        public string Correo { get; set; }

        public string Sexo { get; set; }

        public DateTime FechaNacimiento { get; set; }

        public int Edad { get; set; }

        public string Direccion { get; set; }

        public string Foto { get; set; }

        public string Rol { get; set; }
        public int Estado { get; set; }

        public string Contrasenna { get; set; }

        public string Identificacion { get; set; }

        public string Ubicaciones { get; set; } //Hace referencia al Id de la clase Ubicacion
    }
}