using Microsoft.AspNetCore.Mvc;
using WEB_UI.Models;
using System;
using System.Collections.Generic;

namespace WEB_UI.Controllers
{
    public class ContactenosController: Controller
    {
        public IActionResult Contactenos()
        {
            return View();
        }
    }
}
