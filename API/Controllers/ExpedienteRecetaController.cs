using AppLogic;
using DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class ExpedienteRecetaController : ControllerBase
    {
        [HttpPost]
        public string CreateExpedienteReceta(ExpedienteReceta app)
        {
            ExpedienteRecetaManager manager = new ExpedienteRecetaManager();
            return manager.CreateSede(app);
        }
    }
}
