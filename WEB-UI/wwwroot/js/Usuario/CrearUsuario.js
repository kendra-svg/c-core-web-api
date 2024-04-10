function CrearUsuario() {

    this.InitView = function () {
        $('#btnCreate').click(function (event) {
            var view = new CrearUsuario();
            view.SubmitCrearUsuario(); // Llama al método para enviar el usuario
        })
    }
    this.SubmitCrearUsuario = function () {
        var usuario = {};
        usuario.id = generateUniqueId();
        usuario.nombre = $('#Nombre').val();
        usuario.apellidos = $('#Apellidos').val();
        usuario.telefono = $('#Telefono').val();
        usuario.correo = $('#Correo').val();
        usuario.fechaNacimiento = $('#FechaNacimiento').val();
        usuario.sexo = $('#Sexo').find(":selected").val();
        usuario.contrasenna = $('#Contrasenna').val();
        usuario.direccion = $('#Direccion').find(":selected").val();
        usuario.foto = $('#Correo').val();
        usuario.identificacion = $('#Identificacion').val();
        usuario.ubicaciones = $('#Direccion').val();

        var api_url = API_URL_BASE + "/api/Usuario/CreateUsuario";
        console.log(usuario)
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
                title: "Éxito",
                icon: "info",
                text: "Se ha completado el registro",
            }).then(
                function () {
                    var view = new CrearUsuario();
                    view.CommunicatePatient();
                    view.LimpiarFormulario();
                    view.RedirectToLogin();

                }
            )
        }).fail(function (error) {
            Swal.fire({
                icon: 'error',
                text: "Error al registrarse",
                title: 'Error',

            });
            console.log("Error", error);
        });

    }
    this.CommunicatePatient = function () {
        console.log("Enviar Correo al Paciente");
    }

    this.RedirectToLogin = function () {
        window.location = "/Login/Login";
    }

    this.LimpiarFormulario = function () {
        $('#Nombre').val("");
        $('#Apellidos').val("");
        $('#Telefono').val("");
        $('Foto').val('');
        $('#Correo').val("");
        $('#FechaNacimiento').val("");
        $('#Sexo').val("");
        $('#Contrasenna').val("");
        $('#Direccion').val("");
        $('#Identificacion').val("");
        $('#Direccion').val("");
    }
}


generatedIds = [];

generateUniqueId = () => {
    let newId;
    do {
        const randomNumber = Math.floor(100000 + Math.random() * 900000);
        newId = parseInt(randomNumber);
    } while (generatedIds.includes(newId));
    generatedIds.push(newId);
    return newId;
}


$(document).ready(function () {

    var view = new CrearUsuario();
    view.InitView();
});