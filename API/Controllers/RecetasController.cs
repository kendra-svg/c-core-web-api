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
        public string CreateReceta(Receta rec)
        {
            RecetasManager manager = new RecetasManager();
            return manager.CreateReceta(rec);
        }

        [HttpPost] //update
        public string UpdateRecipeById(Receta rec)
        {
            RecetasManager manager = new RecetasManager();
            return manager.UpdateRecipeById(rec);
        }



        [HttpGet] //solicitar datos 
        public List<Receta> GetAllReceta(Receta app)
        {
            RecetasManager rec = new RecetasManager();
            return rec.GetAllRecetas();
        }
    }
}
