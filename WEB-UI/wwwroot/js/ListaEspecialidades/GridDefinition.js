const cuposColumnDef = [
    { field: "especialidad", headerName: "Especialidad" },
    { field: "cantidad", headerName: "Cantidad" },
    { field: "cronometro", headerName: "Cronometro" }
];

const cuposGridOptions = {
    columnDefs: cuposColumnDef,
    rowData: [],
    rowSelection: "single",

    defaultColDef: { sortable: true, filter: true, resizable: true }

};

document.addEventListener("DOMContentLoaded", function () {
    const gridDiv = document.querySelector("#cuposGrid");
    new agGrid.Grid(gridDiv, cuposGridOptions);
});
    