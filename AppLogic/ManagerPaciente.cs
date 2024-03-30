
using dataaccess.crud;
using DTO;
using System.Linq;
namespace AppLogic
{
    public class PatientManager
    {
        public Paciente GetPaciente(int id)
        {
            Patientcrud crud = new Patientcrud();
            return crud.RetrieveAll<Patient>();

        }



        private void CompletarDatosPaciente(Paciente pac)
        {

           

        }

        public List<Paciente> GetAllPacientes()
        {

           
            return null;

        }

        public List<Cita> GetAppointments(string socialSecID)
        {
            return null;
        }
    }
}
