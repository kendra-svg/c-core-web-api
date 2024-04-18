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
    public class RecetasController : Controller
    {
        [HttpPost] //create
        public string CreateReceta(Receta app)
        {
            RecetasManager manager = new RecetasManager();
            return manager.CreateReceta(app);
        }

        [HttpGet] //solicitar datos 
        public List<Receta> GetAllReceta(Receta app)
        {
            RecetasManager rec = new RecetasManager();
            return rec.GetAllRecetas();
        }
    }
}
