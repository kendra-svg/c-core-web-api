using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Azure.Communication.Email;

namespace AppLogic
{
    public class AdminEmail
    {
        public async Task<string> SendEmail(string correo, string cuerpo, string asunto) // DTO Email 
        {
            string connectionString = "endpoint=https://simepci-email.unitedstates.communication.azure.com/;accesskey=2L2jaulXE00cBujlGXm+c7MsfVlTzbr7ZGx321XgdBZgGYicwso177C+2bZ2VCviCAWc8d+f1cxzcENl2/iL0g==";

            EmailClient emailClient = new EmailClient(connectionString);

            /*EmailContent emailContent = new EmailContent("Código de Verificación");*/ // Subject
                                                                                        //emailContent.PlainText = "Hemos recibido su solicitud de cita, y nos pondremos en contacto con usted";

            EmailContent emailContent = new EmailContent(asunto); // Use the provided 'asunto' parameter
            emailContent.Html = cuerpo; //

            List<EmailAddress> emailAddresses = new List<EmailAddress> { new EmailAddress(correo, "Suscriptor de Cita") };
            EmailRecipients emailRecipients = new EmailRecipients(emailAddresses);

            EmailMessage emailMessage = new EmailMessage("DoNotReply@b40196c4-78dc-4f03-90b2-4b7ae03bd7b5.azurecomm.net", emailRecipients, emailContent);

            EmailSendOperation emailSendOperation = await emailClient.SendAsync(
                Azure.WaitUntil.Completed,
                emailMessage, CancellationToken.None);


            EmailSendResult statusMonitor = emailSendOperation.Value;

            Console.WriteLine($"Email sent with status {emailSendOperation.Value.Status}");

            return emailSendOperation.Value.Status.ToString();

        }

    }

          

        
}
