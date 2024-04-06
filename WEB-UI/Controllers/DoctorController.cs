using Microsoft.AspNetCore.Mvc;
using WEB_UI.Models;

namespace WEB_UI.Controllers
{
    public class DoctorController : Controller
    {
        public IActionResult LandingDoctor()
        {
            return View();
        }

        public IActionResult Agenda()
        {
            // Aquí deberías obtener la lista de citas y pasarla a la vista
            // Por ejemplo:
            var listaCitas = ObtenerListaCitas(); // Función ficticia para obtener las citas
            return View(listaCitas);
        }

        // Función ficticia para obtener la lista de citas
        private List<Agenda> ObtenerListaCitas()
        {
            // Aquí deberías recuperar la lista de citas de tu sistema o base de datos
            // Por ahora, se simulará una lista vacía
            return new List<Agenda>();
        }
        public IActionResult Sedes()
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
        public IActionResult CrearRecetas()
        {
            return View();
        }
        
        public IActionResult Medicos()
        {
            return View();
        }

        public IActionResult BuscadorExpedientes()
        {
            return View();
        }
        public IActionResult ListaCitas()
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

        //Diagnosticos
        public IActionResult Diagnosticos()
        {
            return View();
        }

    }
}
