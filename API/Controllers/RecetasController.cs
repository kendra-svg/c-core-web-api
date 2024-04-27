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
        public API_Response GetAllRecetas()
        {
            API_Response response = new API_Response();
            try
            {
                RecetasManager receta = new RecetasManager();
                response.Data = receta.GetAllRecetas();
                response.Result = "OK";
            }
            catch (Exception ex)
            {
                response.Result = "ERROR";
                response.Message = ex.Message;
            }
            return response;
        }

        [HttpGet]
        public List<Receta> GetRecetas()
        {
            RecetasManager pm = new RecetasManager();
            return pm.GetAllRecetas();
        }


    }
}
