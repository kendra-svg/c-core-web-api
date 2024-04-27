function Info() {
    var self = this;

    this.InitView = function () {

      

        self.CargarInfoBasica();
       

    }

    this.CargarInfoBasica = function () {


        var api_url = API_URL_BASE + "/api/Usuario/GetUserByCorreo";
        $.ajax({
            url: api_url + "?correo=" + sessionStorage["userEmail"],
            method: "GET",
            contentType: "application/json;charset=utf-8",
            dataType: "json"
        }).done(function (result) {

            var usuario = result[0];


            
            $('#txt-nombre').val(usuario.nombre)
            $('#txt-apellidos').val(usuario.apellidos)
            $('#txt-correo').val(usuario.correo)
            $('#profile-img').attr('src', usuario.foto);
            $('#txt-identificaion').val(usuario.identificacion)
            $('#txt-sexo').val(usuario.sexo)
            $('#txt-telefono').val(usuario.telefono)
            $('#txt-edad').val(usuario.edad)
            $('#txt-direccion').val(usuario.direccion)
            $('#txt-fecha-naciemiento').val(usuario.fechaNacimiento)
            $('#txt-coodernadas').val(usuario.ubicaciones)

        }).fail(function (error) {
            console.log("Error del ajax ", error);
            Swal.fire({
                icon: "error",
                title: "Error al cargar el detalle del paciente",
                text: "Hubo un error " + error
            });
        });
    }

}



$(document).ready(function () {
    var view = new Info();
    view.InitView();
})