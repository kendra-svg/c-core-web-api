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
    public class EspecialidadesController : ControllerBase
    {
        [HttpPost]
        public string CreateEspecialidad(Especialidad espec)
        {
            EspecialidadesManager manager = new EspecialidadesManager();
            return manager.CreateEspecialidad(espec);
        }


        [HttpPut]
        public string UpdateEspecialidadById(Especialidad espec)
        {
            EspecialidadesManager manager = new EspecialidadesManager();
            return manager.UpdateEspecialidadById(espec);
        }

        [HttpGet]
        public Especialidad GetEspecialidadById(int idEspecialidad)
        {
            EspecialidadesManager manager = new EspecialidadesManager();
            return manager.GetEspecialidadById(idEspecialidad);
        }

        //get especialidad
        [HttpGet]
        public List<Especialidad> GetAllEspecialidad ()
        {
            EspecialidadesManager manager = new EspecialidadesManager();
            return manager.GetAllEspecialidades();

        }
   

    }
}
