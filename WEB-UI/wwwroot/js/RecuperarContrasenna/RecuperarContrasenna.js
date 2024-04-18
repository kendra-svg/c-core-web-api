function CorreoValidation() {
    this.InitView = function () {
        
        $(btnVerificar).click(function () {
            var view = new CorreoValidation();
/*            self.GetCorreo();*/
            /*view.RedirectEmailVerified();*/
            view.GetCorreo();
            
        });
    }

    this.GetCorreo = function () {
        var correo = $('#Correo').val();
        console.log("Correo enviado en la solicitud:", correo);
        url_base = "https://apisimepci.azurewebsites.net/api/Usuario/GetUserByCorreo";
        $.ajax({
            url: url_base + "?correo=" + correo,
            method: "GET",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
        }).done(function (response) {
            console.log("Correo recuperado:", response.correo);
            console.log("Respuesta del servidor:", response);
            var correoRecuperado = response[0].correo; // Accede al correo electrónico en la respuesta
            if (correoRecuperado) {
                sessionStorage.setItem("correo", correoRecuperado);
                console.log("Correo guardado en sessionStorage:", correoRecuperado);
            } else {
                console.log("El correo recuperado es 'undefined' o vacío.");
            }
            Swal.fire({
                title: 'Correo Enviado',
                text: 'Se ha enviado un correo a tu cuenta de correo',
                icon: 'success',
                confirmButtonText: 'OK'
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location = "/VerificaOTP/VerificaOTP";
                }
            });
        }).fail(function (error) {
            console.log("Error", error);
        });

    }

    this.CommunicateUser = function () {
        var cuerpo = "Hola " + nombreCompleto + ",<br><br>" +
            "Para completar tu solicitud de cambio de clave, por favor ingresa el siguiente código de verificación en la página: " + otp + "." + "<br><br>" +
            "Ten en cuenta que el código expirará en un minuto." + "<br><br>" +
            "Hospital SIMEPCI.";
        var apiUrl = API_URL_BASE + "/api/Communication/SendEmail?correo=" + correo + "&cuerpo=" + cuerpo + "&otp=" + otp + "&asunto=Verificación de cuenta";

        // Enviar el correo electrónico
        $.ajax({
            url: apiUrl,
            method: "POST",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            processData: false,
            data: JSON.stringify({}),
            headers: {
                'Content-Type': 'text/html'
            }
        }).done(function (response) {
            console.log("Correo enviado:", response);
        }
        ).fail(function (error) {
            console.log("Error", error);
        });
    }



}

$(document).ready(function () {

    var view = new CorreoValidation();
    view.InitView();
});
