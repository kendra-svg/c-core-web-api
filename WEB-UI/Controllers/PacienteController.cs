using Microsoft.AspNetCore.Mvc;

namespace WEB_UI.Controllers
{
    public class PacienteController : Controller
    {
        public IActionResult LandingPaciente()
        {
            
            ViewBag.UserId = HttpContext.Session.GetInt32("UserId");
            ViewBag.Email = HttpContext.Session.GetString("Email");
            return View();
        }
        public IActionResult CitasPersonales()
        {
            return View();
        }
        public IActionResult CrearCitasPersonales()
        {
            return View();
        }
        public IActionResult DatosPersonales()
        {
            return View();
        }
        public IActionResult ExpedientePersonal()
        {
            return View();
        }
        public IActionResult EncuestaServicio()
        {
            return View();
        }
        public IActionResult DetallesSedes()
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
        public IActionResult CrearExamen()
        {
            return View();
        }
        public IActionResult MisRecetas()
        {
            return View();
        }
        public IActionResult MisFacturas()
        {
            return View();
        }
        public IActionResult Medicos()
        {
            return View();
        }
        public IActionResult Diagnosticos()
        {
            return View();
        }
        public IActionResult ListaExamenes()
        {
            return View();
        }

        public IActionResult HorariosDisponibles()
        {
            return View();
        }

    }
}
