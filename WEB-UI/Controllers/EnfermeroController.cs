using Microsoft.AspNetCore.Mvc;

namespace WEB_UI.Controllers
{
    public class EnfermeroController : Controller
    {
        public IActionResult LandingEnfermero()
        {
            return View();
        }
        public IActionResult Sedes()
        {
            return View();
        }
        public IActionResult ExamenPersonal()
        {
            return View();
        }
        public IActionResult ExamenGeneral()
        {
            return View();
        }
        public IActionResult RecetasPacientes()
        {
            return View();
        }
        public IActionResult MisRecetas()
        {
            return View();
        }
    }
}
