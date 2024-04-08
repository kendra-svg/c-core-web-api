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
        usuario.fecha = $('#FechaNacimiento').val();
        usuario.sexo = $('#Sexo').find(":selected").val();
        usuario.contrasenna = $('#Contrasenna').val();
        /*        usuario.contrasenna = $('#ConfirmarContrasenna').val();*/
        usuario.direccion = $('#Direccion').find(":selected").val();
        usuario.foto = $('#Correo').val();
        usuario.identificacion = $('#Identificacion').val();
        usuario.ubicaciones = $('#Correo').val();

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
                title: "success",
                icon: "info",
                text: "Registro con éxito",
                timer: 2000
            }).then(
                function () {
                    var view = new CrearUsuario();
                    view.CommunicatePatient();
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