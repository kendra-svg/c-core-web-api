const columnDefinition = [
    { field: "id", headerName: "ID" },
    { field: "nombre", headerName: "Nombre" },
    { field: "descripcion", headerName: "Descripción" },
    { field: "provincia", headerName: "provincia" },
    { field: "canton", headerName: "canton" },
    { field: "canton", headerName: "canton" },
    { field: "distrito", headerName: "distrito" },
    { field: "direcciones", headerName: "direcciones" },
    { field: "distrito", headerName: "provincia" },
    { field: "fecha", headerName: "fecha" }
];
const gripOptions = {
    colmnDefs = columnDefinition, 
    rowData: [],
    rowSelection: 'single',

    defaultColDef: { sortable: true, filter: true }

}
document.addEventListener('DOMContendtLoaded', () => {
    const gridDiv = document.querySelector('#grid');
    new agGrid.Grid(gridDiv, gripOptions)
});
