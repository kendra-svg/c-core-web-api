const horariocolumnDef = [
    { field: "id", headerName: "ID Cupo" },
    { field: "fecha", headerName: "Fecha" },
    { field: "hora", headerName: "Hora" },
    { field: "estado", headerName: "Estado" },
    {
        headerName: "Acciones",
        cellRenderer: function (params) {

            const buttonSolicitar = document.createElement("button");
            buttonSolicitar.className = "btn btn-success m-1";
            buttonSolicitar.innerHTML = "Solicitar";
            buttonSolicitar.addEventListener("click", function () {
                handleButtonSolicitar(params.data);
            });

            const wrapper = document.createElement("div");
            wrapper.appendChild(buttonSolicitar);

            return wrapper;
        }
    }
];

const HorarioGridOptions = {
    columnDefs: horariocolumnDef,
    rowData: [],
    rowSelection: 'single',
    defaultColDef: { sortable: true, filter: true },
};

function handleButtonSolicitar(data) {
    //console.log("DIA POR CAMBIAR:", data);
    SubmitCreateCita(data);
}

function SubmitCreateCita(data) {
    var usuarioLoggeado = parseInt(sessionStorage["userId"]);
    var cita = {};
    cita.id = generateUniqueId();
    cita.fechasProgramadas = formatDate(data.fecha);
    //cita.hora = formatTime(data.hora);
    cita.diagnostico = "Ninguno";
    cita.notasMedicas = "Ninguna";
    cita.notasEnfermeria = "Ninguna";
    cita.estado = "Pendiente";
    cita.idUsuario = usuarioLoggeado;

    cargarIdSedeEspecialidad(function (sedeEspecialidadId) {
        cita.idSedeEspecialidad = sedeEspecialidadId;
        
        var api_url = API_URL_BASE + "/api/Citas/CreateCita";

        $.ajax({
            headers: {
                'Accept': "application/json",
                'Content-Type': "application/json"
            },
            method: "POST",
            url: api_url,
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            data: JSON.stringify(cita),
            hasContent: true
        }).done(function (result) {
            Swal.fire({
                title: "Éxito",
                icon: "success",
                text: "Se ha completado el registro de la cita",
            });

        }).fail(function (error) {
            Swal.fire({
                icon: 'error',
                text: "Error al solicitar la cita: " + error,
                title: 'Error',
            });
        });
    });
}


function formatDate(dateString) {
    
    const [day, month, year] = dateString.split('/');
    return `${year}-${('0' + month).slice(-2)}-${('0' + day).slice(-2)}T00:00:00`;
}

function formatTime(timeString) {
    
    const [hours, minutes] = timeString.split(':');
    return `${hours}:${minutes}`;
}


function cargarIdSedeEspecialidad(callback) {
    var doctorId = sessionStorage["idDoctorCita"];
    var sedeId = sessionStorage["idSedeCita"];
    var especialidadId = sessionStorage["idEspecialidadCita"];

    var api_url = API_URL_BASE + "/api/SedeEspec/GetSedeEspecialidadesBySedeIdAndEspecialidadIdAndUserId";

    $.ajax({
        url: api_url + "?id_sede=" + sedeId + "&id_especialidad=" + especialidadId + "&id_usuario=" + doctorId,
        method: "GET",
        contentType: "application/json;charset=utf-8",
        dataType: "json"
    }).done(function (result) {
        //console.log(result);
        var sedeEspecialidadId = result.id;
        callback(sedeEspecialidadId);
    }).fail(function (error) {
        Swal.fire({
            icon: 'error',
            text: "Error al verificar los datos del doctor",
            title: 'Error',
        });
    });
}

generatedIds = [];

function generateUniqueId() {
    let newId;
    do {
        const randomNumber = Math.floor(100000 + Math.random() * 900000);
        newId = parseInt(randomNumber);
    } while (generatedIds.includes(newId));
    generatedIds.push(newId);
    return newId;
}

document.addEventListener('DOMContentLoaded', () => {
    const gridDiv = document.querySelector('#grid-posibles-citas');
    new agGrid.Grid(gridDiv, HorarioGridOptions);
});
