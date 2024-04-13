using Azure.Communication.Email;
using Azure;
using DTO;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

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

        [HttpGet]
        public IActionResult VerifyEmail(string correo)
        {
            using HttpClient client = new HttpClient();
            client.BaseAddress = new Uri("https://apisimepci.azurewebsites.net");

            var requestUri = new Uri(client.BaseAddress, "/api/Usuario/GetUserByCorreo?correo=" + correo);
            var result = client.GetAsync(requestUri).Result;

            if (result.IsSuccessStatusCode)
            {
                var resultString = result.Content.ReadAsStringAsync().Result;
                var usuarios = JsonConvert.DeserializeObject<List<UsuarioBase>>(resultString);

                var user = usuarios.FirstOrDefault(u => u.Correo == correo);

                if (user != null)
                {

                    ViewBag.Correo = user.Correo;
                   HttpContext.Session.SetString("Correo", user.Correo);
                    return RedirectToAction("VerificarOTP");
                }
            }
            ViewBag.Message = "Correo no encontrado";
            return View("RecuperarContrasenna");
        }

       


    }
}
