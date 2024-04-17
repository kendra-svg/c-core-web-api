const columnDefinition = [
    { field: "id", headerName: "ID de Examen" },
    { field: "nombreExamen", headerName: "Nombre del Examen" },
    { field: "comentario", headerName: "Comentario" },
    { field: "fecha", headerName: "Fecha" },
    {
        headerName: "Acciones",
        cellRenderer: function (params) {

            const buttonPagar = document.createElement("button");
            const buttonCancelar = document.createElement("button");


            buttonPagar.className = "btn btn-success m-1";
            buttonPagar.innerHTML = "Descargar";
            buttonPagar.addEventListener("click", function () {

                handleButtonDescargar(params.data);
            });


            buttonCancelar.className = "btn btn-danger m-1"
            buttonCancelar.innerHTML = "Eliminar";
            buttonCancelar.addEventListener("click", function () {

                handleButtonEliminar(params.data);
            });

            const wrapper = document.createElement("div");
            wrapper.appendChild(buttonPagar);
            wrapper.appendChild(buttonCancelar);

            return wrapper;




        }
    }

];

const LaboratorioGridOptions = {
    columnDefs: columnDefinition,
    rowData: [],
    rowSelection: 'single',

    //defaults
    defaultColDef: { sortable: true, filter: true },

    //Eventos
    onRowDoubleClicked: params => {
        ProcessDoubleClick(params);
    }
}

function ProcessDoubleClick(params) {

}




function handleButtonDescargar(data) {
    console.log("DESCARGANDO:", data.foto);


}

function handleButtonEliminar(data) {
    console.log("ELIMINAR EL EXAMEN CON ID:", data.id);
    
    //this.DeleteLab = function () {
    //    api_url = API_URL_BASE + "/api/Laboratorios/DeleteLabById";
    //    $.ajax({
    //        url: api_url + "?labId=" + data.id,
    //        method: "GET",
    //        contentType: "application/json;charset=utf-8",
    //        dataType: "json"
    //    }).done(function (result) {
    //        if (result) {
    //            Swal.fire({
    //                icon: 'sucess',
    //                title: 'Exito de Ejecucion',
    //                text: 'Eliminado con exito'
    //            })
    //        }
    //        else {
    //            Swal.fire({
    //                icon: 'error',
    //                title: 'Error de Ejecucion',
    //                text: 'Hubo un error! ' + result.message
    //            })
    //        }


    //    }).fail(function (error) {
    //        console.log(error)
    //        Swal.fire({
    //            icon: 'error',
    //            title: 'Oops...',
    //            text: 'Hubo un error al cargar sus examenes! ' + error
    //        })



    //    });
    //}
    

   
}
document.addEventListener('DOMContentLoaded', () => {
    const gridDiv = document.querySelector('#gridExamenesPersonales');
    new agGrid.Grid(gridDiv, LaboratorioGridOptions);
})

