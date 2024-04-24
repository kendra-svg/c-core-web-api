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
    public class CuposController : ControllerBase
    {
        [HttpPost]
        public string CreateCupos(Cupos c, int idEspecialidad, int  idSede)
        {
            CuposManager manager = new CuposManager();

            Console.WriteLine(c);
            Console.WriteLine(idSede);
            Console.WriteLine(idEspecialidad);
            return manager.Create(c,idEspecialidad,idSede);
        }

        [HttpGet]
        public List<Cupos> GetCupos()
        {
            CuposManager manager = new CuposManager();
            return manager.GetAll();
        }
        [HttpPut]
        public string UpdateCupos(Cupos c)
        {
            CuposManager manager = new CuposManager();
            Console.WriteLine(c.Id);
            Console.WriteLine(c.Cantidad);
            Console.WriteLine(c.nombreSede);
            return manager.Update(c);
        }
        [HttpDelete]
        public string DeleteCupos(Cupos c)
        {
            CuposManager manager = new CuposManager();
            return manager.Delete(c);
        }
        [HttpGet]
        public Cupos GetCupoById(int id)
        {
            CuposManager manager = new CuposManager();
            return manager.GetCupoById(id);
        }

    }
}
