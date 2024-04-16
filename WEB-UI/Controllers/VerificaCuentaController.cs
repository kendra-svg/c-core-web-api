using DTO;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace WEB_UI.Controllers
{
    public class VerificaCuentaController : Controller
    {
        public IActionResult VerificaCuenta(UsuarioBase usuario)
        {
            using HttpClient client = new HttpClient();
            client.BaseAddress = new Uri("https://apisimepci.azurewebsites.net");

            var requestUri = new Uri(client.BaseAddress, "/api/Usuario/GetOTPByEmail?correo=" + usuario.Correo);
            var result = client.GetAsync(requestUri).Result;

            if (result.IsSuccessStatusCode)
            {
                var resultString = result.Content.ReadAsStringAsync().Result;
                var usuarios = JsonConvert.DeserializeObject<List<UsuarioBase>>(resultString);

                var user = usuarios.FirstOrDefault(
                    u => u.Correo == usuario.Correo && u.OTP == usuario.OTP);

                if (user != null)
                {
                    HttpContext.Session.SetInt32("OTP", user.OTP);

                }
            }
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Verificar(string correo, int codigoVerificacion)
        {
            // Realizar la llamada a la API para obtener el usuario por correo
            using HttpClient client = new HttpClient();
            client.BaseAddress = new Uri("https://apisimepci.azurewebsites.net");
            var requestUri = new Uri(client.BaseAddress, "/api/Usuario/GetUsuarioByEmail?correo=" + correo);
            var result = await client.GetAsync(requestUri);

            if (result.IsSuccessStatusCode)
            {
                var resultString = await result.Content.ReadAsStringAsync();
                var usuario = JsonConvert.DeserializeObject<UsuarioBase>(resultString);

                // Verificar si ha pasado más de un minuto desde el envío del OTP inicial
                var tiempoTranscurrido = DateTime.Now - usuario.Timeout;




                if (tiempoTranscurrido.TotalMinutes > 1)
                {
                    // Generar un nuevo OTP y actualizar la fecha de envío en la base de datos

                    usuario.OTP = new Random().Next(100000, 999999);
                    usuario.Timeout = DateTime.Now;
                    // Realizar la llamada a la API para actualizar el usuario en la base de datos
                    // ActualizarUsuario(usuario);
                }

                // Validar si el OTP ingresado coincide con el OTP en la base de datos
                if (usuario != null && usuario.OTP == codigoVerificacion)
                {
                    // OTP válido, puedes realizar la lógica adicional aquí
                    return RedirectToAction("Success"); // Redirigir a una página de éxito
                }
            }

            // Si el OTP no coincide o si ocurre algún error, redirigir a una página de error
            return RedirectToAction("Error");
        }

    }
}
