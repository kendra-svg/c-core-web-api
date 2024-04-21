const columnDefinition = [
    { field: "id", headerName: "ID" },
    { field: "nombre", headerName: "Nombre" },
    { field: "descripcion", headerName: "Descripción" },
    { field: "fechaCreacion", headerName: "Fecha" },
    { field: "ubicacion", headerName: "Ubicacion" },
    { field: "canton", headerName: "Cantón" },
    { field: "provincia", headerName: "Provincia" },
    { field: "distrito", headerName: "Distrito" },
    { field: "direccion", headerName: "Direccion" }

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

const especColumnDefinition = [
    { field: "id_especialidades", headerName: "ID" },
    { field: "nombre", headerName: "Nombre" }
];

const especGridOptions = {
    columnDefs: especColumnDefinition,
    rowData: [],
    rowSelection: 'single',

    defaultColDef: { sortable: true, filter: true },

    //onRowDoubleClicked: params => {
    //    ProcessDoubleClick(params);
    //}

}

function ProcessDoubleClick(params) {
    var view = new SedeList();
    view.GetSedeEspecialidadesDetails(params.data.id);
}

document.addEventListener('DOMContentLoaded', () => {
    const gridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(gridDiv, gripOptions);

    const gridDestination = document.querySelector('#especGrid');
    new agGrid.Grid(gridDestination, especGridOptions);

});
