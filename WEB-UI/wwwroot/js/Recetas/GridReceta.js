const columnDefinition = [
    { field: "id", headerName: "ID" },
    { field: "nombreMedicamento", headerName: "Nombre" },
    { field: "recomendacionAdicional", headerName: "Recomendaciones" },
    { field: "dosisRecomendada", headerName: "Dosis en Miligramos" },
    { field: "fechaEmision", headerName: "Fecha emisión" },
];

const gripOptions = {
    columnDefs: columnDefinition,
    rowData: [],
    rowSelection: 'single',

    defaultColDef: { sortable: true, filter: true },
}

function ProcessDoubleClick(params) {
    var view = new RecetaLista();
}

document.addEventListener('DOMContentLoaded', () => {
    const gridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(gridDiv, gripOptions);
});
