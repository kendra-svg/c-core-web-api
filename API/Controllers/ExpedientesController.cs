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
    public class ExpedientesController : ControllerBase
    {
        [HttpGet]

        public Expediente GetExpedienteById(int idExp)
        {
            ExpedientesManager manager = new ExpedientesManager();
            
            return manager.GetExpedienteById(idExp);

        }

        [HttpGet]
        public List<Expediente> GetExpedientes()
        {
            ExpedientesManager pm = new ExpedientesManager();
            return pm.GetAllexpediente();
        }

        [HttpPut]
        public string UpdateExpediente(Expediente exp)
        {
            ExpedientesManager manager = new ExpedientesManager();
            

            return manager.UpdateExpediente(exp);
        }
    }
}
