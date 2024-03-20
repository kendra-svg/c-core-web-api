
using DTO;
using System.Linq;
namespace AppLogic
{
    public class PatientManager
    {
        public Paciente GetPaciente(int id)
        {
            //var result = this.GetAllPatients().Where(x => x.Id == id).ToList();
            //if (result.Count > 0)
            //{
            //    this.CompletarDatosPaciente(result[0]);
            //    return result[0];
            //}
            //else
            return null;
        }



        private void CompletarDatosPaciente(Paciente pac)
        {

            //ConectorCentral connector = new ConectorCentral();
            //ConectorCentral client = connector.GetDetallesCliente(pac.SocialSecurityID);

            //llenar los datos del paciente con lo que obtuvimos del sistema central

            //var ListaClientes = connector.GetDetallesCliente();
            //List<string> specialties = connector.GetEspecialidades();

            //pac.Nombre = client.Nombre;
            //pac.Apellidos = client.LastName;
            //pac.Correo = client.Email;
            //pac.FechaNacimiento = client.Birthdate;
            //pac.Direccion = client.MainAddress;

        }

        public List<Paciente> GetAllPacientes()
        {

            //Debe conectar con Acceso a Datos y traer los datos de los pacientes
            //PatientCrud crud = new PatientCrud();
            //return crud.RetrieveAll<Patient>();
            return null;

        }

        public List<Cita> GetAppointments(string socialSecID)
        {
            /*var patientSocialSec = this.GetPatient(socialSecID);*/

            List<Paciente> patients = this.GetAllPacientes();

            //foreach (Paciente p in patients)
            //{
            //    if (p.SocialSecurityID == socialSecID)
            //    {
            //        return p.Appointments;
            //    }

            //}
            return null;
        }
    }
}
