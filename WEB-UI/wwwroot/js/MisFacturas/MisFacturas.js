function manejarFacturas() {
    this.InitView = function () {
        this.ListaFacturas();

        //boton pagar

        //boton descargar

        //boton eliminar
    }


    this.ListaFacturas = function () {
        $.ajax({
            //url: "https://localhost:7154" + "/api/Factura/GetFacturasByUserId?id_usuario=" + sessionStorage.getItem("userId"),
            url: API_URL_BASE + "/api/Factura/GetFacturasByUserId?id_usuario=" + sessionStorage.getItem("userId"),
            method: "GET",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
        }).done(function (result) {
            if (result && result.length > 0) {
                // Mapea los resultados para incluir solo los campos necesarios (id e idCita)
                const mappedData = result.map(function (factura) {
                    return { id: factura.id, idCita: factura.idCita, monto_final: factura.montoFinal, estado: factura.estado, fecha_pago: factura.fechaPago  };
                });
                console.log("Estos fueron los mappeados", mappedData);
                // Establece los datos mapeados en la cuadrícula
                facturasGridOptions.api.setRowData(mappedData);
                var select = document.getElementById("montoFinalSelect");
                for (var i = 0; i < mappedData.length; i++) {
                    var opt = document.createElement('option');
                    opt.value = mappedData[i].monto_final;
                    opt.innerHTML = mappedData[i].monto_final;
                    select.appendChild(opt);
                }
            } else {
                console.log("No se encontraron facturas.");
                // Opcional: Mostrar un mensaje si no hay facturas
                Swal.fire({
                    icon: 'info',
                    title: 'Información',
                    text: 'No se encontraron facturas para mostrar.'
                });
            }
        
        }).fail(function (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No se pudo cargar las facturas!' + error.message
            });
        });
    }
}

$(document).ready(function () {
    var view = new manejarFacturas();
    view.InitView();
});
