namespace WEB_UI.Models
{
    public class Cita
    {
        public int Fecha{ get; set; }
        public string Inicio { get; set; }
        public string Fin { get; set; }
        public string Paciente { get; set; }
        public int Medico { get; set; }
        public string Especialidad {  get; set; }
        public string PagoCita { get; set; }
        public string Precio { get; set;}
        public string Estado { get; set; }
        public string Acciones { get; set;}
    }
}
