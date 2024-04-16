function SedeList() {
    var api_url = API_URL_BASE + "/api/Sedes/GetSedes";
    this.InitView = function () {
        this.ListarSede();
    }
    this.ListaSede = function () {
        $.ajax({

            url: api_url,
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
