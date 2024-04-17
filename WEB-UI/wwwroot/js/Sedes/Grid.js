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
    { field: "fecha", headerName: "Fecha Creación" }
];

const gripOptions = {
    columnDefs : columnDefinition, 
    rowData: [],
    rowSelection: 'single',

    defaultColDef: { sortable: true, filter: true },

    onRowDoubleClicked: params => {
        ProcessDoubleClick(params);
    }

}

function ProcessDoubleClick(params) {
    var view = new SedeList();
    view.GetSedeDetails(params.data.id);
}

document.addEventListener('DOMContentLoaded', () => {
    const gridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(gridDiv, gripOptions);
});
