using AppLogic;
using DTO;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Reflection.Metadata.Ecma335;

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
    }
}
