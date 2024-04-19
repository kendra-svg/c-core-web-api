function CambiarClave() {
    this.InitView = function () {
        $(btnGuardarClave).click(function () {
            var view = new CambiarClave();
            view.PutCambiarClave();

        });
    }


    this.PutCambiarClave = function () {
        var usuario = {};
        usuario.correo = correoTraido;
        console.log(usuario.correo)
        var contrasennaConfirmar = $("#ConfirmarContrasenna").val();


            if ($('#Contrasenna').val() == $('#ConfirmarContrasenna').val()) {
                usuario.nuevaClave = $('#Contrasenna').val();
            }



            if (usuario.nuevaClave != $('#ConfirmarContrasenna').val()) {
                    Swal.fire({
                        title: '¡Error!',
                        text: 'Las contraseñas no coinciden.',
                        icon: 'error',
                        confirmButtonText: 'Aceptar',
                    });
                    $('#Contrasenna').val("");
                    $('#ConfirmarContrasenna').val("")
                    return;
            }

            if (usuario.nuevaClave == "" || contrasennaConfirmar == "") {
                Swal.fire({
                    title: '¡Error!',
                    text: 'Debes llenar todos los campos.',
                    icon: 'error',
                    confirmButtonText: 'Aceptar',
                });
                $('#Contrasenna').val("");
                $('#ConfirmarContrasenna').val("")
                return;
            }

            if (usuario.nuevaClave.length < 8) {
                Swal.fire({
                    icon: 'error',
                    text: "La contraseña debe tener al menos 8 caracteres.",
                    title: 'Error'
                });
                $('#Contrasenna').val("");
                $('#ConfirmarContrasenna').val("")
                return;
            }

            if (usuario.nuevaClave.length > 12) {
                Swal.fire({
                    icon: 'error',
                    text: "La contraseña no puede tener más de 12 caracteres.",
                    title: 'Error'
                });
                $('#Contrasenna').val("");
                $('#ConfirmarContrasenna').val("")
                return;
            }

            var apiUrl = API_URL_BASE + "/api/Usuario/UpdatePassword?correo=" + usuario.correo + "&nuevaClave=" + usuario.nuevaClave;
            $.ajax({
                headers: {
                    'Accept': "application/json",
                    'Content-Type': "application/json"
                },
                method: "PUT",
                url: apiUrl,
                contentType: "application/json;charset=utf-8",
                dataType: "text",
                data: JSON.stringify(usuario)
            }).done(function (response) {
                Swal.fire({
                    title: '¡Contraseña cambiada!',
                    text: 'Tu contraseña ha sido cambiada con éxito.',
                    icon: 'success',
                    confirmButtonText: 'Aceptar',
                }).then(function (result) {
                    window.location = '/Login/Login';
                });
            }).then(function (result) {
                console.log("ENTRO AL THEN DEL AJAX")

            }).fail(function (error) {
                Swal.fire({
                    title: '¡Error!',
                    text: 'No se pudo cambiar la contraseña.',
                    icon: 'error',
                    confirmButtonText: 'Aceptar',
                });

            });

    }

}


var correoTraido = sessionStorage.getItem("correo");

$(document).ready(function () {
    var view = new CambiarClave();
    view.InitView();
});



