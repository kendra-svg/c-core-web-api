using Microsoft.AspNetCore.Mvc;

namespace WEB_UI.Controllers
{
    public class EnfermeroController : Controller
    {
        public IActionResult LandingEnfemero()
        {
            return View();
        }
        public IActionResult Sedes()
        {
            return View();
        }
    }
}
