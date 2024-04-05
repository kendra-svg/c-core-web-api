const columnDefinition = [
    { field: "nombrePaciente", headerName: "Nombre del Paciente" },
    { field: "fecha", headerName: "Fecha" },
    { field: "hora", headerName: "Hora" },
    { field: "sede", headerName: "Sede" },
    { field: "especialidad", headerName: "Especialidad" },
    { field: "profesional", headerName: "Profesional" },
    { field: "precio", headerName: "Precio" },
];





const gripOptions = {
    columnDefs: columnDefinition,
    //DATOS QUEMADOS PARA EL WIRERFRAME
    rowData: [
        { nombrePaciente: "John Doe", fecha: "13/4/2024", hora: "21:09", sede: "Heredia", especialidad: "Medicina General", profesional: "Dr. Gabriel", precio: "23.500" },
    ],
    rowSelection: 'single',

    //defaults
    defaultColDef: { sortable: true, filter: true },

    //Eventos
    onRowDoubleClicked: params => {
        ProcessDoubleClick(params);
    }
}

function ProcessDoubleClick(params) {

}


document.addEventListener('DOMContentLoaded', () => {
    const gridDiv = document.querySelector('#gridCitasPersonales');
    new agGrid.Grid(gridDiv, gripOptions);
});

