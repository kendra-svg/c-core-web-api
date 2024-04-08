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
        [HttpPost]
        public string CreateExpediente(Expediente exp)
        {
            ExpedientesManager manager = new ExpedientesManager();
            return manager.CreateExpediente(exp);
        }
    }
}
