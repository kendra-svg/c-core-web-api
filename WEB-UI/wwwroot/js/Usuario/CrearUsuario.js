function CrearUsuario() {
    this.InitView = function () {
        $('#boton-enviar').click(function () {
            var view = CrearUsuario();
            view.SubmitCrearUsuario();
        })
    }
    
}
this.SubmitCrearUsuario = function () {
    var usuario = {};
    usuario.nombre = $('#Nombre').val();
    usuario.apellidos = $('#Apellidos').val();
    usuario.telefono = $('#Telefono').val();
    usuario.correo = $('#Correo').val();
    usuario.fecha = $('#FechaNacimiento').val();
    usuario.sexo = $('#Sexo');
    usuario.contrasenna = $('#Contrasenna').val();
    usuario.contrasenna = $('#ConfirmarContrasenna').val();

    var api_url = API_URL_BASE + "/api/Usuario/CreateUsuario";

    $.ajax({
        headers: {
            'Accept': "application/json",
            'Content-Type': "application/json"
        },
        method: "POST",
        url: api_url,
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        data: JSON.stringify(usuario),
        hasContent: true
    }).done(function (result) {
        Swal.fire({
            title: "success",
            icon: "info",
            text: "Usuario Creado",
            timer: 2000
        })
    }).fail(function (error) {
        alert("Error al Crear el usuario");
        console.log("Error", error);
    });

    $(document).ready(function () {
        var view = new CrearUsuario();
        view.InitView();
    });
}


   

