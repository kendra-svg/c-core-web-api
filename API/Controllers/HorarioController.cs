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
    public class HorarioController : ControllerBase
    {

        [HttpGet]
        public List<Horarios> GetHorarioByUserId(int userId)
        {
            HorariosManager manager = new HorariosManager();
            //Console.WriteLine(userId);
            return manager.RetrieveAllByUserId(userId);
        }


       

    }
}
