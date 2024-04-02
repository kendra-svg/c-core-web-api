using Microsoft.AspNetCore.Mvc;
using DTO;


namespace WEB_UI.Controllers
{
    public class RegistroController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Registro()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Registro(UsuarioBase usuario)
        {
            if (ModelState.IsValid)
            {
                // Aquí puedes realizar la lógica de registro
                // Por ejemplo, guardar el usuario en la base de datos

                // Una vez completado el registro, puedes redirigir a una página de éxito o a la página de inicio de sesión
                return RedirectToAction("Index", "Login");
            }
            else
            {
                // Si hay errores de validación, vuelve a mostrar el formulario de registro con los mensajes de error
                return View(usuario);
            }
        }
    }
}
