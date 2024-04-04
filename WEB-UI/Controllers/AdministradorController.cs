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
        public IActionResult RecetasPacientes()
        {
            return View();
        }
        public IActionResult CrearRecetas()
        {
            return View();
        }
        public IActionResult MisRecetas()
        {
            return View();
        }
    }
}