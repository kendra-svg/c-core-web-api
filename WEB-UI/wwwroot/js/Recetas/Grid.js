const columnDefinition = [
    //atributos cambiar son los ids de html

    { field: "FechaEmision", headerName: "Fecha emision" },
    { field: "NombreMedicamento", headerName: "Medicamento" },
    { field: "DosisRecomendada", headerName: "Dosis recomendada" },
    { field: "RecomendacionAdicional", headerName: "Recomendaciones" }
    { field: "fotoRec", headerName: "Foto de receta" }
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
    var view = new ListReceta();
    view.GetRecetaDetails(params.data.id);
}

document.addEventListener('DOMContentLoaded', () => {
    const gridDiv = document.querySelector('#mGrid');
    new agGrid.Grid(gridDiv, gripOptions);
});
