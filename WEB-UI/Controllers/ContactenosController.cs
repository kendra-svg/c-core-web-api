using Microsoft.AspNetCore.Mvc;
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
