using DTO;
using Microsoft.AspNetCore.Mvc;

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
        public IActionResult Login(UsuarioBase usuario)
        {
            if (usuario.Nombre == null || usuario.Contrasenna == null)
            {
                ViewBag.Message = "Usuario y/o password incorrectos";
                return View();
            }

            //httpClient -> API(user) --> Admin --> DAO --> BD

            //cambiar por nombres y apellidos
            usuario.Nombre = "Juan Perez Perez";

            //Inicia sesion, propiedades de la clase usuario. Nombre completo no existe, cambiar por nombres  y apellidos
            HttpContext.Session.SetString("user", usuario.Nombre);
            return RedirectToAction("Index", "Home");
        }

        public IActionResult Logout()
        {
            HttpContext.Session.Clear();
            return RedirectToAction("Index", "Home");
        }


    }
}