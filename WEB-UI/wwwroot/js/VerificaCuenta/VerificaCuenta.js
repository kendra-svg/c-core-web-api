function setCorreoValue() {
    $("#Correo").val(sessionStorage.getItem("correo"));

}

function VerificarCuenta() {
    this.InitView = function () {
        $("#btnVerificar").click(function (event) {
            var view = new VerificarCuenta();
            view.SubmitVerificarCuenta();
        })
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
            Swal.fire({
                title: "¡Cuenta verificada!",
                text: "¡Ahora puedes iniciar sesión!",
                icon: "success",
                confirmButtonText: "Aceptar",
            }).then(function () {
                window.location = "/Login/Login";
            });
        }).fail(function (error) {
            Swal.fire({
                title: "¡Error!",
                text: "¡Código incorrecto!",
                icon: "error",
                confirmButtonText: "Aceptar",
            });
            limpiarOtp();
            console.log(error);
        });
    }



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