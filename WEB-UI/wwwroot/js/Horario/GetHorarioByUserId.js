
function Horario() {
    this.InitView = function () {
        this.GetHorario();
        //this.LoadContextInformation();

      
    }

    this.GetHorario = function () {
        api_url = API_URL_BASE + "/api/Horario/GetHorarioByUserId";
        $.ajax({
            url: api_url + "?userId=" + sessionStorage["userId"],
            method: "GET",
            contentType: "application/json;charset=utf-8",
            dataType: "json"
        }).done(function (result) {
            if (result) {
                console.log("Estos fueron los datos que recibimos del API", result);
                const processedData = result.map(item => ({
                    id: item.id,
                    fecha: new Date(item.fecha).toLocaleDateString('es-ES'),
                    hora: new Date(item.hora).toLocaleTimeString('es-ES'),
                    estado: item.estado
                }));
                
                HorarioGridOptions.api.setRowData(processedData);
            }

            else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error de Ejecucion',
                    text: 'Hubo un error! ' + result.message
                })
            }
        }).fail(function (error) {
            console.log(error)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Hubo un error al cargar su horari del día de hoy! ' + error
            })
        });
    }

    //this.LoadContextInformation = function () {
    //    $('#txtPatientData').val(sessionStorage["patientData"]);
    //}

   
}


$(document).ready(function () {
    var view = new Horario();
    view.InitView();
});