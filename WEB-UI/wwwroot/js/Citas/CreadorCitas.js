


const columnDefinition = [
    
    { field: "fecha", headerName: "Fecha" },
    { field: "hora", headerName: "Hora" },
    
    {
        headerName: "Acciones",
        cellRenderer: function (params) {
            const buttonContainer = document.createElement("div");

            const button = document.createElement("button");
            button.className = "btn btn-success m-1"
            button.innerHTML = "Agendar";
            button.addEventListener("click", function () {
                handleButtonClick(params.data);

            });

            buttonContainer.appendChild(button);
         

            return buttonContainer;
        }
    }
];

const gridOptions = {
    columnDefs: columnDefinition,
    // DATOS QUEMADOS PARA EL WIRERFRAME
    rowData: [
        {  fecha: "13/4/2024", hora: "11:0" },
        {  fecha: "13/4/2024", hora: "12:30" },
    ],
    rowSelection: 'single',

    // defaults
    defaultColDef: { sortable: true, filter: true },

    // Eventos
   
}




function handleButtonClick(data) {

    console.log("Agendada la cita a las:", data.hora);
}






function actualizarDatosGrid() {
    const newData = [
        { fecha: "13/4/2024", hora: "13:00" },
        {  fecha: "13/4/2024", hora: "14:00" },
    ];

    
    gridOptions.api.setRowData(newData);
}










document.addEventListener('DOMContentLoaded', () => {
    


    let grid = null;
    const buscar = document.getElementById('btn-buscar');
    const gridDiv = document.getElementById('grid-posibles-citas');

    buscar.addEventListener('click', function () {

        if (grid) {

            actualizarDatosGrid();
        } else {

            console.log(gridOptions);
            grid = new agGrid.Grid(gridDiv, gridOptions);
        }
    });
});

