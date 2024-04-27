using AppLogic;
using DTO;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [EnableCors("Demo_Policy")]
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class CitasController : ControllerBase
    {

        [HttpPost]
        public string CreateCita(Cita cita)
        {
            CitasManager manager = new CitasManager();
            
            
            return manager.CreateCita(cita);
        }

        //[HttpGet]
        //public List<Laboratorio> GetLaboratorios()
        //{
        //    LaboratoriosManager lm = new LaboratoriosManager();
        //    return lm.GetAllLaboratorios();
        //}

        //[HttpGet]
        //public List<Laboratorio> GetAllLabs()
        //{
        //    LaboratoriosManager lm = new LaboratoriosManager();
        //    return lm.GetAllLabs();
        //}

        [HttpGet]
        public List<Cita> GetLabsByUserId(int Id)
        {
            CitasManager manager = new CitasManager();

            return manager.RetrieveAllByUserId(Id);
        }


        //[HttpGet]
        //public string DeleteLabById(int labId)
        //{
        //    LaboratoriosManager manager = new LaboratoriosManager();
        //    Console.WriteLine(labId);
        //    return manager.DeleteLabById(labId);
        //}

    }
}
