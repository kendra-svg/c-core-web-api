//-----------------para subir la foto
const buttonElement = document.querySelector('#botonFoto');

const fotoCloudinary = document.querySelector('#fotoRec');

let widget_cloudinary = cloudinary.createUploadWidget({
    cloudName: 'dzwwoyc7x',
    uploadPreset: 'preset.Ken'
}, (err, result) => {
    if (!err && result && result.event === 'success') {
        console.log('Imagen subida con éxito', result.info);
        fotoCloudinary.src = result.info.secure_url;
    }
});

botonFoto.addEventListener('click', () => {
    widget_cloudinary.open();
}, false);

//------------------------------------
function CreateRecipe() {
    this.InitView = function () {
        //cambiar al id de agregar receta, agregarle id al boton de agregar
        $('#createRecipeButton').click(function (event) {
            var view = new CreateRecipe();
            view.SubmitCreateRecipe();
        })
    }
    this.SubmitCreateRecipe = function () {
        var rec = {};
        rec.id = generateUniqueId();

         //cambiar por atributos de recetas de dto          lo rojo son los ids de los campos
        //rec.nombreMedico = $('nombreMedico').val();
        //rec.clinica = $('clinica').val();
        // rec.consultorio = $('consultorio').val();

        rec.fechaEmision = $('#fechaEmision').val();

        rec.medicamentos = $('#medicamentos').val();
        rec.dosisRecomendada = $('#dosisRecomendada').val();
        rec.cantidadDias = $('#cantidadDias').val();

        rec.recomendaciones = $('#recomendaciones').val();

        rec.foto = fotoCloudinary.src;

        //cambiar por atributos de recetas. son validaciones de campos
        //cambiar por atributos de recetas de dto

        console.log(rec);
        /*if (rec.nombreMedico === "") {
            Swal.fire({
                icon: 'error',
                text: "Por agregue su comentario.",
                title: 'Error'
            });
            return;
        }
        if (rec.clinica === "") {
            Swal.fire({
                icon: 'error',
                text: "Por favor seleccione una foto.",
                title: 'Error'
            });
            return;
        }
        if (rec.consultorio === "") {
            Swal.fire({
                icon: 'error',
                text: "Por favor seleccione una foto.",
                title: 'Error'
            });
            return;
        }*/


        if (rec.fechaEmision === "") {
            Swal.fire({
                icon: 'error',
                text: "Por favor seleccione una foto.",
                title: 'Error'
            });
            return;
        }
        if (rec.dosisRecomendada === "") {
            Swal.fire({
                icon: 'error',
                text: "Por favor seleccione una foto.",
                title: 'Error'
            });
            return;
        }
        if (rec.cantidadDias === "") {
            Swal.fire({
                icon: 'error',
                text: "Por favor seleccione una foto.",
                title: 'Error'
            });
            return;
        }
        if (rec.recomendaciones === "") {
            Swal.fire({
                icon: 'error',
                text: "Por favor seleccione una foto.",
                title: 'Error'
            });
            return;
        }


        if (rec.foto === "") {
            Swal.fire({
                icon: 'error',
                text: "Por favor seleccione una foto.",
                title: 'Error'
            });
            return;
        }

        //conexion con api
        var api_url = API_URL_BASE + "/api/Recetas/CreateReceta";

        $.ajax({
            headers: {
                'Accept': "application/json",
                'Content-Type': "application/json"
            },
            method: "POST",
            url: api_url,
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            data: JSON.stringify(rec),
            hasContent: true
        }).done(function (result) {
            Swal.fire({
                title: "Éxito",
                icon: "info",
                text: "Se ha completado el registro de la receta",
            }).then(
                function () {
                    var view = new CreateRecipe()
                    view.LimpiarFormulario();
                }
            )
        }).fail(function (error) {
            Swal.fire({
                icon: 'error',
                text: "Error al registrar receta" + error,
                title: 'Error',

            })
        });
    }


    this.LimpiarFormulario = function () {
        //los inputs del principio, cambiar por los de receta, genera un id random
        //$('nombrePaciente').val("");
        //$('identificacionPaciente').val("");
        //$('nombreMedico').val("");

        //$('clinica').val('');
        //$('consultorio').val('');

        $('#fechaEmision').val('');

        $('#medicamentos').val('');
        $('#dosisRecomendada').val('');
        $('#cantidadDias').val('');

        $('#recomendaciones').val('');

        $('#input-foto').val('');
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
    var view = new CreateRecipe();
    view.InitView();
});