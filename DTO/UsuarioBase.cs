namespace DTO
{
    public class UsuarioBase
    {
        public string Nombre { get; set; }
        
        public int Id { get; set; }

        public string Apellidos { get; set; }

        public string telefono { get; set; }

        public string Correo { get; set; }

        public string sexo { get; set; }

        public DateTime FechaNacimiento { get; set; }

        public int Edad { get; set; }

        public string Direccion { get; set; }

        public byte[] foto { get; set; }

        public string contrasennas { get; set; }
    }
}
