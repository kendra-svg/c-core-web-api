function ListaExpedienteReceta() {
    this.InitView = function () {
        this.ListaExRec();
    }

    this.ListaExRec = function () {
        $.ajax({
            url: "https://apisimepci.azurewebsites.net/api/ExpedienteReceta/GetAllExpedienteReceta",
            method: "GET",
            contentType: "application/json;charset=utf-8",
            dataType: "json"
        }).done(function (result) {
            if (result.result == "OK") {
                console.log("Estos fueron", result);
                AgripOptions.api.setRowData(result.data);
            }
            else {
                Swal.fire({
                    icon: "error",
                    title: "Hubo un problema al cargar Los usurios y recetas correspondientes",
                    text: "Hubo un problema al cargar los recetas correspondientes " + result.message
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
    var view = new ListaExpedienteReceta();
    view.InitView();
});
