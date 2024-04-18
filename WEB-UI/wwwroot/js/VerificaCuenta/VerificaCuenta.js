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
    }



    this.SubmitVerificarCuenta = function () {
        var usuario = {};
        usuario.correo = $("#Correo").val();
        usuario.otp = $("#Otp").val();
        console.log(usuario);




        var api_url = API_URL_BASE + "/api/Usuario/GetUserByOtpAndEmail?correo=" + usuario.correo + "&otp=" + usuario.otp;

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

                }).then(function (response) {
                        console.log("La validación se ha completado con éxito.");
                        Swal.fire({
                            title: "¡Cuenta verificada!",
                            text: "¡Ahora puedes iniciar sesión!",
                            icon: "success",
                            confirmButtonText: "Aceptar",
                        });
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