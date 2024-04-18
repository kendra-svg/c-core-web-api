function setCorreoValue() {
    $("#Correo").val(sessionStorage.getItem("correo"));

}

function VerificarCuenta() {
    this.InitView = function () {
        $("#btnVerificar").click(function (event) {
            var view = new VerificarCuenta();
            view.SubmitVerificarCuenta();
        })
        //.click de boton nuevo y se llama a la funcion de generar y hacer put del otp y timestamp
        //$('#btnSendNewOtp').click(function (event) {
        //    /*var view = new GenerarOtp();*/
        //    var view = new VerificarCuenta();
        //    view.SubmitGenerarOtp();
        //})
    }



    this.SubmitVerificarCuenta = function () {
        var usuario = {};
        usuario.correo = $("#Correo").val();
        usuario.otp = $("#Otp").val();
        console.log(usuario);


        var timestamp = sessionStorage.getItem("timestamp");
        console.log("Imprimo la hora a la que se envio el correo: " + timestamp)
        var currentTime = new Date().getTime();
        console.log("Imprimo tiempo actual:" + currentTime);
        var timeStampDateTime = new Date(timestamp).getTime();
        console.log("Imprimo tiempo en formato datetime:" + timeStampDateTime);
        var diffInSeconds = (currentTime - timeStampDateTime) / 1000;
        console.log("Imprimo diferencia de segundos:" + diffInSeconds);

        var api_url = API_URL_BASE + "/api/Usuario/GetUserByOtpAndEmail?correo=" + usuario.correo + "&otp=" + usuario.otp;
        if (diffInSeconds < 60) {
            $.ajax({
                headers: {
                    'Accept': "application/json",
                    'Content-Type': "application/json"
                },
                method: "GET",
                url: api_url,
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                data: JSON.stringify(usuario),
                hasContent: true
            }).done(function (result) {
            }).then(function (result) {
                usuario.correo = $("#Correo").val();
                if (result) {
                    $.ajax({
                        headers: {
                            'Content-Type': "application/json"
                        },
                        method: "PUT",
                        url: API_URL_BASE + "/api/Usuario/UpdateVerification?correo=" + usuario.correo,
                        contentType: "application/json;charset=utf-8",
                        dataType: "text",
                        data: JSON.stringify(usuario)
                    }).done(function (response) {
                        console.log("La validación se ha completado con éxito.");
                        Swal.fire({
                            title: "¡Cuenta verificada!",
                            text: "¡Ahora puedes iniciar sesión!",
                            icon: "success",
                            confirmButtonText: "Aceptar",
                            
                        });
                        

                    }).then(function (response) {
                        console.log("La validación se ha completado con éxito.");
                        window.location = "/Login/Login";
                        
                    }).fail(function (xhr, status, error) {
                        if (xhr.responseText) {
                            console.error("Error al realizar la solicitud de actualización de verificación: ", xhr.responseText);
                        } else {
                            console.error("Error al realizar la solicitud de actualización de verificación: ", error);
                        }
                    });

                } else {
                    console.log("No se encontró ningún usuario con el OTP y el correo electrónico proporcionados.");
                    Swal.fire({
                        title: "¡Error!",
                        text: "¡No se encontró ningún usuario con el código proporcionado!",
                        icon: "error",
                        confirmButtonText: "Aceptar",
                    });
                    limpiarOtp();
                }

            }).fail(function (error) {
                console.error("Error al realizar la solicitud de verificación de cuenta:", error);
                Swal.fire({
                    title: "¡Error!",
                    text: "¡Hubo un error al verificar la cuenta!",
                    icon: "error",
                    confirmButtonText: "Aceptar",
                });
                limpiarOtp();
            });

        } else {
            Swal.fire({
                title: "¡Error!",
                text: "¡El código ha expirado! Por favor, genera uno nuevo haciendo click en el boton 'Reenviar código'.",
                icon: "error",
                confirmButtonText: "Aceptar",
            });
            limpiarOtp();
        }
    };

    this.SubmitGenerarOtp = function () {
        var usuario = {};
        usuario.timeout = sessionStorage.getItem("timestamp");
        usuario.correo = $("#Correo").val();
        console.log(usuario);

        var api_url = API_URL_BASE + "/api/Usuario//*GenerateOtp?correo=" + usuario.correo + "&timestamp=" + usuario.timeout;

        $.ajax({
            headers: {
                'Accept': "application/json",
                'Content-Type': "application/json"
            },
            method: "PUT",
            url: api_url,
            contentType: "application/json;charset=utf-8",
            dataType: "text",
            data: JSON.stringify(usuario),
            hasContent: true
        }).done(function (result) {
            console.log("El OTP se ha generado con éxito.");
            Swal.fire({
                title: "¡Código generado!",
                text: "¡Se ha enviado un nuevo código a tu correo!",
                icon: "success",
                confirmButtonText: "Aceptar",
            });
            limpiarOtp();
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
    }
}

function GenerarOtp() {
    this.SubmitGenerarOtp = function () {
        var usuario = {};
        usuario.correo = $("#Correo").val();
        console.log(usuario);

        var api_url = API_URL_BASE + "/api/Usuario/GenerateOtp?correo=" + usuario.correo;

        $.ajax({
            headers: {
                'Accept': "application/json",
                'Content-Type': "application/json"
            },
            method: "PUT",
            url: api_url,
            contentType: "application/json;charset=utf-8",
            dataType: "text",
            data: JSON.stringify(usuario),
            hasContent: true
        }).done(function (result) {
            console.log("El OTP se ha generado con éxito.");
            Swal.fire({
                title: "¡Código generado!",
                text: "¡Se ha enviado un nuevo código a tu correo!",
                icon: "success",
                confirmButtonText: "Aceptar",
            });
            limpiarOtp();
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
    };
}

             
limpiarOtp = function () {
    $("#Otp").val("");
}



$(document).ready(function () {
    console.log(sessionStorage.getItem("correo"));
    setCorreoValue();
    var view = new VerificarCuenta();
    view.InitView();
});