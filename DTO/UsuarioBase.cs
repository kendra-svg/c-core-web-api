namespace DTO
{
    public class UsuarioBase : BaseClass
    {
        public string Nombre { get; set; }

        public int Id { get; set; }

        public string Apellidos { get; set; }

        public string Telefono { get; set; }

        public string Correo { get; set; }

        public string Sexo { get; set; }

        public DateTime FechaNacimiento { get; set; }

        public int Edad { get; set; }

        public string Direccion { get; set; }

        public byte[] Foto { get; set; }

        public string Contrasenna { get; set; }

        public Expediente Expedientes { get; set; } //Hace referencia al Id de la clase Expediente

        public Ubicacion Ubicaciones { get; set; } //Hace referencia al Id de la clase Ubicacion
    }
}