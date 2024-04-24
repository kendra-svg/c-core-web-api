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
    public class SedesController : ControllerBase
    {
        [HttpPost]
        public string CreateSede(Sede app)
        {
            SedesManager manager = new SedesManager();
            return manager.CreateSede(app);
        }
        [HttpGet]
        public List<Sede> GetSedes()
        {
            SedesManager pm = new SedesManager();
            return pm.GetAllSedes();
        }
        [HttpGet]
        public List<Sede> GetSedeById(int id)
        {
            SedesManager pm = new SedesManager();
            return pm.GetSedeByIDI(id);
        }
        [HttpGet]
        public API_Response GetAllSedesA()
        {
            API_Response response = new API_Response();
            try
            {
                SedesManager sede = new SedesManager();
                response.Data = sede.GetAllSedes();
                response.Result = "OK";
            }catch (Exception ex)
            {
                response.Result = "ERROR";
                response.Message = ex.Message;
            }
            return response;
        }
        [HttpPut]
        public void updateSede(int id, string nombre, string descripcion, DateTime date, string direccion, string provincia, string canton, string distrito, string ubicaciones)
        {
            SedesManager sede = new SedesManager();
            sede.UpdateSede(id, nombre,descripcion,date,direccion,provincia,canton,distrito,ubicaciones);
        }
    }
}
