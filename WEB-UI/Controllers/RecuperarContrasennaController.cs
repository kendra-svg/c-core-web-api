using Microsoft.AspNetCore.Mvc;

namespace WEB_UI.Controllers
{
    public class RecuperarContrasennaController : Controller
    {
        // GET: RecuperarContrasenna
        public ActionResult Index()
        {
            return View();
        }

      
        public ActionResult RecuperarContrasenna()
        {
            return View();
        }

        [HttpPost]
        public ActionResult EnviarCodigo(string correo)
        {
            // lógica para enviar el código de verificación al correo especificado

            // Por ahora, solo redireccionaremos a la vista de confirmación de envío
            return RedirectToAction("ConfirmacionEnvio");
        }

        public ActionResult ConfirmacionEnvio()
        {
            return View();
        }
    }
}
