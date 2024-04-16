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

    //this.RedirectEmailVerified = function () {
    //    window.location = "/VerificaOTP/VerificaOTP";
    //}

    //this.RedirectEmailVerified = function () {
    //    window.location = "/VerificaOTP/VerificaOTP";
    //}


}

$(document).ready(function () {

    var view = new CorreoValidation();
    view.InitView();
});
