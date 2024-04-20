const columnDefinition = [
    { field: "identificacion", headerName: "Identificación" },
    { field: "nombre", headerName: "Nombre" },
    { field: "apellidos", headerName: "Apellidos" },
    /*{ field: "telefono", headerName: "Teléfono" },*/
    { field: "correo", headerName: "Correo" },
    { field: "sexo", headerName: "Sexo" },
    { field: "rol", headerName: "Rol" }
    //{ field: "estado", headerName: "Estado" },
    //{ field: "ubicaciones", headerName: "Ubicación" }
];

const gripOptions = {
    columnDefs: columnDefinition,
    rowData: [],
    rowSelection: 'single',

    defaultColDef: { sortable: true, filter: true },


}

document.addEventListener('DOMContentLoaded', () => {
    const gridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(gridDiv, gripOptions);
});