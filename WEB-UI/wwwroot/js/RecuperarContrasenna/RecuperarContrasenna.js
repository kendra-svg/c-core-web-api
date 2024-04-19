function CorreoValidation() {
    this.InitView = function () {
        
        $(btnVerificar).click(function () {
            var view = new CorreoValidation();
            view.GetCorreo();
            sessionStorage.setItem("timestamp", new Date());
            view.SubmitGenerarOtp();
            
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
            hasContent: true,
        }).done(function (response) {
            if (response.length > 0) {
                var usuario = response[0];
                console.log("Respuesta del servidor:", usuario);
                var nombreCompleto = usuario.nombre + " " + usuario.apellidos;
                var otp = usuario.otp;


                console.log("Nombre completo: " + nombreCompleto);
                console.log("OTP: " + otp);

                var cuerpo = "Hola " + nombreCompleto + "<br><br>" +
                    "Para completar tu solicitud de cambio de clave, por favor ingresa el siguiente código de verificación en la página " + otp + "." + "<br><br>" +
                    "Ten en cuenta que el código expirará en un minuto." + "<br><br>" +
                    "Hospital SIMEPCI.";
                var apiUrl = API_URL_BASE + "/api/Communication/SendEmail?correo=" + correo + "&cuerpo=" + cuerpo + "&otp=" + otp + "&asunto=Verificación de cuenta";


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
                }).done(function (data) {

                }).fail(function (xhr, textStatus, errorThrown) {
                    if (xhr.responseText === "Ok") {
                        console.log("El OTP se ha generado con éxito.");
                        Swal.fire({
                            title: "¡Código generado!",
                            text: "¡Se ha enviado un nuevo código a tu correo!",
                            icon: "success",
                            confirmButtonText: "Aceptar",
                        }).then((result) => {
                            sessionStorage.setItem("correo", correo);
                            window.location = "/VerificaOTP/VerificaOTP"
                        });

                    } else {
                        Swal.fire({
                            icon: 'error',
                            text: xhr.responseText,
                            title: 'Error',
                        });
                    }
                });
            } else {
                console.log("No se encontró ningún usuario con el correo electrónico proporcionado.");
                Swal.fire({
                    title: "¡Error!",
                    text: "¡No se encontró ningún usuario con el correo proporcionado!",
                    icon: "error",
                    confirmButtonText: "Aceptar",
                });
            }
        }).then(function (result) {
            Swal.fire({
                title: 'Buscando...',
                text: 'Espera un momento mientras buscamos tu correo en nuestros registros.',
                icon: 'info',
                timer: 9000,
                showConfirmButton: false,

            });
        }).fail(function (error) {
            Swal.fire({
                icon: 'error',
                text: 'El correo no está registrado.',
                title: 'Oops...',
            });
            limpiarCorreo();

        });

    }
    this.SubmitGenerarOtp = function () {
        var usuario = {};
        usuario.correo = correoTraido;

        console.log("Correo traido: " + correoTraido);

        if (usuario.correo != null) {


            $.ajax({
                headers: {
                    'Accept': "application/json",
                    'Content-Type': "application/json"
                },
                method: "GET",
                url: API_URL_BASE + "/api/Usuario/GetUserByCorreo?correo=" + usuario.correo,
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                data: JSON.stringify(usuario),
                hasContent: true,
            }).done(function (response) {
            }).then(function (result) {
                if (result) {
                    $.ajax({
                        headers: {
                            'Accept': "application/json",
                            'Content-Type': "application/json"
                        },
                        method: "PUT",
                        url: API_URL_BASE + "/api/Usuario/UpdateOtpAndTimestamp?correo=" + usuario.correo,
                        contentType: "application/json;charset=utf-8",
                        dataType: "text",
                        data: JSON.stringify(usuario)


                    }).done(function (result) {

                    }).then(function (result) {
                        console.log("THEN: El OTP se ha generado con éxito.");
                        var view = new CorreoValidation();

                    }).fail(function (error) {
                        console.error("Error al realizar la solicitud de generación de OTP:", error);
                        Swal.fire({
                            title: "¡Error!",
                            text: "¡Hubo un error al generar el código!",
                            icon: "error",
                            confirmButtonText: "Aceptar",
                        });
                        limpiarOtp();
                    });
                } else {
                    console.log("No se encontró ningún usuario con el correo electrónico proporcionado.");
                    Swal.fire({
                        title: "¡Error!",
                        text: "¡No se encontró ningún usuario con el correo proporcionado!",
                        icon: "error",
                        confirmButtonText: "Aceptar",
                    });
                }
            }).fail(function (error) {
                console.error("Error al realizar la solicitud de generación de OTP:", error);
                Swal.fire({
                    title: "¡Error!",
                    text: "¡Hubo un error al generar el código!",
                    icon: "error",
                    confirmButtonText: "Aceptar",
                });

            });

        }
    }

}
limpiarOtp = function () {
    $("#Otp").val("");
}

limpiarCorreo = function () {
    $("#Correo").val("");
}

correoTraido = sessionStorage.getItem("correo")

$(document).ready(function () {

    var view = new CorreoValidation();
    view.InitView();
});
