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
    public class EncuestasController : Controller
    {
        [HttpPost]//crear
        public string CreateEncuesta(Encuestas enc)
        {
            EncuestasManager manager = new EncuestasManager();
            return manager.CreateEncuesta(enc);
        }


        [HttpGet]//get all
        public List<Encuestas> GetAllEncuestas()
        {
            EncuestasManager enc = new EncuestasManager();
            return enc.GetAllEncuestas();
        }


        [HttpGet]//id
        public Encuestas GetEncuestasById(int idEncuestas)
        {
            EncuestasManager manager = new EncuestasManager();

            return manager.GetEncuestasById(idEncuestas);
        }





        //[HttpGet]
        //public API_Response GetAllEspecialidadesA()
        //{
        //    API_Response response = new API_Response();
        //    try
        //    {
        //        EspecialidadesManager espe = new EspecialidadesManager();
        //        response.Data = espe.GetAllEspecialidades();
        //        response.Result = "OK";
        //    }
        //    catch (Exception ex)
        //    {
        //        response.Result = "ERROR";
        //        response.Message = ex.Message;
        //    }
        //    return response;
        //}

    }
}
