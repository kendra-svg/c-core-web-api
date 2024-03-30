using AppLogic;
using DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class CantonesController : ControllerBase
    {
        [HttpPost]
        public string CreateCanton(Canton app)
        {
            CantonesManager manager = new CantonesManager();
            return manager.CreateCanton(app);
        }
    }
}
