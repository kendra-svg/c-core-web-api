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

const sedeGridOptions = {
    columnDefs: columnDefinition,
    rowData: [],
    rowSelection: 'single',

    defaultColDef: { sortable: true, filter: true },

    onRowDoubleClicked: params => {
        ProcessDoubleClick(params);
    }


}

const userColumnDefinition = [
    { field: "id", headerName: "ID Usuario" },
    { field: "identificacion", headerName: "Cédula"},
    { field: "nombre", headerName: "Nombre" }, 
    { field: "apellidos", headerName: "Apellidos" },
    { field: "correo", headerName: "Correo" },
    { field: "rol", headerName: "Rol" }
];


const userGripOptions = {
    columnDefs: userColumnDefinition,
    rowData: [],
    rowSelection: 'single',

    defaultColDef: { sortable: true, filter: true },

    onRowDoubleClicked: params => {
        ProcessUserDoubleClick(params);
    }

  
}

const especColumnDefinition = [
    { field: "id", headerName: "ID" },
    { field: "nombre", headerName: "Especialidad" },
    { field: "costo", headerName: "Costo" },
    { field: "iva", headerName: "IVA" },
];

const especGridOptions = {
    columnDefs: especColumnDefinition,
    rowData: [],
    rowSelection: 'single',

    defaultColDef: { sortable: true, filter: true },

    onRowDoubleClicked: params => {
        ProcessEpecDoubleClick(params);
    }
   
}

function ProcessUserDoubleClick(params) {
    var view = new ManejaFuncionarios();
    view.GetUsuarioDetails(params.data.id);
    console.log("Get usuario details", params.data.id);
}

function ProcessEpecDoubleClick(params) {
    var view = new ManejaFuncionarios();
    view.GetEspecDetails(params.data.id);
    console.log(params.data.id);
}

function ProcessDoubleClick(params) {
    var view = new ManejaFuncionarios();
    view.GetSedesDetails(params.data.id);
    console.log(params.data.id);
}

document.addEventListener('DOMContentLoaded', function () {
    const gridDiv = document.querySelector('#sedesGrid');
    new agGrid.Grid(gridDiv, sedeGridOptions);

    const especGridDiv = document.querySelector('#especGrid');
    new agGrid.Grid(especGridDiv, especGridOptions);

    const userGridDiv = document.querySelector('#usersGrid');
    new agGrid.Grid(userGridDiv, userGripOptions);
});
