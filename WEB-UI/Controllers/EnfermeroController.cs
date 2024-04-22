using Microsoft.AspNetCore.Mvc;

namespace WEB_UI.Controllers
{
    public class EnfermeroController : Controller
    {
        public IActionResult LandingEnfermero()
        {
            ViewBag.UserId = HttpContext.Session.GetInt32("UserId");
            ViewBag.Email = HttpContext.Session.GetString("Email");
            return View();
        }
        public IActionResult Sedes()
        {
            return View();
        }
       
        public IActionResult ExamenGeneral()
        {
            return View();
        }
        public IActionResult CrearExamen()
        {
            return View();
        }
        public IActionResult RecetasPacientes()
        {
            return View();
        }
        public IActionResult CitasPacientes()
        {
            return View();
        }

        public IActionResult Medicos()
        {
            return View();
        }
        public IActionResult ExpedientePaciente()
        {
            return View();
        }
        public IActionResult VerPacientes()
        {
            return View();
        }
        public IActionResult ListaCitas()
        {
            return View();
        }
        public IActionResult Diagnosticos()
        {
            return View();
        }
        public IActionResult DetallesPaciente()
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
        public IActionResult ExamenPersonal()
        {
            return View("~/Views/Enfermero/MiSalud/ExamenPersonal.cshtml");
        }
        public IActionResult DiagnosticoPersonal()
        {
            return View("~/Views/Enfermero/MiSalud/DiagnosticoPersonal.cshtml");
        }
        public IActionResult MisFacturas()
        {
            return View("~/Views/Enfermero/MiSalud/MisFacturas.cshtml");
        }
        public IActionResult MisRecetas()
        {
            return View("~/Views/Enfermero/MiSalud/MisRecetas.cshtml");
        } //Ver pacientes
        public IActionResult SubirExamen()
        {
            return View("~/Views/Enfermero/MiSalud/SubirExamen.cshtml");
        }
    }
}
