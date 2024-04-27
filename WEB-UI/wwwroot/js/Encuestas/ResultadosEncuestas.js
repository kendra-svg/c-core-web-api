function EncuestaList() {

    this.InitView = function () {
        this.ListaEncuesta();
    }
    this.ListaEncuesta = function () {
        $.ajax({
            //change
            //url: "https://localhost:7154/api/Encuestas/GetAllEncuestasA",
            url: "https://apisimepci.azurewebsites.net/api/Sedes/GetAllSedesA",
            method: "GET",
            contentType: "application/json;charset=utf-8",
            dataType: "json"
        }).done(function (result) {
            if (result.result == "OK") {
                console.log("Estos fueron", result);
                gripOptions.api.setRowData(result.data);
                calcularPromedio(result.data);
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

    function calcularPromedio(encuestas) {
        var totalVotos = encuestas.length;

        var sumas = {
            muyMalo: 0,
            malo: 0,
            regular: 0,
            bueno: 0,
            muyBueno: 0
        };

        for (var i = 0; i < totalVotos; i++) {
            // Verificar que los valores sean numéricos antes de sumarlos
            if (!isNaN(parseInt(encuestas[i]["interesGenuino"]))) {
                sumas.muyMalo += parseInt(encuestas[i]["interesGenuino"]);
            }
            if (!isNaN(parseInt(encuestas[i]["experiencia"]))) {
                sumas.malo += parseInt(encuestas[i]["experiencia"]);
            }
            if (!isNaN(parseInt(encuestas[i]["amabilidadCortesia"]))) {
                sumas.regular += parseInt(encuestas[i]["amabilidadCortesia"]);
            }
            // Asegurar que las propiedades existan antes de acceder a ellas
            if (!isNaN(parseInt(encuestas[i]["otroCampo"]))) {
                sumas.bueno += parseInt(encuestas[i]["otroCampo"]);
            }
            if (!isNaN(parseInt(encuestas[i]["otroCampo2"]))) {
                sumas.muyBueno += parseInt(encuestas[i]["otroCampo2"]);
            }
        }

        // Calcular promedio
        var promedio = {
            muyMalo: sumas.muyMalo / totalVotos,
            malo: sumas.malo / totalVotos,
            regular: sumas.regular / totalVotos,
            bueno: sumas.bueno / totalVotos,
            muyBueno: sumas.muyBueno / totalVotos
        };

        $("#promedioInteres").text("Promedio de Interés Genuino para Muy Bueno: " + promedio.muyMalo.toFixed(2));
        $("#promedioExperiencia").text("Promedio de Experiencia para Muy Bueno: " + promedio.malo.toFixed(2));
        $("#promedioAmabilidad").text("Promedio de Amabilidad y Cortesía para Muy Bueno: " + promedio.regular.toFixed(2));
    }


    this.GetEncuestaDetails = function () {
        $.ajax({
           // url: "https://localhost:7154/api/Encuestas/GetAllEncuestasA",
            url: "https://apisimepci.azurewebsites.net" + "/api/Encuestas/GetAllEncuestasById?id=" + id,
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
                    title: "Hubo un problema al cargar las Encuestas",
                    text: "Hubo un problema al cargar las Encuestas " + result.message
                });
            }
        }).fail(function (error) {
            console.log("El error" + error.data);
            Swal.fire({
                icon: "error",
                title: "Error al cargar las encuestas",
                text: "Hubo un error" + error.message
            });

        });
    }

}


$(document).ready(function () {
    var view = new EncuestaList();
    view.InitView();
});