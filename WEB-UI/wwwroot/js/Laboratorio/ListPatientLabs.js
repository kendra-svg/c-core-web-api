
function LabsList() {
    this.InitView = function () {
        this.GetLabs();
        //this.LoadContextInformation();

        $('#btnCreate').click(function () {
            var view = new LabsList();
            view.RedirectCreateLab ();
        });
    }

    this.GetLabs = function () {
        api_url = API_URL_BASE + "/api/Laboratorios/GetLabsByUserId";
        $.ajax({
            url: api_url + "?Id=" + sessionStorage["userId"],
            method: "GET",
            contentType: "application/json;charset=utf-8",
            dataType: "json"
        }).done(function (result) {
            if (result) {
                console.log("Estos fueron los datos que recibimos del API", result);
                LaboratorioGridOptions.api.setRowData(result)
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
                text: 'Hubo un error al cargar sus examenes! ' + error
            })
        });
    }

    //this.LoadContextInformation = function () {
    //    $('#txtPatientData').val(sessionStorage["patientData"]);
    //}

    this.RedirectCreateLab = function () {
        window.location = "/Paciente/CrearExamen";
    }
}
$(document).ready(function () {
    var view = new LabsList();
    view.InitView();
});