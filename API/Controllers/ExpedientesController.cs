using AppLogic;
using DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class ExpedientesController : ControllerBase
    {
        [HttpPost]
        public string CreateExpediente(Expediente app) 
        {
            ExpedientesManager manager = new ExpedientesManager();
            return manager.CreateExpediente(app);
        }
    }
}
