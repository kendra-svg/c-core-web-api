//function ShowSurveyResults(idEncuesta) {
//    // Obtener detalles de la encuesta por su ID
//    $.ajax({
//        url: API_URL_BASE + "/api/Encuestas/GetEncuestasById/" + idEncuesta,
//        type: "GET",
//        success: function (encuesta) {
//            // Mostrar los detalles de la encuesta
//            $("#encuesta-details").html(`
//                <p>Interes Genuino: ${encuesta.InteresGenuino}</p>
//                <p>Experiencia: ${encuesta.Experiencia}</p>
//                <p>Amabilidad/Cortesía: ${encuesta.AmabilidadCortesia}</p>
//                <p>Comentarios Adicionales: ${encuesta.ComentariosAdicionales}</p>
//            `);
//        },
//        error: function (jqXHR, textStatus, errorThrown) {
//            console.log("Error al obtener detalles de la encuesta:", errorThrown);
//        }
//    });

//    // Obtener y mostrar el promedio general de servicio
//    $.ajax({
//        url: API_URL_BASE + "/api/Encuestas/PromedioServicio",
//        type: "GET",
//        success: function (promedio) {
//            $("#promedio-servicio").text(`Promedio de Servicio: ${promedio}`);
//        },
//        error: function (jqXHR, textStatus, errorThrown) {
//            console.log("Error al obtener el promedio de servicio:", errorThrown);
//        }
//    });
//}

//$(document).ready(function () {
//    // Mostrar los resultados de la encuesta y el promedio general de servicio
//    var idEncuesta = ObtenerParametroURL("idEncuesta");
//    ShowSurveyResults(idEncuesta);

//    // Función para obtener parámetro de la URL
//    function ObtenerParametroURL(nombreParametro) {
//        var urlParams = new URLSearchParams(window.location.search);
//        return urlParams.get(nombreParametro);
//    }
//});
function EncuestaList() {

    this.InitView = function () {
        this.ListaEncuesta();
    }
    this.ListaEncuesta = function () {
        $.ajax({
            //change
            url: "https://localhost:7154/api/Encuestas/GetAllEncuestasA",
            //url: "https://apisimepci.azurewebsites.net/api/Sedes/GetAllSedesA",
            method: "GET",
            contentType: "application/json;charset=utf-8",
            dataType: "json"
        }).done(function (result) {
            if (result.result == "OK") {
                console.log("Estos fueron", result);
                gripOptions.api.setRowData(result.data);
            }
            else {
                Swal.fire({
                    icon: "error",
                    title: "Hubo un problema al cargar las encuestas",
                    text: "Hubo un problema al cargar las encuestas " + result.message
                });
            }
        }).fail(function (error) {
            console.log("El error" + error.data);
            Swal.fire({
                icon: "error",
                title: "Error al cargar las Sedes",
                text: "Hubo un error" + error.message
            });

        });
    }
    this.GetEncuestaDetails = function () {
        $.ajax({
            url:"https://localhost:7154/api/Encuestas/GetAllEncuestasA",
            //url: "https://apisimepci.azurewebsites.net" + "/api/Encuestas/GetAllEncuestasById?id=" + id,
            method: "GET",
            contentType: "application/json;charset=utf-8",
            dataType: "json"
        }).done(function (result) {
            if (result.result == "OK") {
                console.log("Estos fueron", result);
                gripOptions.api.setRowData(result.data);
            }
            else {
                Swal.fire({
                    icon: "error",
                    title: "Hubo un problema al cargar las Sedes",
                    text: "Hubo un problema al cargar las Sedes " + result.message
                });
            }
        }).fail(function (error) {
            console.log("El error" + error.data);
            Swal.fire({
                icon: "error",
                title: "Error al cargar las Sedes",
                text: "Hubo un error" + error.message
            });

        });
    }
    
}

$(document).ready(function () {
    var view = new EncuestaList();
    view.InitView();
});
