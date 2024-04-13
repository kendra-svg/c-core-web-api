using Azure.Communication.Email;
using Azure;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualStudio.Web.CodeGenerators.Mvc.Templates.BlazorIdentity.Pages.Manage;

namespace WEB_UI.Controllers
{
    public class VerificaOTPController : Controller
    {
        public IActionResult VerificaOTP()
        
        {

            var correoDestinatario = HttpContext.Session.GetString("correo");
            //var sendEmailController = new SendEmailController();
            //sendEmailController.SendEmail(new Email { To = correoDestinatario, Subject = "Prueba", Body = "Cuerpo de prueba" });

            EnviarCorreo();

            return View();
        
        }

        public void EnviarCorreo()
        {
            string connectionString = "endpoint=https://simepci-email.unitedstates.communication.azure.com/;accesskey=2L2jaulXE00cBujlGXm+c7MsfVlTzbr7ZGx321XgdBZgGYicwso177C+2bZ2VCviCAWc8d+f1cxzcENl2/iL0g==";

            EmailClient emailClient = new EmailClient(connectionString);


            EmailSendOperation emailSendOperation = emailClient.Send(
                WaitUntil.Completed,
                senderAddress: "DoNotReply@b40196c4-78dc-4f03-90b2-4b7ae03bd7b5.azurecomm.net",
                recipientAddress: "kendrasvega@gmail.com",
                subject: "Correo electrónico de prueba",
                htmlContent: "<html><h1>Hola mundo por correo electrónico.</h1l></html>",
                plainTextContent: "Hola mundo por correo electrónico.");
        }
    }
        
        
    
}
