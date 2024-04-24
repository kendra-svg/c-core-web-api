const cuposcolumnDef = [
    { field: "id", headerName: "ID Cupo" },
    { field: "nombreSede", headerName: "Sede" },
    { field: "nombreEspecialidad", headerName: "Especialidad" },
    { field: "cantidad", headerName: "Cantidad" },
    { field: "cronometro", headerName: "Tiempo (min)" }
    
    
   
   
];

const cuposGridOptions = {
    columnDefs: cuposcolumnDef,
    rowData: [],
    rowSelection: 'single',

    //opciones
    defaultColDef: { sortable: true, filter: true },

    onRowDoubleClicked: params => {
        ProcessDoubleClick(params);
    }
};

function ProcessDoubleClick(params) {
    var view = new Configure();
    view.GetCuposDetails(params.data.id);
    
}


document.addEventListener('DOMContentLoaded', () => {
    const gridDiv = document.querySelector('#cupos-grid');
    new agGrid.Grid(gridDiv, cuposGridOptions);
});