function SedeList() {
    this.InitView = function () {
        this.ListarSede();
    }
    this.ListaSede = function () {
        $.ajax({
            url: "",
            method: "GET",
            contentType: "application/json;charset=utf-8",
            dataType: "json"
        }).done(function (result) {
            console.log("LO que trajo", result);
            gridOptions.api.setRowDate(result);
        }).fail(function (error) {
            console.log("El error" + error);
            Swal.fire({
                icon: "error",
                title: "Error al cargar las Sedes",
                text: "Hubo un error" + error
            });
        });
    }
}
$(document).ready(function () {
    var view = SedeList();
    view.InitView();
});
