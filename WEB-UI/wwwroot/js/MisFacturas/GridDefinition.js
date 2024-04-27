const columnDefinition = [
    { field: "id", headerName: "ID Factura" },
    { field: "monto_final", headerName: "Monto total" },
    { field: "fecha_pago", headerName: "Fecha emisión" },
    { field: "estado", headerName: "Estado" },
    { field: "idCita", headerName: "ID Cita" },
    

];
 
const facturasGridOptions = {
    columnDefs: columnDefinition,
    rowData: [],
    rowSelection: 'single',

    defaultColDef: { sortable: true, filter: true },



}




document.addEventListener('DOMContentLoaded', function () {
    const gridDiv = document.querySelector('#factGrid');
    new agGrid.Grid(gridDiv, facturasGridOptions);
});
