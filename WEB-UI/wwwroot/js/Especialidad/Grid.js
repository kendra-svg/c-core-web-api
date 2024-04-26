const columnDefinition = [
    { field: "id", headerName: "ID" },
    { field: "nombre", headerName: "Nombre" },
    { field: "costo", headerName: "Costo" },
    { field: "iva", headerName: "IVA" }
];

const gripOptions = {
    columnDefs: columnDefinition,
    rowData: [],
    rowSelection: 'single',

    defaultColDef: { sortable: true, filter: true },

    onRowDoubleClicked: params => {
        ProcessDoubleClick(params);
    }

}

function ProcessDoubleClick(params) {
    var view = new ListSpeciality();
    view.GetEspe(params.data.id);
}

document.addEventListener('DOMContentLoaded', () => {
    const gridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(gridDiv, gripOptions);
});
