//using AppLogic;
//using DTO;
//using Microsoft.AspNetCore.Cors;
//using Microsoft.AspNetCore.Mvc;

//namespace API.Controllers
//{
//    [EnableCors("Demo_Policy")]
//    [Route("api/[controller]/[action]")]
//    [ApiController]
//    public class EncuestasController : Controller
//    {
//        [HttpPost]//crear
//        public string CreateEncuesta(Encuestas enc)
//        {
//            EncuestasManager manager = new EncuestasManager();
//            return manager.CreateEncuesta(enc);
//        }

//        [HttpGet]
//        public List<Laboratorio> GetAllLabs()
//        {
//            LaboratoriosManager lm = new LaboratoriosManager();
//            return lm.GetAllLabs();
//        }

//        [HttpGet]
//        public List<Laboratorio> GetLabsByUserId(int Id)
//        {
//            LaboratoriosManager manager = new LaboratoriosManager();

//            return manager.GetLabByUserId(Id);
//        }


//        [HttpGet]
//        public string DeleteLabById(int labId)
//        {
//            LaboratoriosManager manager = new LaboratoriosManager();
//            Console.WriteLine(labId);
//            return manager.DeleteLabById(labId);
//        }

//    }
//}
