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
    //this.GetSedesDetails = function (id) {
    //    $.ajax({
    //        url: api_url + id,
    //        method: "GET",
    //        contentType: "application/json;charset=utf-8",
    //        dataType: "json"
    //    }).done(function (result) {
    //        console.log("Resultado", result);
    //        $('#txtNombre').val(result.nombre);
    //        $('#txtdescripcion').val(result.descripcion);
    //        $('#txtprovincia').val(result.provincia);
    //        $('#txtcanton').val(result.canton);
    //        $('#txtdistrito').val(result.distrito);
    //        $('#txtdirecciones').val(result.direcciones);
    //    }).fail(function (error) {
    //        console.log("Error", error);
    //        Swal.fire({
    //            icon: "error",
    //            title: "Error al cargar el detalle de sede",
    //            text: "Hubo un error " + error
    //        });
    //    });
    //}
}

$(document).ready(function () {
    var view = new SedeList();
    view.InitView();
});
