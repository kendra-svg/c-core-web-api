using Microsoft.AspNetCore.Mvc;
using WEB_UI.Models;
using System;
using System.Collections.Generic;

namespace WEB_UI.Controllers
{
    public class PacienteController : Controller
    {
        public IActionResult LandingPaciente()
        {
            return View();
        }
        public IActionResult Lista()
        {
            return View();
        }
        public IActionResult Crear()
        {
            return View();
        }
        public IActionResult Detalles()
        {
            return View();
        }
    }
}
