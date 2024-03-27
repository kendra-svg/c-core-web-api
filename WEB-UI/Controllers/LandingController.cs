using Microsoft.AspNetCore.Mvc;

namespace WEB_UI.Controllers
{
    public class LandingController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
