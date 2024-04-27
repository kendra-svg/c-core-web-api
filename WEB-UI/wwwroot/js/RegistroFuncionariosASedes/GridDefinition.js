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
        headerName: "Editar",
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

const userColumnDefinition = [
    { field: "id", headerName: "ID Usuario" },
    { field: "nombreCompleto", headerName: "Nombre completo" },
    { field: "especialidad", headerName: "ID Especialidad" },
    /*{ field: "identificacion", headerName: "Cédula" },*/
    //{ field: "nombre", headerName: "Nombre" },
    //{ field: "apellidos", headerName: "Apellidos" },
    { field: "correo", headerName: "Correo" },
    { field: "rol", headerName: "Rol" },
    /*{ field: "sexo", headerName: "Sexo" },*/


    {
        headerName: "Editar",
        cellRenderer: function (params) {

            const button = document.createElement("button");

            button.className = "btn btn-success m-1";
            button.innerHTML = "Editar";

            button.addEventListener("click", function () {
                handleButtonEditarUsuario(params.data);
            });

            const wrapper = document.createElement("div");
            wrapper.appendChild(button);

            return wrapper;
        }
    },


    {
        headerName: "Remover",
        cellRenderer: function (params) {

            const button = document.createElement("button");

            button.className = "btn btn-danger m-1";
            button.innerHTML = "Remover";

            button.addEventListener("click", function () {
                handleButtonEliminarUsuario(params.data);
            });

            const wrapper = document.createElement("div");
            wrapper.appendChild(button);

            return wrapper;
        }
    }

    
];

function handleButtonEliminarUsuario(data) {

    const idUsuarioEliminarInput = document.getElementById('IdUsuario');
    const nombreUsuarioEliminarInput = document.getElementById('NombreUsuarioEliminar');
    const idUsuarioEspecialidadEliminarInput = document.getElementById('IdUsuarioEspecialidadEliminar');
    const correoUsuarioEliminarInput = document.getElementById('CorreoUsuarioEliminar');
    const rolUsuarioEliminarInput = document.getElementById('RolUsuarioEliminar');

    const idUsuarioLabel = document.querySelector('label[for="IdUsuarioLabel"]');
    const nombreUsuarioLabel = document.querySelector('label[for="NombreUsuarioEliminarLabel"]');
    const idUsuarioEspecialidadLabel = document.querySelector('label[for="IdUsuarioEspecialidadEliminarLabel"]');
    const correoUsuarioLabel = document.querySelector('label[for="CorreoUsuarioEliminarLabel"]');
    const rolUsuarioLabel = document.querySelector('label[for="RolUsuarioEliminarLabel"]');


    document.getElementById('eliminarUsuarioBtn').style.display = 'block';

    idUsuarioEliminarInput.style.display = 'block';
    nombreUsuarioEliminarInput.style.display = 'block'; 
    idUsuarioEspecialidadEliminarInput.style.display = 'block';
    correoUsuarioEliminarInput.style.display = 'block';
    rolUsuarioEliminarInput.style.display = 'block';

    idUsuarioLabel.style.display = 'block';
    nombreUsuarioLabel.style.display = 'block';
    idUsuarioEspecialidadLabel.style.display = 'block';
    correoUsuarioLabel.style.display = 'block';
    rolUsuarioLabel.style.display = 'block';

    idUsuarioEliminarInput.value = data.id;
    nombreUsuarioEliminarInput.value = data.nombreCompleto;
    idUsuarioEspecialidadEliminarInput.value = data.especialidad;
    correoUsuarioEliminarInput.value = data.correo;
    rolUsuarioEliminarInput.value = data.rol;

    }



function handleButtonEliminar(data) {


    hideEditFields();

    const idInput = document.getElementById('IdEspecialidadEliminar');
    const nombreInput = document.getElementById('NombreEspecialidadEliminar');
    const costoInput = document.getElementById('CostoEspecialidadEliminar');
    const ivaInput = document.getElementById('IvaEspecialidadEliminar');
    const idLabel = document.querySelector('label[for="IdEspecialidadEliminarLabel"]');
    const nombreLabel = document.querySelector('label[for="NombreEspecialidadEliminarLabel"]');
    const costoLabel = document.querySelector('label[for="CostoEspecialidadEliminarLabel"]');
    const ivaLabel = document.querySelector('label[for="IvaEspecialidadEliminarLabel"]');


    document.getElementById('eliminarEspecialidadBtn').style.display = 'block';


    // Mostrar los inputs y labels
    idInput.style.display = 'block';
    nombreInput.style.display = 'block';
    costoInput.style.display = 'block';
    ivaInput.style.display = 'block';
    idLabel.style.display = 'block';
    nombreLabel.style.display = 'block';
    costoLabel.style.display = 'block';
    ivaLabel.style.display = 'block';

    // Asignar los valores correspondientes a los inputs
    idInput.value = data.id;  
    nombreInput.value = data.nombre;
    costoInput.value = data.costo;
    ivaInput.value = data.iva;


}

function handleButtonEditarUsuario(data) {
    hideDeleteFieldsUsuario();

    window.location = '/Administrador/VerUsuarios';
}


function handleButtonEditar(data) {

    /*Turning point*/

    hideDeleteFields();
   
    const idInput = document.getElementById('IdEspecialidad');
    const nombreInput = document.getElementById('NombreEspecialidad');
    const costoInput = document.getElementById('CostoEspecialidad');
    const ivaInput = document.getElementById('IvaEspecialidad');
    const idLabel = document.querySelector('label[for="IdEspecialidadLabel"]');
    const nombreLabel = document.querySelector('label[for="NombreEspecialidadLabel"]');
    const costoLabel = document.querySelector('label[for="CostoEspecialidadLabel"]');
    const ivaLabel = document.querySelector('label[for="IvaEspecialidadLabel"]');

    document.getElementById('agregarEspecialidadBtn').style.display = 'block';

    // Mostrar los inputs y labels
    idInput.style.display = 'block';
    nombreInput.style.display = 'block';
    costoInput.style.display = 'block';
    ivaInput.style.display = 'block';
    idLabel.style.display = 'block';
    nombreLabel.style.display = 'block';
    costoLabel.style.display = 'block';
    ivaLabel.style.display = 'block';

    // Asignar los valores correspondientes a los inputs
    idInput.value = data.id;
    nombreInput.value = data.nombre;
    costoInput.value = data.costo;
    ivaInput.value = data.iva;
}


    
const userGridOptions = {
    columnDefs: userColumnDefinition,
    rowData: [],
    rowSelection: 'single',

    defaultColDef: { sortable: true, filter: true },

    localeText: {
        noRowsToShow: 'Si no se muestra el usuario, debe seleccionar una sede. Si ya seleccionó una sede y aún no se muestran usuarios, eso significa que no hay usuarios registrados a dicha sede.' // Personaliza el mensaje aquí
    },
}




const especGridOptions = {
    columnDefs: especColumnDefinition,
    rowData: [],
    rowSelection: 'single',

    defaultColDef: { sortable: true, filter: true },

    localeText: {
        noRowsToShow: 'Si no se muestra la especialidad, debe seleccionar una sede. Si ya seleccionó una sede y aún no se muestran especialidades, eso significa que no hay especialidades registradas a dicha sede.' // Personaliza el mensaje aquí
    },


   

}

function ProcessDoubleClick(params) {

    const idInput = document.getElementById('IdEspecialidad');
    const nombreInput = document.getElementById('NombreEspecialidad');
    const costoInput = document.getElementById('CostoEspecialidad');
    const ivaInput = document.getElementById('IvaEspecialidad');
    const idLabel = document.querySelector('label[for="IdEspecialidadLabel"]');
    const nombreLabel = document.querySelector('label[for="NombreEspecialidadLabel"]');
    const costoLabel = document.querySelector('label[for="CostoEspecialidadLabel"]');
    const ivaLabel = document.querySelector('label[for="IvaEspecialidadLabel"]');
    const idInputEliminar = document.getElementById('IdEspecialidadEliminar');
    const nombreInputEliminar = document.getElementById('NombreEspecialidadEliminar');
    const costoInputEliminar = document.getElementById('CostoEspecialidadEliminar');
    const ivaInputEliminar = document.getElementById('IvaEspecialidadEliminar');
    const idLabelEliminar = document.querySelector('label[for="IdEspecialidadEliminarLabel"]');
    const nombreLabelEliminar = document.querySelector('label[for="NombreEspecialidadEliminarLabel"]');
    const costoLabelEliminar = document.querySelector('label[for="CostoEspecialidadEliminarLabel"]');
    const ivaLabelEliminar = document.querySelector('label[for="IvaEspecialidadEliminarLabel"]');

    const idUsuarioEliminarInput = document.getElementById('IdUsuario');
    const nombreUsuarioEliminarInput = document.getElementById('NombreUsuarioEliminar');
    const idUsuarioEspecialidadEliminarInput = document.getElementById('IdUsuarioEspecialidadEliminar');
    const correoUsuarioEliminarInput = document.getElementById('CorreoUsuarioEliminar');
    const rolUsuarioEliminarInput = document.getElementById('RolUsuarioEliminar');

    const idUsuarioLabel = document.querySelector('label[for="IdUsuarioLabel"]');
    const nombreUsuarioLabel = document.querySelector('label[for="NombreUsuarioEliminarLabel"]');
    const idUsuarioEspecialidadLabel = document.querySelector('label[for="IdUsuarioEspecialidadEliminarLabel"]');
    const correoUsuarioLabel = document.querySelector('label[for="CorreoUsuarioEliminarLabel"]');
    const rolUsuarioLabel = document.querySelector('label[for="RolUsuarioEliminarLabel"]');
    


    idInput.value = "";
    nombreInput.value = "";
    costoInput.value = "";
    ivaInput.value = "";
    idInputEliminar.value = "";
    nombreInputEliminar.value = "";
    costoInputEliminar.value = "";
    ivaInputEliminar.value = "";
    idUsuarioEliminarInput.value = "";
    nombreUsuarioEliminarInput.value = "";
    idUsuarioEspecialidadEliminarInput.value = "";
    correoUsuarioEliminarInput.value = "";
    rolUsuarioEliminarInput.value = "";
   
    

    idInput.style.display = 'none';
    nombreInput.style.display = 'none';
    costoInput.style.display = 'none';
    ivaInput.style.display = 'none';
    nombreLabel.style.display = 'none';
    costoLabel.style.display = 'none';
    ivaLabel.style.display = 'none';
    idLabel.style.display = 'none';
    idUsuarioLabel.style.display = 'none';
    nombreUsuarioLabel.style.display = 'none';
    idUsuarioEspecialidadLabel.style.display = 'none';
    correoUsuarioLabel.style.display = 'none';
    rolUsuarioLabel.style.display = 'none';


    idInputEliminar.style.display = 'none';
    nombreInputEliminar.style.display = 'none';
    costoInputEliminar.style.display = 'none';
    ivaInputEliminar.style.display = 'none';
    nombreLabelEliminar.style.display = 'none';
    costoLabelEliminar.style.display = 'none';
    ivaLabelEliminar.style.display = 'none';
    idLabelEliminar.style.display = 'none';
    idUsuarioEliminarInput.style.display = 'none';
    nombreUsuarioEliminarInput.style.display = 'none';
    idUsuarioEspecialidadEliminarInput.style.display = 'none';
    correoUsuarioEliminarInput.style.display = 'none';
    rolUsuarioEliminarInput.style.display = 'none';
   



    document.getElementById('agregarEspecialidadBtn').style.display = 'none';
    document.getElementById('eliminarEspecialidadBtn').style.display = 'none';
    document.getElementById('eliminarUsuarioBtn').style.display = 'none';
   

    var view = new RegistroFuncionarios();
    view.GetSedeEspecialidadesDetails(params.data.id);
    view.GetSedeUsuariosDetails(params.data.id);
}

function hideEditFields() {
    document.getElementById('agregarEspecialidadBtn').style.display = 'none';
    document.querySelectorAll('#IdEspecialidad, #NombreEspecialidad, #CostoEspecialidad, #IvaEspecialidad, label[for="IdEspecialidadLabel"], label[for="NombreEspecialidadLabel"], label[for="CostoEspecialidadLabel"], label[for="IvaEspecialidadLabel"]').forEach(el => {
        el.style.display = 'none';
    });
}

//function hideEditFieldsUsuario() {
//    document.getElementById('agregarUsuarioBtn').style.display = 'none';
//    document.querySelectorAll('#IdUsuario, #NombreUsuario, #IdUsuarioEspecialidad, #CorreoUsuario, #RolUsuario, label[for="IdUsuarioLabel"], label[for="NombreUsuarioLabel"], label[for="IdUsuarioEspecialidadLabel"], label[for="CorreoUsuarioLabel"], label[for="RolUsuarioLabel"]').forEach(el => {
//        el.style.display = 'none';
//    });
//}

function hideDeleteFieldsUsuario() {
    document.getElementById('eliminarUsuarioBtn').style.display = 'none';
    document.querySelectorAll('#IdUsuario, #NombreUsuario, #IdUsuarioEspecialidad, #CorreoUsuario, #RolUsuario, label[for="IdUsuarioLabel"], label[for="NombreUsuarioLabel"], label[for="IdUsuarioEspecialidadLabel"], label[for="CorreoUsuarioLabel"], label[for="RolUsuarioLabel"]').forEach(el => {
        el.style.display = 'none';
    });
}

// Función para ocultar los campos de eliminación
function hideDeleteFields() {
    document.getElementById('eliminarEspecialidadBtn').style.display = 'none';
    document.querySelectorAll('#IdEspecialidadEliminar, #NombreEspecialidadEliminar, #CostoEspecialidadEliminar, #IvaEspecialidadEliminar, label[for="IdEspecialidadEliminarLabel"], label[for="NombreEspecialidadEliminarLabel"], label[for="CostoEspecialidadEliminarLabel"], label[for="IvaEspecialidadEliminarLabel"]').forEach(el => {
        el.style.display = 'none';
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const gridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(gridDiv, gripOptions);

    const gridDestination = document.querySelector('#especGrid');
    new agGrid.Grid(gridDestination, especGridOptions);

    const gridUser = document.querySelector('#userGrid');
    new agGrid.Grid(gridUser, userGridOptions);



});
