const columnDefinition = [
    { field: "id", headerName: "ID de Cita" },
    { field: "nombreExamen", headerName: "Estado" },
    { field: "comentario", headerName: "Fecha" },
    { field: "fecha", headerName: "sfas" },
   

];

const CitasGridOptions = {
    columnDefs: columnDefinition,
    rowData: [],
    rowSelection: 'single',

    //defaults
    defaultColDef: { sortable: true, filter: true },



}

document.addEventListener('DOMContentLoaded', () => {
    const gridDiv = document.querySelector('#gridCitasPersonales');
    new agGrid.Grid(gridDiv, CitasGridOptions);
})

