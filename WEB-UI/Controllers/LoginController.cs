
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

            bool credencialesValidas = sqlDao.VerificarCredenciales(usuario.Correo, usuario.Contrasenna);
            //bool esValido = false;


            if (!credencialesValidas)
            {

                ViewBag.Message = "Correo electronico o clave incorrectos";
                return View();
            }
            HttpContext.Session.SetString("user", usuario.Correo);
            return RedirectToAction("LandingPaciente", "Paciente");
        }


        public IActionResult Logout()
        {
            HttpContext.Session.Clear();
            return RedirectToAction("Index", "Home");
        }

        public IActionResult RecuperarContrasenna()
        {
            return RedirectToAction("RecuperarContrasenna", "RecuperarContrasenna");
        }

        public IActionResult Registro()
        {

            return RedirectToAction("Registro", "Registro");
        }


    }


}