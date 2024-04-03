using Microsoft.AspNetCore.Mvc;
using WEB_UI.Models;
using System;
using System.Collections.Generic;

namespace WEB_UI.Controllers
{
    public class AdministradorController : Controller
    {
        // Lista de sedes estática con datos de prueba
        private List<Sedes> sedes = new List<Sedes>();
        public AdministradorController()
        {
            sedes.Add(
            new Sedes
            {
                NombreSede = "Sede 1",
                Descripcion = "Descripción de la sede 1",
                FechaCreacion = DateTime.Now.ToString(),
                Foto = "foto1.jpg",
                Provincia = "Provincia 1",
                Canton = "Cantón 1",
                Distrito = "Distrito 1",
                OtrasSeñas = "Otras señas de la sede 1",
                Ubicacion = "Ubicación de la sede 1"
            });
            sedes.Add(new Sedes
            {
                NombreSede = "Sede 2",
                Descripcion = "Descripción de la sede 2",
                FechaCreacion = DateTime.Now.ToString(),
                Foto = "foto2.jpg",
                Provincia = "Provincia 2",
                Canton = "Cantón 2",
                Distrito = "Distrito 2",
                OtrasSeñas = "Otras señas de la sede 2",
                Ubicacion = "Ubicación de la sede 2"
            });
        }

        public IActionResult LandingAdministrador()
        {
            // Pasa la lista de sedes a la vista
            return View(sedes);
        }
        public IActionResult AsignacionCitas()
        {
            return View();
        }
        public IActionResult BuscadorExpedientes()
        {
            return View();
        }
        public IActionResult ResultadosEncuestas()
        {
            return View();
        }
        public IActionResult DefinicionPrecioEImpuestos()
        {
            return View();
        }

        public IActionResult Lista()
        {
            return View(sedes);
        }

        public IActionResult Crear()
        {
            return View();
        }

        public IActionResult Detalles(string nombreSede)
        {
            // Encuentra la sede con el nombre proporcionado
            var sede = sedes.FirstOrDefault(s => s.NombreSede == nombreSede);
            if (sede == null)
            {
                return NotFound(); // Manejo de situación donde la sede no se encuentra
            }
            return View(sede);
        }
        [HttpPost] // Esto especifica que esta acción responde a solicitudes POST
        public IActionResult Create(string nombreSede, string descripcion, string fechaCreacion, string foto, string provincia, string canton, string distrito, string otrasSeñas, string ubicacion)
        {

            var nuevaSede = new Sedes
            {
                NombreSede = nombreSede,
                Descripcion = descripcion,
                FechaCreacion = fechaCreacion,
                Foto = foto,
                Provincia = provincia,
                Canton = canton,
                Distrito = distrito,
                OtrasSeñas = otrasSeñas,
                Ubicacion = ubicacion
            };

            sedes.Add(nuevaSede);
            // Redirigir a la acción Lista para mostrar la lista actualizada de sedes
            return RedirectToAction(nameof(Lista));
        }
    }
}