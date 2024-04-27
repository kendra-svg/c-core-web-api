function CreateSurvey() {
    this.InitView = function () {
        // Cambiar al id de agregar encuesta, agregarle id al boton de agregar
        $('#CreateSurvey').click(function (event) {
            var view = new CreateSurvey();
            // event.preventDefault();
            view.SubmitCreateSurvey();
        });
    };

    this.SubmitCreateSurvey = function () {
        var enc = {};
        enc.id = generateUniqueId();

        // Del HTML
        enc.InteresGenuino = $('#InteresGenuino').val();
        enc.Experiencia = $('#Experiencia').val();
        enc.AmabilidadCortesia = $('#AmabilidadCortesia').val();
        enc.ComentariosAdicionales = $('#ComentariosAdicionales').val();

        console.log(enc);

        if (enc.InteresGenuino === "" || enc.Experiencia === "" || enc.AmabilidadCortesia === "") {
            Swal.fire({
                icon: 'error',
                text: "Por favor seleccione una opcion.",
                title: 'Error'
            });
            return;
        }

        // Conexión con la API
        var api_url = API_URL_BASE + "/api/Encuestas/CreateEncuesta";

        $.ajax({
            headers: {
                'Accept': "application/json",
                'Content-Type': "application/json"
            },
            method: "POST",
            url: api_url,
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            data: JSON.stringify(enc),
            hasContent: true
        }).done(function (result) {
            Swal.fire({
                title: "Éxito",
                icon: "info",
                text: "Se ha completado la encuesta",
            }).then(
                function () {
                    var view = new CreateSurvey();
                    view.LimpiarFormulario();
                }
            )

        }).fail(function (error) {
            Swal.fire({
                icon: 'error',
                text: "Error al completar encuesta",
                title: 'Error'
            });
        });
    };

    this.LimpiarFormulario = function () {
        $('#InteresGenuino').val('');
        $('#Experiencia').val('');
        $('#AmabilidadCortesia').val('');
        $('#ComentariosAdicionales').val('');
    };
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
};

$(document).ready(function () {
    var view = new CreateSurvey();
    view.InitView();
});
