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
    public class RecetasController : ControllerBase
    {
        [HttpPost] //create
        public string CreateReceta(Receta rec)
        {
            RecetasManager manager = new RecetasManager();
            return manager.CreateReceta(rec);
        }

        [HttpPut] //update
        public string UpdateRecipeById(Receta rec)
        {
            RecetasManager manager = new RecetasManager();
            return manager.UpdateRecetaById(rec);
        }

        [HttpGet] //id
        public Receta GetRecetaById(int idReceta)
        {
            RecetasManager manager = new RecetasManager();
            return manager.GetRecetaById(idReceta);
        }

        [HttpGet] //Get all
        public List<Receta> GetAllReceta()
        {
            RecetasManager rec = new RecetasManager();
            return rec.GetAllRecetas();
        }
        
        
        
    }
}
