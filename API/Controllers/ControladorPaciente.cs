using DTO;
using Microsoft.AspNetCore.Mvc;

using Microsoft.AspNetCore.Cors;

namespace API.Controllers
{
    [EnableCors("Demo_Policy")]
    [Route("api/[controller]/[action]")] /*con action se refiere al nombre, por ejemplo GetPatient*/
    /*despues del https://localhost:7176/ viene el URI (uniform resoure identifier) que empieza a partir del api/*/
    [ApiController]
    public class ControladorPaciente : ControllerBase
    {
     

        [HttpGet]
        public Paciente GetPaciente(int id) {
            //ManagerPaciente mp = new ManagerPaciente();
            //return mp.GetPatient(id);
            return null;
        }

        [HttpGet]
        public List<Paciente> GetAllPacientes()
        {

            //ManagerPaciente mp = new ManagerPaciente();
            //return mp.GetAllPatients();
            return null;
        }

    }
}
