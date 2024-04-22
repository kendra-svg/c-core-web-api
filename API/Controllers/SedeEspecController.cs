using AppLogic;
using DTO;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [EnableCors("Demo_Policy")]
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class SedeEspecController : Controller
    {
        [HttpPost]
        public string CreateSede(SedeEspecialidad app)
        {
            SedeEspeManager manager = new SedeEspeManager();
            return manager.CreateSedeEspe(app);
        }
        [HttpGet]
        public API_Response GetAllSedesEspeA()
        {
            API_Response response = new API_Response();
            try
            {
                SedeEspeManager sedeespe = new SedeEspeManager();
                response.Data = sedeespe.GetAllSedes();
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
        public SedeEspecialidad GetSedeEspecialidadByID(int id)
        {
            SedeEspeManager apm = new SedeEspeManager();
            return apm.GetSedeEspecialidad(id);
        }

    }
}
