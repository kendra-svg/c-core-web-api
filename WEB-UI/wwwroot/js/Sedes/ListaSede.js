function SedeList() {

    this.InitView = function () {
        this.ListaSede();
        $('#btnUpdate').click(function () {
            var view = new SedeList();
            view.showSedes();
        });
    }
    this.ListaSede = function () {
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
    this.GetSedesDetails = function (id) {
        alert(id + "si");
        $.ajax({
            //url: API_URL_BASE + 
            url: API_URL_BASE + "" + id,
            method: "GET",
            contentType: "application/json;charset=utf-8",
            dataType: "json"
        }).done(function (result) {
            var sede = result[0];
            console.log("Resultado", result);
            $('#txtnombre').val(result.nombre);
            nombre.nombre;
            $('#txtdescripcion').val(result.descripcion);
            $('#input-fecha-creacion').val(result.fechaCreacion);
            $('#input-otras-senas').val(result.ubicacion);
            //$('#combobox2').val(result.canton);
            //$('#combobox1').val(result.provincia);
            //$('#combobox3').val(result.distrito);
            //$('#coordinates').val(result.direccion);
            
        }).fail(function (error) {
            console.log("Error", error);
            Swal.fire({
                icon: "error",
                title: "Error al cargar el detalle de sede",
                text: "Hubo un error " + error
            });
        });
    }
}

$(document).ready(function () {
    var view = new SedeList();
    view.InitView();
});
