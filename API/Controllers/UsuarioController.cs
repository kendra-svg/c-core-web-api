using AppLogic;
using DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        [HttpPost]
        public string CreateUsuario(UsuarioBase app)
        {
            UsuariosManager manager = new UsuariosManager();
            return manager.CreateUsuario(app);
        }
    }
}
