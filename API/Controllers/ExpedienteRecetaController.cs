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
        [HttpGet]
        public API_Response GetAllExpedienteReceta()
        {
            API_Response response = new API_Response();
            try
            {
                ExpedienteRecetaManager expe = new ExpedienteRecetaManager();
                response.Data = expe.GetAllexpediente();
                response.Result = "OK";
            }
            catch (Exception ex)
            {
                response.Result = "ERROR";
                response.Message = ex.Message;
            }
            return response;
        }
      
    }
}
