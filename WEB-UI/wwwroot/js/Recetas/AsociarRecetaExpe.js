var idReceta = null;
var idExpediente = null;
var infoReceta = [];
var infoExpediente = [];
var idREcExp = null;

function Configure() {
    this.InitView = function () {
        this.PopulateReceta();
        this.PopulateExpediente();
        $('#btn-update').click(function () {
            var view = new Configure();
            view.insertexperec();
        });
        
    }

    this.PopulateReceta = function () {
        $.ajax({
            // url: apiUrl,
            url: "https://apisimepci.azurewebsites.net/api/Recetas/GetRecetas",
            method: "GET",
            contentType: "application/json;charset=utf-8",
            dataType: "json"
        }).done(function (data) {
            infoReceta = data

            var select = $('#ddlrecetas');
            select.find('option').remove();

            for (var row in data) {
                select.append('<option value=' + data[row].id + '>' + data[row].nombreMedicamento + '</option>')
                console.log(data[row]);
            }
            select.on('change', function () {
                let id = $(this).val();
                idReceta = id;
            });

        }).fail(function (error) {
            Swal.fire({
                title: "Error",
                icon: "error",
                text: "Error al cargar las recetas" + error,
                timer: 2000
            });
        });
        console.log(idReceta);
    }
    this.PopulateExpediente = function () {
        $.ajax({
            // url: apiUrl,
            url: "https://apisimepci.azurewebsites.net" + "/api/Expedientes/GetExpedientes",
            method: "GET",
            contentType: "application/json;charset=utf-8",
            dataType: "json"
        }).done(function (data) {
            infoExpediente = data
            

            var select = $('#ddlexpediente');
            select.find('option').remove();

            for (var row in data) {
                select.append('<option value=' + data[row].id + '>' + data[row].usuario[0].nombre + '</option>')
                console.log(data[row]);
            }
            select.on('change', function () {
                let id = $(this).val();
                idExpediente = id;
                
            });

        }).fail(function (error) {
            Swal.fire({
                title: "Error",
                icon: "error",
                text: "Error al cargar las sedes" + error,
                timer: 2000
            });
        });
        console.log(idExpediente);
    }
    this.insertexperec = function () {

        var exrec = {};

        exrec.id = generateUniqueId();
        exrec.idExpediente = idExpediente;
        exrec.idReceta = idReceta;
        console.log(exrec);
        $.ajax({
            headers: {
                'Accept': "application/json",
                'Content-Type': "application/json"
            },
            method: "POST",
            url: "https://apisimepci.azurewebsites.net"+"/api/ExpedienteReceta/CreateExpedienteReceta",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            data: JSON.stringify(exrec),
            hasContent: true
        }).done(function (result) {
            Swal.fire({
                title: "Éxito",
                icon: "info",
                text: "Se ha completado la asignacion",
            }).then(
                function () {
                    var view = new Configure();
                    view.LimpiarFormulario();
                }
            )
        }).fail(function (error) {
            Swal.fire({
                icon: 'error',
                text: "Error al asignar",
                title: 'Error',
            })
        });

    }
}

generatedIds = [];

generateUniqueId = () => {
    let newId;
    do {
        const randomNumber = Math.floor(100000 + Math.random() * 900000);
        newId = parseInt(randomNumber);
    } while (generatedIds.includes(newId));
    generatedIds.push(newId);
    return newId;
}

$(document).ready(function () {
    var view = new Configure();
    view.InitView();
});
