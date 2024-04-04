namespace WEB_UI.Models
{
    public class Agenda
    {
        public int IdCita { get; set; }
        public string NombrePaciente { get; set; }
        public DateTime Fecha { get; set; }
        public string HoraInicio { get; set; }
        public string HoraFin { get; set; }
        public string Descripcion { get; set; }
        public string Sede { get; set; }
        public string Especialidad { get; set; }
        public decimal Precio { get; set; }
    }
}
