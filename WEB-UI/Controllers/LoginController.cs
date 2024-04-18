
using DTO;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;
using System.Data;
using Newtonsoft.Json;



namespace WEB_UI.Controllers
{
    public class LoginController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Login()
        {

            return View();
        }


        [HttpPost]
        public IActionResult Login(UsuarioBase usuario)
        {
            using HttpClient client = new HttpClient();
            client.BaseAddress = new Uri("https://apisimepci.azurewebsites.net");

            var requestUri = new Uri(client.BaseAddress, "/api/Usuario/GetUserCredentials?correo=" + usuario.Correo + "&contrasenna=" + usuario.Contrasenna);
            var result = client.GetAsync(requestUri).Result;

            if (result.IsSuccessStatusCode)
            {
                var resultString = result.Content.ReadAsStringAsync().Result;
                var usuarios = JsonConvert.DeserializeObject<List<UsuarioBase>>(resultString);

                var user = usuarios.FirstOrDefault(u => u.Correo == usuario.Correo && u.Contrasenna == usuario.Contrasenna);

                if (user != null)
                {
                    
                    HttpContext.Session.SetString(user.Correo, JsonConvert.SerializeObject(user));

                    //se pueden mandar los datos que sean necesario a la vista del landing y depues se pueden ir guardando como session storage
                    HttpContext.Session.SetInt32("UserId", user.Id);
                    HttpContext.Session.SetString("Email", user.Correo);



                    switch (user.Rol)
                    {
                        case "Paciente":
                            
                            return RedirectToAction("LandingPaciente", "Paciente");
                        case "Enfermero":
                            return RedirectToAction("LandingEnfermero", "Enfermero");
                        case "Doctor":
                            return RedirectToAction("LandingDoctor", "Doctor");
                        case "Secretario":
                            return RedirectToAction("LandingSecretario", "Secretario");
                        case "Administrador":
                            return RedirectToAction("LandingAdministrador", "Administrador");
                    }
                }

            }
            ViewBag.Message = "Usuario o contraseña incorrectos";
            return View();
        }





        public IActionResult Logout()
        {
            HttpContext.Session.Clear();
            return RedirectToAction("Login", "Login");
        }

        public IActionResult RecuperarContrasenna()
        {
            return RedirectToAction("RecuperarContrasenna", "RecuperarContrasenna");
        }

        public IActionResult Registro()
        {

            return RedirectToAction("Registro", "Registro");
        }


    }


}