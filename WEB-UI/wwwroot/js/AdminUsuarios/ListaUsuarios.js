function UsuariosList() {
    this.InitView = function () {
        this.ListaUsuarios();
    }

    this.ListaUsuarios = function () {
        $.ajax({
            url: API_URL_BASE + "/api/Usuario/GetAllUsuariosA",
            method: "GET",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
        }).done(function (result) {
            if (result.result == "OK") {
            console.log("Estos fueron: " + result);
                gripOptions.api.setRowData(result.data);
            }
            else {
                Swal.fire({
                    icon: "error",
                    title: "Hubo un problema al cargar los usuarios",
                    text: "Hubo un problema al cargar las usuarios " + result.message
                });
            }
        }).fail(function (error) {
            console.log("El error" + error.data);
            Swal.fire({
                icon: "error",
                title: "Error al cargar los Usuarios",
                text: "Hubo un error" + error.message
            });

        });
    }
}

$(document).ready(function () {
    var view = new UsuariosList();
    view.InitView();
});
