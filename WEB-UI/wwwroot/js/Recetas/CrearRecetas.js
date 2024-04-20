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

//-------------
function CreateRecipe() {
    this.InitView = function () {
        //cambiar al id de agregar receta, agregarle id al boton de agregar
        $('#createRecipeButton').click(function (event) {
            var view = new CreateRecipe();
           // event.preventDefault();
            view.SubmitCreateRecipe();
        })
    }
    this.SubmitCreateRecipe = function () {
        var rec = {};
        rec.id = generateUniqueId();

        rec.fechaEmision = $('#fechaEmision').val();

        rec.medicamentos = $('#medicamentos').val();
        rec.dosisRecomendada = $('#dosisRecomendada').val();
        //rec.cantidadDias = $('#cantidadDias').val();

        rec.recomendacionAdicional = $('#recomendaciones').val();

        rec.foto = fotoCloudinary.src;


        console.log(rec);
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
        if (rec.recomendacionAdicional === "") {
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
                    var view = new CreateRecipe();
                    view.LimpiarFormulario();
                }
            )
        
        }).fail(function (error) {
            Swal.fire({
                icon: 'error',
                text: "Error al registrar receta" + error,
                title: 'Error',

            });
        });
    }


    this.LimpiarFormulario = function () {

        $('#fechaEmision').val('');

        $('#medicamentos').val('');
        $('#dosisRecomendada').val('');
        $('#cantidadDias').val('');
        $('#recomendaciones').val('');
        $('#input-foto').val('');
        fotoCloudinary.src = '';
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