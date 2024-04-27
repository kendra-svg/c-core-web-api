function RecetaLista() {

    this.InitView = function () {
        this.ListaReceta();
    }
    this.ListaReceta = function () {
        $.ajax({
            url: "https://apisimepci.azurewebsites.net/api/Recetas/GetAllRecetas",
           // url: "https://apisimepci.azurewebsites.net/api/Recetas/GetAllRecetas",
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
                    title: "Hubo un problema al cargar las recetas",
                    text: "Hubo un problema al cargar las recetas " + result.message
                });
            }
        }).fail(function (error) {
            console.log("El error" + error.data);
            Swal.fire({
                icon: "error",
                title: "Error al cargar las recetas",
                text: "Hubo un error" + error.message
            });

        });
    }
}
$(document).ready(function () {
    var view = new RecetaLista();
    view.InitView();
});