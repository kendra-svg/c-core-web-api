function PacientesList() {
    this.InitView = function () {
        this.ListaPacientes();
    }

    this.ListaPacientes = function () {
        $.ajax({
            url: API_URL_BASE + "/api/Usuario/GetAllUsuariosA", 
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
                    title: "Hubo un problema al cargar los pacientes",
                    text: "Hubo un problema al cargar las pacientes " + result.message
                });
            }
        }).fail(function (error) {
            console.log("El error" + error.data);
            Swal.fire({
                icon: "error",
                title: "Error al cargar los pacientes",
                text: "Hubo un error" + error.message
            });

        });
    }
}

$(document).ready(function () {
    var view = new PacientesList();
    view.InitView();
});
