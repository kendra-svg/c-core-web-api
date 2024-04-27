
function CitasList() {
    this.InitView = function () {
        this.GetCitas();
        //this.LoadContextInformation();

        
       
    }

    this.GetCitas = function () {
        api_url = API_URL_BASE + "/api/Citas/GetCitasByUserId";
        $.ajax({
            url: api_url + "?Id=" + sessionStorage["userId"],
            method: "GET",
            contentType: "application/json;charset=utf-8",
            dataType: "json"
        }).done(function (result) {
            if (result) {
                console.log("Estos fueron los datos que recibimos del API", result);
                CitasGridOptions.api.setRowData(result)
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

    

   
}
$(document).ready(function () {
    var view = new CitasList();
    view.InitView();
});