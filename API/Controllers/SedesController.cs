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
        public Sede GetSedeById(int id)
        {
            SedesManager pm = new SedesManager();
            return pm.GetSedeID(id);
        }
    }
}
