const columnDefinition = [
    { field: "id", headerName: "ID" },
    { field: "interesGenuino", headerName: "Interes genuino" },
    { field: "experiencia", headerName: "Experiencia" },
    { field: "amabilidadCortesia", headerName: "Amabilidad y cortesia" },
    { field: "comentariosAdicionales", headerName: "Comentarios adicionales" },


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
    var view = new EncuestaList();
    view.GetEncuestaDetails(params.data.id);
}

document.addEventListener('DOMContentLoaded', () => {
    const gridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(gridDiv, gripOptions);
});
