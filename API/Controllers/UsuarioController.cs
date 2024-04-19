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
    public class UsuarioController : ControllerBase
    {
        [HttpPost]
        public string CreateUsuario(UsuarioBase user)
        {
            UsuariosManager manager = new UsuariosManager();
            return manager.CreateUsuario(user);
        }
        [HttpGet]
        public List<UsuarioBase> GetUsuarios()
        {
            UsuariosManager pm = new UsuariosManager();
            return pm.GetAllUsuarios();

        }

        [HttpGet]
        public List<UsuarioBase> GetDoctors()
        {
            UsuariosManager pm = new UsuariosManager();
            return pm.GetAllDoctors();
        }

        [HttpGet]
        public List<UsuarioBase> GetEnfermeros()
        {
            UsuariosManager pm = new UsuariosManager();
            return pm.GetAllEnfermeros();
        }

        [HttpGet]
        public List<UsuarioBase> GetSecretarios()
        {
            UsuariosManager pm = new UsuariosManager();
            return pm.GetAllSecretarios();
        }

        [HttpGet]
        public List<UsuarioBase> GetPacientes()
        {
            UsuariosManager pm = new UsuariosManager();
            return pm.GetAllPacientes();
        }

        [HttpGet]
        public List<UsuarioBase> GetAdministradores()
        {
            UsuariosManager pm = new UsuariosManager();
            return pm.GetAllAdministradores();
        }

        [HttpGet]
        public List<UsuarioBase> GetUserCredentials(string correo, string contrasenna)
        {
            UsuariosManager um = new UsuariosManager();
            return um.GetUserCredentials(correo, contrasenna);
        }

        [HttpGet]
        public List<UsuarioBase> GetUserByCorreo(string correo)
        {
            UsuariosManager um = new UsuariosManager();
            return um.GetUserByCorreo(correo);
        }

        [HttpGet]
        public List<UsuarioBase> GetOTPByEmail(string correo)
        {
            UsuariosManager um = new UsuariosManager();
            return um.GetOTPByEmail(correo);
        }

        [HttpGet]
        public List<UsuarioBase> GetUserByOtpAndEmail(string correo, int otp)
        {
            UsuariosManager um = new UsuariosManager();
            return um.GetUserByOtpAndEmail(correo, otp);
        }

        [HttpPut]
        public void UpdateOtpAndTimestamp(string correo)
        {
            UsuariosManager um = new UsuariosManager();
            um.UpdateOtpAndTimestamp(correo);
        }

        [HttpPut]
        public void UpdateVerification(string correo)
        {
            UsuariosManager um = new UsuariosManager();
            um.UpdateVerification(correo);
        }

        [HttpPut]
        public void UpdatePassword(string correo, string nuevaClave)
        {
            UsuariosManager um = new UsuariosManager();
            um.UpdatePassword(correo, nuevaClave);
        }
        
    }
}
