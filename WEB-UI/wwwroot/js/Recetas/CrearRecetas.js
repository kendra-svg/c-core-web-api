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

        rec.FechaEmision = $('#FechaEmision').val();
        rec.NombreMedicamento = $('#NombreMedicamento').val();
        rec.DosisRecomendada = $('#DosisRecomendada').val();
        rec.RecomendacionAdicional = $('#RecomendacionAdicional').val();
        rec.foto = fotoCloudinary.src;
        //rec.cantidadDias = $('#cantidadDias').val();

        console.log(rec);
        if (rec.FechaEmision === "") {
            Swal.fire({
                icon: 'error',
                text: "Por favor seleccione una fecha de registro.",
                title: 'Error'
            });
            return;
        }
        if (rec.DosisRecomendada === "") {
            Swal.fire({
                icon: 'error',
                text: "Por favor indique una dosis.",
                title: 'Error'
            });
            return;
        }
        if (rec.NombreMedicamento === "") {
            Swal.fire({
                icon: 'error',
                text: "Por favor indique un nombre de Medicamento.",
                title: 'Error'
            });
            return;
        }
        if (rec.RecomendacionAdicional === "") {
            Swal.fire({
                icon: 'error',
                text: "Por favor indique una Recomendación adicional.",
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
        //var api_url = API_URL_BASE + "/api/Recetas/CreateReceta";

        $.ajax({
            headers: {
                'Accept': "application/json",
                'Content-Type': "application/json"
            },
            method: "POST",
            url: "https://apisimepci.azurewebsites.net" + "/api/Recetas/CreateReceta",
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

            })
        });
    }


    this.LimpiarFormulario = function () {

        $('#FechaEmision').val('');

        $('#NombreMedicamento').val('');
        $('#DosisRecomendada').val('');
        //$('#cantidadDias').val('');
        $('#RecomendacionAdicional').val('');
        //$('#input-foto').val('');
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