const columnDefinition = [
    { field: "identificacion", headerName: "Identificación" },
    { field: "nombre", headerName: "Nombre" },
    { field: "apellidos", headerName: "Apellidos" },
    { field: "correo", headerName: "Correo" },
    { field: "sexo", headerName: "Sexo" },
    {
        headerName: "Acciones",
        cellRenderer: function (params) {
            const buttonExpediente = document.createElement("button");
            buttonExpediente.className = "btn btn-success m-1";
            buttonExpediente.innerHTML = "Ir al expediente";
            buttonExpediente.addEventListener("click", function () {
                handleButtonExpediente(params.data);
            });

            const wrapper = document.createElement("div");
            wrapper.appendChild(buttonExpediente);

            return wrapper;
        }
    }
];

        
   


const gripOptions = {
    columnDefs: columnDefinition,
    rowData: [],
    rowSelection: 'single',

    defaultColDef: { sortable: true, filter: true },


}

document.addEventListener('DOMContentLoaded', () => {
    const gridDiv = document.querySelector('#pacientesGrid');
    new agGrid.Grid(gridDiv, gripOptions);
});



function handleButtonExpediente(data) {

    sessionStorage["pacienteId"]=data.id
    sessionStorage["pacienteEmail"] = data.correo
    window.location = "ExpedientePaciente"

}