using Microsoft.AspNetCore.Mvc;

namespace WEB_UI.Controllers
{
    public class PacienteController : Controller
    {
        public IActionResult LandingPaciente()
        {
            return View();
        }
    }
}
