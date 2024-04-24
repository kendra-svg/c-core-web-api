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
        [HttpGet]
        public Especialidad GetEspecialidadById(int idEspecialidad)
        {
            EspecialidadesManager manager = new EspecialidadesManager();
            return manager.GetEspecialidadById(idEspecialidad);
        }

        [HttpGet]
        public API_Response GetEspecByIdA(int idespec)
        {
            API_Response response = new API_Response();
            try
            {
                EspecialidadesManager espe = new EspecialidadesManager();
                response.Data = espe.GetEspecById(idespec);
                response.Result = "OK";
            }
            catch (Exception ex)
            {
                response.Result = "ERROR";
                response.Message = ex.Message;
            }
            return response;
        }

        [HttpGet]
        public List<Especialidad> GetEspecById(int idespec)
        {
            EspecialidadesManager manager = new EspecialidadesManager();
            return manager.GetEspecById(idespec);
        }

        //get especialidad
        [HttpGet]
        public List<Especialidad> GetAllEspecialidad ()
        {
            EspecialidadesManager manager = new EspecialidadesManager();
            return manager.GetAllEspecialidades();

        }
        [HttpGet]
        public API_Response GetAllEspecialidadesA()
        {
            API_Response response = new API_Response();
            try
            {
                EspecialidadesManager espe = new EspecialidadesManager();
                response.Data = espe.GetAllEspecialidades();
                response.Result = "OK";
            }
            catch (Exception ex)
            {
                response.Result = "ERROR";
                response.Message = ex.Message;
            }
            return response;
        }
        [HttpPut]
        public void UpdateEspecialida(int id, int costo, int iva)
        {
            EspecialidadesManager espe = new EspecialidadesManager();
            espe.UpdateEspe(id, costo, iva);
        }
   

    }
}
