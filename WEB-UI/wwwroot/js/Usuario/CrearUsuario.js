function CrearUsuario() {

    var self = this; // Mantenemos una referencia a 'this' en 'self' para evitar problemas de alcance

    this.InitView = function () {
        $('#boton-enviar').click(function (event) {
            event.preventDefault(); // Evita que se realice la acción por defecto del botón (enviar el formulario)
            self.SubmitCrearUsuario(); // Llama al método para enviar el usuario
        })
    }


    this.SubmitCrearUsuario = function () {
        var usuario = {};
        usuario.nombre = $('#Nombre').val();
        usuario.apellidos = $('#Apellidos').val();
        usuario.telefono = $('#Telefono').val();
        usuario.correo = $('#Correo').val();
        usuario.fecha = $('#FechaNacimiento').val();
        usuario.sexo = $('#Sexo').find(":selected").val();
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
            }).then(
                function () {
                    var view = new CrearUsuario();
                   /* view.CommunicatePatient();*/
                }
            )      
        }).fail(function (error) {
            alert("Error al Crear el usuario");
            console.log("Error", error);
        });

    }
    //this.CommunicatePatient = function () {
    //    console.log("Enviar Correo al Paciente");
    //}
}

$(document).ready(function () {
    var view = new CrearUsuario();
    view.InitView();
});


   

