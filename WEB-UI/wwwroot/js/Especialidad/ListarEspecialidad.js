function ListSpeciality() {

    this.InitView = function () {
        this.ListaEspecialidad();
        $('#dtnCreate').click(function () {
            var view = new ListSpeciality();
        });
        $('#btnPUT').click(function () {
            var view = new ListSpeciality();
            view.PutEspe();
        });
    }
    this.ListaEspecialidad = function () {
        $.ajax({
           // url: "https://localhost:7154/api/Especialidades/GetAllEspecialidadesA",
            url: "https://apisimepci.azurewebsites.net/api/Especialidades/GetAllEspecialidadesA",
            method: "GET",
            contentType: "application/json;charset=utf-8",
            dataType: "json"
        }).done(function (result) {
            if (result.result == "OK") {
                console.log("Estos fueron", result);
                gripOptions.api.setRowData(result.data);
            }
            else {
                Swal.fire({
                    icon: "error",
                    title: "Hubo un problema al cargar las especialidades",
                    text: "Hubo un problema al cargar las especialidades " + result.message
                });
            }
        }).fail(function (error) {
            console.log("El error" + error.data);
            Swal.fire({
                icon: "error",
                title: "Error al cargar las especialidades",
                text: "Hubo un error" + error.message
            });

        });
    }
    this.GetEspe = function (id) {
        $.ajax({
            
            url: "https://apisimepci.azurewebsites.net/api/Especialidades/GetEspecialidadById?id=" + id,
            //url: "https://localhost:7154" + "/api/Especialidades/GetEspecialidadById?id=" + id,

            method: "GET",
            contentType: "application/json;charset=utf-8",
            dataType: "json"
        }).done(function (result) {
                var espe = result[0];
                console.log("Resultado", result);
                $('#ID').val(result.id);
                $('#NombreEspecialidad').val(result.nombre);
                $('#Costo').val(result.costo);
                $('#iva').val(result.iva);
           
        }).fail(function (error) {
            console.log("Error", error);
            Swal.fire({
                icon: "error",
                title: "Error al cargar el detalle de sede",
                text: "Hubo un error " + error
            });
        });
    }
    this.PutEspe = function () {
        var espe = {};
        espe.id = $('#ID').val();
        espe.costo = $('#Costo').val();
        espe.iva = $('#iva').val();
        if (espe.costo === "") {
            Swal.fire({
                icon: 'error',
                text: "Por favor llenar el espacio de costo.",
                title: 'Error'
            });
        }
        if (espe.iva === "") {
            Swal.fire({
                icon: 'error',
                text: "Por favor llenar el espacio de IVA.",
                title: 'Error'
            });
        }
        $.ajax({
            headers: {
                'Accept': "application/json",
                'Content-Type': "application/json"
            },
            method: "PUT",
            url: "https://apisimepci.azurewebsites.net" + "/api/Especialidades/UpdateEspecialida?id="+ espe.id + "&costo=" + espe.costo + "&iva=" + espe.iva,
           // url: "https://localhost:7154" + "/api/Especialidades/UpdateEspecialida?id=" + espe.id + "&costo=" + espe.costo + "&iva=" + espe.iva,
            //https://localhost:7154/api/Especialidades/UpdateEspecialida?id=906535&costo=1&iva=1
            contentType: "application/json;charset=utf-8",
            dataType: "text",
            data: JSON.stringify(espe)
        }).done(function (result) {
            Swal.fire({
                title: '¡Especialidad actualizada!',
                text: 'Se ha actualizado la sede con  éxito.',
                icon: 'success',
                confirmButtonText: 'Aceptar'
            });
        }).fail(function (error) {
            Swal.fire({
                title: '¡Error!',
                text: 'No se actualizo la informacion',
                icon: 'error',
                confirmButtonText: 'Aceptar',
            });
        });
    }

}
$(document).ready(function () {
    var view = new ListSpeciality();
    view.InitView();
});
