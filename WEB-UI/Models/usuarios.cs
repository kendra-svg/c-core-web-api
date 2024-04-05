using DTO;

namespace WEB_UI.Models
{
    public class usuarios
    {
        public int Id { get; set; }
        public string Nombres { get; set; }
        public string Apellidos { get; set; }
        public string Telefono { get; set; }
        public string Correo { get; set; }
        public string Sexo { get; set; }
        public DateTime FechaNacimiento { get; set; }
        public int Edad { get; set; }
        public string NombreSede { get; set; }
        public string Canton { get; set; }
        public string Provincia { get; set; }
        public string Distrito { get; set; }
        public Doctor Doctor { get; set; }
        public Enfermero Enfermero { get; set; }
        public Paciente Paciente { get; set; }
        public Secretario Secretario { get; set; }


    }
}
