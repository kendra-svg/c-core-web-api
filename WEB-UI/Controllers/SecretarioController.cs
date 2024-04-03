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

    }
}

