//const columnDefinition = [
//    { field: "nombrePaciente", headerName: "Nombre del Paciente" },
//    { field: "fecha", headerName: "Fecha" },
//    { field: "hora", headerName: "Hora" },
//    { field: "sede", headerName: "Sede" },
//    { field: "especialidad", headerName: "Especialidad" },
//    { field: "profesional", headerName: "Profesional" },
//    { field: "precio", headerName: "Precio" },
//    {
//        headerName: "Acciones",
//        cellRenderer: function (params) {
           
//            const buttonPagar = document.createElement("button");
//            const buttonCancelar = document.createElement("button");


//            buttonPagar.className="btn btn-success m-1"
//            buttonPagar.innerHTML = "Pagar";
//            buttonPagar.addEventListener("click", function () {
                
//                handleButtonPagar(params.data);
//            });

            
//            buttonCancelar.className = "btn btn-danger m-1"
//            buttonCancelar.innerHTML = "Cancelar";
//            buttonCancelar.addEventListener("click", function () {

//                handleButtonCancelar(params.data);
//            });

//            const wrapper = document.createElement("div");
//            wrapper.appendChild(buttonPagar);
//            wrapper.appendChild(buttonCancelar);

//            return wrapper;



           
//        }
//    }
//];





//const gripOptions = {
//    columnDefs: columnDefinition,
//    //DATOS QUEMADOS PARA EL WIRERFRAME
//    rowData: [
//        { nombrePaciente: "John Doe", fecha: "13/4/2024", hora: "21:09", sede: "Heredia", especialidad: "Medicina General", profesional: "Dr. Gabriel", precio: "23.500" },
//    ],
//    rowSelection: 'single',

//    //defaults
//    defaultColDef: { sortable: true, filter: true },

//    //Eventos
//    onRowDoubleClicked: params => {
//        ProcessDoubleClick(params);
//    }
//}


//function handleButtonPagar(data){
//    console.log("Pagar cita con dr/dra:", data.profesional);

//}

//function handleButtonCancelar(data) {
//    console.log("Cancelar cita con dr/dra:", data.profesional);

//}



//document.addEventListener('DOMContentLoaded', () => {
//    const gridDiv = document.querySelector('#gridCitasPersonales');
//    new agGrid.Grid(gridDiv, gripOptions);
//});

