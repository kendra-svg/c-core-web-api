function ListSpeciality() {

    this.InitView = function () {
        this.ListaEspecialidad();
        //$('#dtnCreate').click(function () {
        //    var view = new SedeList();
        //});
    }
    this.ListaEspecialidad = function () {
        $.ajax({
            //url: "https://localhost:7154/api/Especialidades/GetAllEspecialidadesA",
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


}
$(document).ready(function () {
    var view = new ListSpeciality();
    view.InitView();
});
