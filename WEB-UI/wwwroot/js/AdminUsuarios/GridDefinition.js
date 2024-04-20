const columnDefinition = [
    { field: "Identificacion", headerName: "Identificación" },
    { field: "Nombre", headerName: "Nombre" },
    { field: "Apellidos", headerName: "Apellidos" },
    { field: "Telefono", headerName: "Teléfono" },
    { field: "Correo", headerName: "Correo" },
    { field: "Sexo", headerName: "Sexo" },
    { field: "Rol", headerName: "Rol" },
    { field: "Estado", headerName: "Estado" },
    { field: "Ubicacion", headerName: "Ubicación" }
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