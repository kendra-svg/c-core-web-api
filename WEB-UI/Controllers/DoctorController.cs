using Microsoft.AspNetCore.Mvc;

namespace WEB_UI.Controllers
{
    public class DoctorController : Controller
    {
        public IActionResult LandingDoctor()
        {
            return View();
        }
        public IActionResult Sedes()
        {
            return View();
        }
    }
}
