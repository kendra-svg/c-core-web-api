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


    //const nombreInput = document.getElementById('NombreEspecialidad');
    //const costoInput = document.getElementById('CostoEspecialidad');
    //const ivaInput = document.getElementById('IvaEspecialidad');



    ////nombreInput.style.display = 'block';
    ////costoInput.style.display = 'block';
    ////ivaInput.style.display = 'block';

    //nombreInput.classList.add('visible');
    //costoInput.classList.add('visible');
    //ivaInput.classList.add('visible');

    //document.querySelector('label[for="NombreEspecialidad"]').classList.add('visible');
    //document.querySelector('label[for="CostoEspecialidad"]').classList.add('visible');
    //document.querySelector('label[for="IvaEspecialidad"]').classList.add('visible');

    ////document.querySelector('label[for="NombreEspecialidad"]').style.display = 'block';
    ////document.querySelector('label[for="CostoEspecialidad"]').style.display = 'block';
    ////document.querySelector('label[for="IvaEspecialidad"]').style.display = 'block';
    //document.getElementById('agregarEspecialidadBtn').style.display = 'block';

    //nombreInput.value = data.nombre;
    //costoInput.value = data.costo;
    //ivaInput.value = data.iva;
    // Obtener los inputs y labels
    const nombreInput = document.getElementById('NombreEspecialidad');
    const costoInput = document.getElementById('CostoEspecialidad');
    const ivaInput = document.getElementById('IvaEspecialidad');
    const nombreLabel = document.querySelector('label[for="NombreEspecialidadLabel"]');
    const costoLabel = document.querySelector('label[for="CostoEspecialidadLabel"]');
    const ivaLabel = document.querySelector('label[for="IvaEspecialidadLabel"]');

    document.getElementById('agregarEspecialidadBtn').style.display = 'block';

    // Mostrar los inputs y labels
    nombreInput.style.display = 'block';
    costoInput.style.display = 'block';
    ivaInput.style.display = 'block';
    nombreLabel.style.display = 'block';
    costoLabel.style.display = 'block';
    ivaLabel.style.display = 'block';

    // Asignar los valores correspondientes a los inputs
    nombreInput.value = data.nombre;
    costoInput.value = data.costo;
    ivaInput.value = data.iva;
}


    





const especGridOptions = {
    columnDefs: especColumnDefinition,
    rowData: [],
    rowSelection: 'single',

    defaultColDef: { sortable: true, filter: true },

    localeText: {
        noRowsToShow: 'Si no se muestra la especialidad, debe seleccionar una sede. Si ya seleccionó una sede, significa que no hay especialidades registradas a dicha sede.' // Personaliza el mensaje aquí
    },


   

}

function ProcessDoubleClick(params) {

    const nombreInput = document.getElementById('NombreEspecialidad');
    const costoInput = document.getElementById('CostoEspecialidad');
    const ivaInput = document.getElementById('IvaEspecialidad');
    const nombreLabel = document.querySelector('label[for="NombreEspecialidadLabel"]');
    const costoLabel = document.querySelector('label[for="CostoEspecialidadLabel"]');
    const ivaLabel = document.querySelector('label[for="IvaEspecialidadLabel"]');

    nombreInput.value = "";
    costoInput.value = "";
    ivaInput.value = "";

    nombreInput.style.display = 'none';
    costoInput.style.display = 'none';
    ivaInput.style.display = 'none';
    nombreLabel.style.display = 'none';
    costoLabel.style.display = 'none';
    ivaLabel.style.display = 'none';
    document.getElementById('agregarEspecialidadBtn').style.display = 'none';

    var view = new RegistroFuncionarios();
    view.GetSedeEspecialidadesDetails(params.data.id);
}

document.addEventListener('DOMContentLoaded', () => {
    const gridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(gridDiv, gripOptions);

    const gridDestination = document.querySelector('#especGrid');
    new agGrid.Grid(gridDestination, especGridOptions);

});
