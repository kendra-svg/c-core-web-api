using Microsoft.AspNetCore.Mvc;


namespace WEB_UI.Controllers
{
    public class DoctorController : Controller
    {
        public IActionResult LandingDoctor()
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
        public IActionResult CrearRecetas()
        {
            return View();
        }
        
        public IActionResult Medicos()
        {
            return View();
        }
        public IActionResult VerPacientes()
        {
            return View();
        }
        public IActionResult DetallesPaciente()
        {
            return View();
        }

        public IActionResult ExpedientePaciente()
        {
            return View();
        }
        public IActionResult ListaCitas()
        {
            return View();
        }
        public IActionResult CitasPacientes()
        {
            return View();
        }
        public IActionResult CrearCitasPaciente()
        {
            return View();
        }
        public IActionResult DetallesCitas()
        {
            return View();
        }




        //DE AQUI PARA ABAJO ES PARA LA PARTE DE MI SALUD DEL DOC
        public IActionResult CitasPersonales()
        {
            return View("~/Views/Doctor/MiSalud/CitasPersonales.cshtml");
        }
        public IActionResult CrearCitasPersonales()
        {
            return View("~/Views/Doctor/MiSalud/CrearCitasPersonales.cshtml");
        }
        public IActionResult DatosPersonales()
        {
            return View("~/Views/Doctor/MiSalud/DatosPersonales.cshtml");
        }
        public IActionResult ExpedientePersonal()
        {
            return View("~/Views/Doctor/MiSalud/ExpedientePersonal.cshtml");
        }
        public IActionResult EncuestaServicio()
        {
            return View("~/Views/Doctor/MiSalud/EncuestaServicio.cshtml");
        }
        public IActionResult MisRecetas()
        {
            return View("~/Views/Doctor/MiSalud/MisRecetas.cshtml");
        }
        public IActionResult MisFacturas()
        {
            return View("~/Views/Doctor/MiSalud/MisFacturas.cshtml");
        }
        public IActionResult DiagnosticoPersonal()
        {
            return View("~/Views/Doctor/MiSalud/DiagnosticoPersonal.cshtml");
        }
        public IActionResult ExamenPersonal()
        {
            return View("~/Views/Doctor/MiSalud/ExamenPersonal.cshtml");
        }

        public IActionResult SubirExamen()
        {
            return View("~/Views/Doctor/MiSalud/SubirExamen.cshtml");
        }

        //Diagnosticos
        public IActionResult Diagnosticos()
        {
            return View();
        }
        //Lista general pacientes
        public IActionResult ListaGeneralPacientes()
        {
            return View();
        }

    }
}
