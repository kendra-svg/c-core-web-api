using Microsoft.AspNetCore.Mvc;
using WEB_UI.Models;
using System;
using System.Collections.Generic;

namespace WEB_UI.Controllers
{
    public class AdministradorController : Controller
    {
        public IActionResult LandingAdministrador()
        {
            return View();
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
        public IActionResult ListaSedes()
        {
            return View();
        }
        public IActionResult CrearSedes()
        {
            return View();
        }
        public IActionResult DetallesSedes()
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

        //DE AQUI PARA ABAJO ES PARA LA PARTE DE MI SALUD DEL ADMIN
        public IActionResult CitasPersonales()
        {
            return View("~/Views/Administrador/MiSalud/CitasPersonales.cshtml");
        }
        public IActionResult CrearCitasPersonales()
        {
            return View("~/Views/Administrador/MiSalud/CrearCitasPersonales.cshtml");
        }
        public IActionResult DatosPersonales()
        {
            return View("~/Views/Administrador/MiSalud/DatosPersonales.cshtml");
        }
        public IActionResult ExpedientePersonal()
        {
            return View("~/Views/Administrador/MiSalud/ExpedientePersonal.cshtml");
        }
        public IActionResult EncuestaServicio()
        {
            return View("~/Views/Administrador/MiSalud/EncuestaServicio.cshtml");
        }
    }
}