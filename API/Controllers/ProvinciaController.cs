using AppLogic;
using DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class ProvinciaController : ControllerBase
    {
        [HttpPost]
        public string CreateProvincia(Provincia app)
        {
            ProvinciasManager manager = new ProvinciasManager();
            return manager.CreateProvincias(app);
        }
    }
}
