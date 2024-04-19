function CrearCupos() {
    this.InitView = function () {
        $("#btnCreateNewCupos").click(function () {
            var view = new CrearCupos();
            view.SubmitCreateCupos();
        });
        this.PopulateEspecialidades();
    }

    this.SubmitCreateCupos = function () {
        var cupos = {};
        cupos.especialidad = $("#ddlEspecialidades").find(":selected").val();
        cupos.cantidad = $("#txtCantidad").val();
        cupos.cronometro = $("#txtCronometro").val();
        console.log(cupos);

        var api_url = API_URL_BASE + "/api/Cupos/CreateCupos";

        $.ajax({
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            url: api_url,
            contentType: "application/json;charset=utf-8",
            dataTye: "json",
            data: JSON.stringify(cupos),
            hasContent: true,
        }).done(function (data) {
            Swal.fire({
                title: 'Cupos creados',
                text: 'Se han creado los cupos correctamente',
                icon: 'success',
                confirmButtonText: 'Aceptar'
            }).then(
                function () {
                    var view = new CrearCupos();
                    // Not sending emails to anyone
                    //Window location remains the same
                }
            )
        }).fail(function (error) {
            Swal.fire({
                title: 'Error',
                text: 'Ha ocurrido un error al crear los cupos',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
        });
    }

    this.PopulateEspecialidades = function () {
        var api_url = API_URL_BASE + "/api/Especialidades/GetEspecialidades";

        $.ajax({
            url: api_url,
            method: "GET",
            contentType: "application/json;charset=utf-8",
            dataType: "json"
        }).done(function (data) {
            var select = $("#ddlEspecialidades");
            select.find('option').remove();

            for (var row in data) {
                select.append('<option value=' + data[row] + '>' + data[row] + '</option>');
            }
        }).fail(function (error) {
            console.log(error);
        });
    }


}


$(document).ready(function () {
    var view = new CrearCupos();
    view.InitView();
});
