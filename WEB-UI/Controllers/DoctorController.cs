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
        public IActionResult ExamenPersonal()
        {
            return View();
        }
        public IActionResult ExamenGeneral()
        {
            return View();
        }
    }
}
