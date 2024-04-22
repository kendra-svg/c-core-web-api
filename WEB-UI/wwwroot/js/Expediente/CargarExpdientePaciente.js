function ExpInfo() {
    var self = this;
    var expedienteCargado = null;
    this.InitView = function () {

        $('#btn-editar').click(function () {
            self.GuardarCambiosExp();
        });

        self.CargarInfoBasica();
        self.CargarInfoExp();

    }

    this.CargarInfoBasica = function () {

        console.log(sessionStorage["pacienteId"])
        var api_url = API_URL_BASE + "/api/Usuario/GetUserByCorreo";
        $.ajax({
            url: api_url + "?correo=" + sessionStorage["pacienteEmail"],
            method: "GET",
            contentType: "application/json;charset=utf-8",
            dataType: "json"
        }).done(function (result) {

            var usuario = result[0];
            $('#txt-nombre').text(usuario.nombre + usuario.apellidos)
            $('#txt-correo').text(usuario.correo)
            $('#profile-img').attr('src', usuario.foto);
            $('#txt-identificaion').text(usuario.identificacion)
            $('#txt-sexo').text(usuario.sexo)
            $('#txt-telefono').text(usuario.telefono)
            $('#txt-edad').text(usuario.edad)
            $('#txt-direccion').text(usuario.direccion)


        }).fail(function (error) {
            console.log("Error del ajax ", error);
            Swal.fire({
                icon: "error",
                title: "Error al cargar el detalle del paciente",
                text: "Hubo un error " + error
            });
        });
    }






    this.CargarInfoExp = function () {


        var api_url = API_URL_BASE + "/api/Expedientes/GetExpedienteById";
        $.ajax({
            url: api_url + "?idExp=" + sessionStorage["pacienteId"],
            method: "GET",
            contentType: "application/json;charset=utf-8",
            dataType: "json"
        }).done(function (result) {

            expedienteCargado = result
            $('#txt-id-expediente').text(result.id);
            $('#txt-antencedentes-p').val(result.antecedentesPersonales);
            $('#txt-tratamientos').val(result.tratamietosFarmacologicos);
            $('#txt-antecedentes-f').val(result.antecedentesFamiliades);
            $('#enfermedades-cronicas').val(result.enfermedadesCronicas);
            $('#habitos').val(result.malosHabitos);
            $('#riesgos').val(result.riesgosCardiovasculares);
            $('#diabetes').val(result.diabetes);
            $('#enfermedades-congenitas').val(result.enfermedadesCongenitas);
            $('#txt-antecedentes-c').val(result.antecedentesCancer);

        }).fail(function (error) {
            console.log("Error del ajax ", error);
            Swal.fire({
                icon: "error",
                title: "Error al cargar el expediente",
                text: "Hubo un error " + error
            });
        });
    }

    this.GuardarCambiosExp = function () {







        var api_url = API_URL_BASE + "/api/Expedientes/UpdateExpediente";



        var cambiosExpediente = {};


        cambiosExpediente.id = expedienteCargado.id
        cambiosExpediente.antecedentesPersonales = $('#txt-antencedentes-p').val();
        cambiosExpediente.tratamietosFarmacologicos = $('#txt-tratamientos').val();
        cambiosExpediente.antecedentesFamiliades = $('#txt-antecedentes-f').val();
        cambiosExpediente.enfermedadesCronicas = $('#enfermedades-cronicas').val();
        cambiosExpediente.malosHabitos = $('#habitos').val();
        cambiosExpediente.riesgosCardiovasculares = $('#riesgos').val();
        cambiosExpediente.diabetes = $('#diabetes').val();
        cambiosExpediente.enfermedadesCongenitas = $('#enfermedades-congenitas').val();
        cambiosExpediente.antecedentesCancer = $('#txt-antecedentes-c').val();




        if (cambiosExpediente.antecedentesPersonales == null) {
            cambiosExpediente.antecedentesPersonales = expedienteCargado.antecedentesPersonales
        }


        if (cambiosExpediente.tratamietosFarmacologicos == null) {
            cambiosExpediente.tratamietosFarmacologicos = expedienteCargado.tratamietosFarmacologicos
        }


        if (cambiosExpediente.antecedentesFamiliades == null) {
            cambiosExpediente.antecedentesFamiliades = expedienteCargado.antecedentesFamiliades
        }

        if (cambiosExpediente.enfermedadesCronicas == null) {
            cambiosExpediente.enfermedadesCronicas = expedienteCargado.enfermedadesCronicas
        }
        if (cambiosExpediente.malosHabitos == null) {
            cambiosExpediente.malosHabitos = expedienteCargado.malosHabitos
        }
        if (cambiosExpediente.diabetes == null) {
            cambiosExpediente.diabetes = expedienteCargado.diabetes
        }
        if (cambiosExpediente.enfermedadesCongenitas == null) {
            cambiosExpediente.enfermedadesCongenitas = expedienteCargado.enfermedadesCongenitas
        }
        if (cambiosExpediente.antecedentesCancer == null) {
            cambiosExpediente.antecedentesCancer = expedienteCargado.antecedentesCancer
        }

        console.log(cambiosExpediente)






        $.ajax({
            headers: {
                'Accept': "application/json",
                'Content-Type': "application/json"
            },
            method: "PUT",
            url: api_url,
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            data: JSON.stringify(cambiosExpediente),
            hasContent: true
        }).done(function (result) {
            Swal.fire({
                title: "Exito!",
                icon: "success",
                text: "Expediente actulizado correctamente",
                timer: 2000
            }).then(
                function () {
                    var view = new ExpInfo();
                    view.CargarInfoBasica();
                    view.CargarInfoExp();

                }
            )
        }).fail(function (error) {
            alert("ERROR AL ACTULIZAR EXPEDIENTE");
            console.log("Error", error);
        });

    }



}



$(document).ready(function () {
    var view = new ExpInfo();
    view.InitView();
})