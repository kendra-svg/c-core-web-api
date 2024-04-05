using Microsoft.AspNetCore.Mvc;

namespace WEB_UI.Controllers
{
    public class ServiciosController: Controller
    {
        public IActionResult Servicios()
        {
            return View();
        }
    }
}
