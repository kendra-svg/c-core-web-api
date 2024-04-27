function SedeList() {

    this.InitView = function () {
        this.ListaSede();
        $('#btnUpdate').click(function () {
            var view = new SedeList();
            view.PutSede();
        });
    }
    this.ListaSede = function () {
        $.ajax({
            url:API_URL_BASE + "/api/Sedes/GetAllSedesA",
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
        $.ajax({
            url: API_URL_BASE + "/api/Sedes/GetSedeById?id=" + id,
            method: "GET",
            contentType: "application/json;charset=utf-8",
            dataType: "json"
        }).done(function (result) {
            var sede = result[0];
            console.log("Resultado", result);
            
            $('#txtid').val(sede.id);
            $('#txtnombre').val(sede.nombre);
            $('#txtdescripcion').val(sede.descripcion);
            $('#input-fecha-creacion').val(sede.fechaCreacion);
            $('#coordinates').val(sede.ubicacion);
            //$('#combobox2').val(sede.canton);
            //$('#combobox1').val(sede.provincia);
            //$('#combobox3').val(sede.distrito);
            $('#input-otras-senas').val(sede.direccion);
        }).fail(function (error) {
            console.log("Error", error);
            Swal.fire({
                icon: "error",
                title: "Error al cargar el detalle de sede",
                text: "Hubo un error " + error
            });
        });
    }
    this.PutSede = function () {
        var sede = {};
        sede.id = $('#txtid').val();
        sede.nombre = $('#txtnombre').val();
        sede.descripcion = $('#txtdescripcion').val();
        sede.fechaCreacion = $('#input-fecha-creacion').val();
        sede.direccion = $('#coordinates').val();
        sede.canton = $('#combobox2').find(":selected").val();
        sede.provincia = $('#combobox1').find(":selected").val();
        sede.distrito = $('#combobox3').find(":selected").val();
        sede.ubicacion = $('#input-otras-senas').val(); //coodinates
        if (sede.id === "") {
            Swal.fire({
                icon: 'error',
                text: "Debe seleccionar una sede en la tabla anterior.",
                title: 'Error'
            });
            return;
        }
        if (sede.nombre === "") {
            Swal.fire({
                icon: 'error',
                text: "Por favor llenar el espacio de nombre.",
                title: 'Error'
            });
            return;
        }
        if (sede.descripcion === "") {
            Swal.fire({
                icon: 'error',
                text: "Por favor llenar el espacio de descripción.",
                title: 'Error'
            });
            return;
        }
        if (sede.fechaCreacion === "") {
            Swal.fire({
                icon: 'error',
                text: "Por favor llenar el espacio de fecha.",
                title: 'Error'
            });
            return;
        }
        if (sede.ubicacion === "") {
            Swal.fire({
                icon: 'error',
                text: "Por favor llenar el espacio de ubicación.",
                title: 'Error'
            });
            return;
        }
        if (sede.provincia === "") {
            Swal.fire({
                icon: 'error',
                text: "Por favor llenar el espacio de provincia.",
                title: 'Error'
            });
            return;
        }
        if (sede.canton === "") {
            Swal.fire({
                icon: 'error',
                text: "Por favor llenar el espacio de canton.",
                title: 'Error'
            });
            return;
        }
        if (sede.distrito === "")
        if (sede.direccion === "") {
            Swal.fire({
                icon: 'error',
                text: "Por favor llenar el espacio de dirección.",
                title: 'Error'
            });
            return;
        }
        $.ajax({
            headers: {
                'Accept': "application/json",
                'Content-Type': "application/json"
            },
            method: "PUT",
            url: API_URL_BASE  +"/api/Sedes/updateSede?id=" + sede.id + "&nombre=" + sede.nombre + "&descripcion=" + sede.descripcion + "&date=" + sede.fechaCreacion + "&direccion=" + sede.ubicacion + "&provincia=" + sede.provincia + "&canton=" + sede.canton + "&distrito=" + sede.distrito + "&ubicaciones=" + sede.direccion,
            ///api/Sedes/updateSede?id=2356&nombre=Liberia%20Centro&descripcion=Sede%20en%20Guanacasteca&date=2024-04-16&direccion=De%20pochos%20bar&provincia=Guanacaste&canton=Liberia&distrito=Liberia&ubicaciones=xd'
            contentType: "application/json;charset=utf-8",
            dataType: "text",
            data: JSON.stringify(sede)
        }).done(function (result) {
            Swal.fire({
                title: '¡Sede Actualizada!',
                text: 'Se ha actualizado la sede con  éxito.',
                icon: 'success',
                confirmButtonText: 'Aceptar'
            });
        }).fail(function (error) {
            Swal.fire({
                title: '¡Error!',
                text: 'No se actualizo la información',
                icon: 'error',
                confirmButtonText: 'Aceptar',
            });
        });
    }
}

$(document).ready(function () {
    var view = new SedeList();
    view.InitView();
});
