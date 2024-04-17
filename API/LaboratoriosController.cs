using AppLogic;
using DTO;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace API
{

    [EnableCors("Demo_Policy")]
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class LaboratoriosController: ControllerBase
    {
        [HttpPost]
        public string CreateLaboratorio(Laboratorio lab)
        {
            LaboratoriosManager manager = new LaboratoriosManager();
            Console.WriteLine(lab.Id);
            Console.WriteLine(lab.NombreExamen);
            return manager.CreateLaboratorio(lab);
        }

        [HttpGet]
        public List<Laboratorio> GetLaboratorios()
        {
            LaboratoriosManager lm = new LaboratoriosManager();
            return lm.GetAllLaboratorios();
        }
    }
   
}
