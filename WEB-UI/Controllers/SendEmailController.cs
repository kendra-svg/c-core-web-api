using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualStudio.Web.CodeGenerators.Mvc.Templates.BlazorIdentity.Pages.Manage;
using System.Net.Mail;

namespace WEB_UI.Controllers
{
    public class SendEmailController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

    }
}
