using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using WEB_UI.Models;
using DTO; 

namespace WEB_UI.Controllers
{
    public class SecretarioController : Controller
    {
        public IActionResult LandingSecretario()
        {
            return View();
        }

        public IActionResult Crear()
        {
            return View();
        }

        public IActionResult ListaCitas()
        {
            return View();
        }
        public IActionResult AsignacionCitas()
        {
            return View();
        }

        public IActionResult DetallesCitas()
        {
            return View();
        }

        public IActionResult PagosFacturas()
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
        public IActionResult BuscadorExpedientes()
        {
            return View();
        }
        public IActionResult MisRecetas()
        {
            return View();
        }



        //PARA LA PARTE DE MI SALUD DE SECRETARIO
        public IActionResult CitasPersonales()
        {
            return View("~/Views/Secretario/MiSalud/CitasPersonales.cshtml");
        }
        public IActionResult CrearCitasPersonales()
        {
            return View("~/Views/Secretario/MiSalud/CrearCitasPersonales.cshtml");
        }
        public IActionResult DatosPersonales()
        {
            return View("~/Views/Secretario/MiSalud/DatosPersonales.cshtml");
        }
        public IActionResult ExpedientePersonal()
        {
            return View("~/Views/Secretario/MiSalud/ExpedientePersonal.cshtml");
        }
        public IActionResult EncuestaServicio()
        {
            return View("~/Views/Secretario/MiSalud/EncuestaServicio.cshtml");
        }
    }
}

