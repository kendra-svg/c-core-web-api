using DataAccess.DAO;
using DataAccess.Mappers;
using DTO;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;
using System.Data;


namespace WEB_UI.Controllers
{
    public class LoginController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Login()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Login(UsuarioBase usuario, SqlDao sqlDao)
        {
            if (usuario.Correo == null || usuario.Contrasenna == null)
            {
                ViewBag.Message = "No puede dejar campos vacíos";
                return View();
            }

            bool credencialesValidas = sqlDao.VerificarCredenciales(usuario.Correo, usuario.Contrasenna);

            if (credencialesValidas)
            {
                HttpContext.Session.SetString("user", usuario.Correo);
                return RedirectToAction("LandingPaciente", "Paciente");
            }
            else
            {
                ViewBag.Message = "Correo electronico o clave incorrectos";

                return View();
            }


        }
        public IActionResult Logout()
        {
            HttpContext.Session.Clear();
            return RedirectToAction("Index", "Home");
        }


    }

    
}