using System;
using System.Collections.Generic;
using Azure;
using Azure.Communication.Email;

namespace WEB_UI
{
    public class SendEmail
    {

        static async Task Main(string[] args)
        {
            string connectionString = "endpoint=https://g5-simepci-comms.unitedstates.communication.azure.com/;accesskey=6d0zkD0NkX3oLA2qdKiGR8jeFsOOoq2NY1y0fuR75XwPQvPbJw7kaXrXt4r0vszaUR+MNBPjA9u6u8TOp9J91g==";

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
