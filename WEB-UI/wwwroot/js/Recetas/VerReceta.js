$(document).ready(function () {

    const fotoCloudinary = document.querySelector('#fotoRec');

    // Inicializar el widget de Cloudinary
    let widget_cloudinary = cloudinary.createUploadWidget({
        cloudName: 'dzwwoyc7x',
        uploadPreset: 'preset.Ken'
    }, (err, result) => {
        if (!err && result && result.event === 'success') {
            console.log('Imagen subida con éxito', result.info);
            fotoCloudinary.src = result.info.secure_url;
        }
    });

    $('#botonFoto').click(function () {
        widget_cloudinary.open();
    });

    // Función para obtener y mostrar detalles de la receta
    function MostrarReceta(idReceta) {
        var api_url = API_URL_BASE + "/api/Recetas/GetRecetaById";

        $.ajax({
            method: "GET",
            url: api_url + "?idReceta=" + idReceta,
            success: function (data) {
                $('#fechaEmision').val(data.FechaEmision);
                $('#nombreMedicamento').val(data.NombreMedicamento);
                $('#dosisRecomendada').val(data.DosisRecomendada);
                $('#recomendaciones').val(data.RecomendacionAdicional);
                $('#fotoRec').attr('src', data.Foto);

                // Deshabilitar los campos de entrada
                $('#fechaEmision').prop('disabled', true);
                $('#nombreMedicamento').prop('disabled', true);
                $('#dosisRecomendada').prop('disabled', true);
                $('#recomendaciones').prop('disabled', true);
                $('#botonFoto').hide(); // Ocultar el botón de subir foto
            },
            error: function (xhr, status, error) {
                console.error("Error al obtener la receta:", error);
            }
        });
    }

    // Llama a MostrarReceta con el ID de la receta deseada
    var idReceta = OBTENER_ID_DE_LA_RECETA;
    MostrarReceta(idReceta);

});
