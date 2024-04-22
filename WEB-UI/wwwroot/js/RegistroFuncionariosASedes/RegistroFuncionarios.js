function RegistroFuncionarios() {

    this.InitView = function () {
        this.ListaSedes();
    }

    this.ListaSedes = function () {
        $.ajax({
            //url: "https://localhost:7154/api/Sedes/GetAllSedesA",
            url: "https://apisimepci.azurewebsites.net/api/Sedes/GetAllSedesA",
            method: "GET",
            contentType: "application/json;charset=utf-8",
            dataType: "json"
        }).done(function (result) {
            if (result.result == "OK") {
                console.log("Estos fueron", result);
                gripOptions.api.setRowData(result.data);
                sessionStorage.SeItem("idEspecialidad", result.data.id_especialidades);
            }

            else {
                Swal.fire({
                    icon: "error",
                    title: "Hubo un problema al cargar las Sedes",
                    text: "Hubo un problema al cargar las Sedes " + result.message
                });
            }
        }).fail(function (error) {
            console.log("El error" + error.data);
            Swal.fire({
                icon: "error",
                title: "Error al cargar las Sedes",
                text: "Hubo un error" + error.message
            });

        });
    }
    this.GetSedeEspecialidadesDetails = function (id) {


}

$(document).ready(function () {
    var view = new RegistroFuncionarios();
    view.InitView();
});