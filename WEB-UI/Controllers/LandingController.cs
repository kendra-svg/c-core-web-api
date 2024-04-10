using Microsoft.AspNetCore.Mvc;

namespace WEB_UI.Controllers
{
    public class LandingController : Controller
    {
        public IActionResult IndexLanding()
        {
            return View();
        }
        public IActionResult LandingEquipo()
        {
            return View();
        }

    }
}
