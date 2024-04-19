function setCorreoValue() {
    $("#Correo").val(sessionStorage.getItem("correo"));

}

function VerificarCuenta() {
    this.InitView = function () {
        $("#btnVerificar").click(function (event) {
            var view = new VerificarCuenta();
            view.SubmitVerificarCuenta();
        })
        $('#btnSendNewOtp').click(function (event) {
            var view = new VerificarCuenta();
            sessionStorage.setItem("timestamp", new Date());
            view.SubmitGenerarOtp();
        })
    }



    this.SubmitVerificarCuenta = function () {
        var usuario = {};
        usuario.correo = $("#Correo").val();
        usuario.otp = $("#Otp").val();

        console.log(usuario);

        var newTimestamp = sessionStorage.getItem("timestamp");
        var timestamp = sessionStorage.getItem("newtTimestamp");
        console.log("Imprimo la hora a la que se envio el correo: " + newTimestamp)
        var currentTime = new Date().getTime();
        console.log("Imprimo tiempo actual:" + currentTime);
        var timeStampDateTime = new Date(newTimestamp).getTime();
        console.log("Imprimo tiempo en formato datetime:" + timeStampDateTime);
        var diffInSeconds = (currentTime - timeStampDateTime) / 1000;
        console.log("Imprimo diferencia de segundos:" + diffInSeconds);

        usuario.timeout = usuario.timeout;
        console.log("Imprimo el tiempo de expiración del código: " + timeStampDateTime);

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
                        sessionStorage.setItem("correo", usuario.correo);
                        console.log("Correo: " + usuario.correo);

                        Swal.fire({
                            title: "¡Cuenta verificada!",
                            text: "¡Ahora puedes iniciar sesión!",
                            icon: "success",
                            confirmButtonText: "Aceptar",
                        }).then(function () {
                            window.location = "/Login/Login"; 
                        });

                    }).then(function () {
                        sessionStorage.setItem("correo", usuario.correo);
                        console.log("Correo: " + usuario.correo);


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
                
                
            }).then(function (result) {
                
                

            }).fail(function (error) {
                console.error("Error al realizar la solicitud de verificación de cuenta:", error);
                Swal.fire({
                    title: "¡Código incorrecto!",
                    text: "¡Por favor ingrese el código enviado a su correo!",
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
        usuario.correo = correoTraido;

        console.log("Correo traido: " + correoTraido);


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
                    //console.log("El OTP se ha generado con éxito.");
                    //Swal.fire({
                    //    title: "¡Código generado!",
                    //    text: "¡Se ha enviado un nuevo código a tu correo!",
                    //    icon: "success",
                    //    confirmButtonText: "Aceptar",
                    //});
                    Swal.fire({
                        title: 'Generando...',
                        text: 'Espera un momento mientras generamos tu código.',
                        icon: 'info',
                        timer: 9000,
                        showConfirmButton: false,

                    });
                }).then(function (result) {
                    console.log("THEN: El OTP se ha generado con éxito.");
                    var view = new VerificarCuenta();
                    view.CommunicateUser();
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

    this.CommunicateUser = function () {
    var correo = correoTraido;

    // Llamar a la API para obtener los datos del usuario por su correo electrónico
    $.ajax({
        headers: {
            'Accept': "application/json",
            'Content-Type': "application/json"
        },
        method: "GET",
        url: API_URL_BASE + "/api/Usuario/GetUserByCorreo?correo=" + correo,
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        hasContent: true,
    }).done(function (response) {
        if (response.length > 0) {
            var usuario = response[0];
            console.log("Respuesta del servidor:", usuario);
            var nombreCompleto = usuario.nombre + " " + usuario.apellidos;
            var otp = usuario.otp;

            /*console.log("Correo: " + correo);*/
            console.log("Nombre completo: " + nombreCompleto);
            console.log("OTP: " + otp);

            var cuerpo = "Hola " + nombreCompleto + "<br><br>" +
                "Para completar tu registro, por favor ingresa el nuevo código de verificación en la página: " + otp + "." + "<br><br>" + 
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
            }).done(function (data) {
                console.log("Se ha enviado un correo con el código OTP: " + data);
            }).fail(function (xhr, textStatus, errorThrown) {
                if (xhr.responseText === "Ok") {
                    console.log("El OTP se ha generado con éxito.");
                    Swal.fire({
                        title: "¡Código generado!",
                        text: "¡Se ha enviado un nuevo código a tu correo!",
                        icon: "success",
                        confirmButtonText: "Aceptar",
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
    }).fail(function (error) {
        console.error("Error al obtener los datos del usuario:", error);
    });
}


    
};


newTimestampTraido = sessionStorage.getItem("Newtimestamp");
correoTraido = sessionStorage.getItem("correo")

generateOTPS = [];

generateUniqueOTP = () => {
    let newOTP;
    do {
        const randomNumber = Math.floor(100000 + Math.random() * 900000);
        newOTP = parseInt(randomNumber);
    } while (generateOTPS.includes(newOTP));
    generateOTPS.push(newOTP);
    return newOTP;
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