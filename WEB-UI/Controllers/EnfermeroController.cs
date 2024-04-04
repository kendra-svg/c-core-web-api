using Microsoft.AspNetCore.Mvc;

namespace WEB_UI.Controllers
{
    public class EnfermeroController : Controller
    {
        public IActionResult LandingEnfermero()
        {
            return View();
        }
        public IActionResult Sedes()
        {
            return View();
        }
        public IActionResult ExamenPersonal()
        {
            return View();
        }
        public IActionResult ExamenGeneral()
        {
            return View();
        }
        public IActionResult RecetasPacientes()
        {
            return View();
        }
        public IActionResult MisRecetas()
        {
            return View();
        }
        public IActionResult BuscadorExpedientes()
        {
            return View();
        }

        //PARA LA PARTE DE MI SALUD DE ENFERMERO
        public IActionResult CitasPersonales()
        {
            return View("~/Views/Enfermero/MiSalud/CitasPersonales.cshtml");
        }
        public IActionResult CrearCitasPersonales()
        {
            return View("~/Views/Enfermero/MiSalud/CrearCitasPersonales.cshtml");
        }
        public IActionResult DatosPersonales()
        {
            return View("~/Views/Enfermero/MiSalud/DatosPersonales.cshtml");
        }
        public IActionResult ExpedientePersonal()
        {
            return View("~/Views/Enfermero/MiSalud/ExpedientePersonal.cshtml");
        }
        public IActionResult EncuestaServicio()
        {
            return View("~/Views/Enfermero/MiSalud/EncuestaServicio.cshtml");
        }
    }
}
