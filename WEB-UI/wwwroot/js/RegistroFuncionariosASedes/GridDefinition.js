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
    { field: "id", headerName: "ID" },
    { field: "nombre", headerName: "Especialidad" },
    { field: "costo", headerName: "Costo" },
    { field: "iva", headerName: "IVA" },

    {
        headerName: "Acciones",
        cellRenderer: function (params) {

            const button = document.createElement("button");

            button.className = "btn btn-success m-1";
            button.innerHTML = "Editar";

            button.addEventListener("click", function () {
                handleButtonEditar(params.data);
            });
            console.log(params.data)

            const wrapper = document.createElement("div");
            wrapper.appendChild(button);

            return wrapper;
        }
    }
    
];


function handleButtonEditar(data) {

    const nombreInput = document.getElementById('NombreEspecialidad');
    const costoInput = document.getElementById('CostoEspecialidad');
    const ivaInput = document.getElementById('IvaEspecialidad');



    nombreInput.style.display = 'block';
    costoInput.style.display = 'block';
    ivaInput.style.display = 'block';

    document.querySelector('label[for="NombreEspecialidad"]').style.display = 'block';
    document.querySelector('label[for="CostoEspecialidad"]').style.display = 'block';
    document.querySelector('label[for="IvaEspecialidad"]').style.display = 'block';
    document.getElementById('agregarEspecialidadBtn').style.display = 'block';

    nombreInput.value = data.nombre;
    costoInput.value = data.costo;
    ivaInput.value = data.iva;



}



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
    var view = new RegistroFuncionarios();
    view.GetSedeEspecialidadesDetails(params.data.id);
}

document.addEventListener('DOMContentLoaded', () => {
    const gridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(gridDiv, gripOptions);

    const gridDestination = document.querySelector('#especGrid');
    new agGrid.Grid(gridDestination, especGridOptions);

});
