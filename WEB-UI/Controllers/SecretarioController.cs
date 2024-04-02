using Microsoft.AspNetCore.Mvc;
using WEB_UI.Models;

namespace WEB_UI.Controllers
{
    public class SecretarioController : Controller
    {
        public IActionResult LandingSecretario()
        {
            return View();
        }
        public IActionResult Crear()
        {
            return View();
        }
        public IActionResult Lista()
        {
            return View(new List<Cita>());
        }
        public IActionResult Detalles()
        {
            return View();
        }
        public IActionResult PagosFacturas()
        {
            return View();
        }
    }
}


