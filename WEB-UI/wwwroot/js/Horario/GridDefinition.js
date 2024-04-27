const columnDefinition = [
    { field: "id", headerName: "ID del Cupo" },
    { field: "fecha", headerName: "Fecha" },
    { field: "hora", headerName: "Hora" },
    { field: "estado", headerName: "Estado" },
    //{
    //    headerName: "Acciones",
    //    cellRenderer: function (params) {

    //        const buttonDownload = document.createElement("button");



    //        buttonDownload.className = "btn btn-success m-1";
    //        buttonDownload.innerHTML = "Descargar";
    //        buttonDownload.addEventListener("click", function () {

    //            handleButtonDescargar(params.data);
    //        });




    //        const wrapper = document.createElement("div");
    //        wrapper.appendChild(buttonDownload);


    //        return wrapper;




    //    }
    //}

];

const HorarioGridOptions = {
    columnDefs: columnDefinition,
    rowData: [],
    rowSelection: 'single',

    //defaults
    defaultColDef: { sortable: true, filter: true },



}





//function handleButtonDescargar(data) {
    

//}



document.addEventListener('DOMContentLoaded', () => {
    const gridDiv = document.querySelector('#gridHorario');
    new agGrid.Grid(gridDiv, HorarioGridOptions);
})

