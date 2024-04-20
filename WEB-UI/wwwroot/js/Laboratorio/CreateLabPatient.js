const buttonElement = document.querySelector('#botonFoto');

const fotoCloudinary = document.querySelector('#fotoExamen');

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

function CreateLab() {
    this.InitView = function () {
        $('#btnCreateLab').click(function (event) {
            var view = new CreateLab();
            view.SubmitCreateLab();
        })
    }
    this.SubmitCreateLab = function () {
        var idusuario = sessionStorage["userId"]
        console.log(idusuario)


        var lab = {};
        lab.id = generateUniqueId();

        lab.nombreExamen = $('#input-nombre-examen').val();
        lab.comentario = $('#input-comentario').val();



        lab.foto = fotoCloudinary.src;
        lab.fecha = $('#input-fecha').val();


        console.log(lab);
        if (lab.nombre === "") {
            Swal.fire({
                icon: 'error',
                text: "Por favor llenar el espacio de nombre.",
                title: 'Error'
            });
            return;
        }

        if (lab.fecha === "") {
            Swal.fire({
                icon: 'error',
                text: "Por favor seleccione una fecha.",
                title: 'Error'
            });
            return;
        }
        if (lab.comentario === "") {
            Swal.fire({
                icon: 'error',
                text: "Por agregue su comentario.",
                title: 'Error'
            });
            return;
        }

        var api_url = API_URL_BASE + "/api/Laboratorios/CreateLaboratorio";

        $.ajax({
            headers: {
                'Accept': "application/json",
                'Content-Type': "application/json"
            },
            method: "POST",
            url: api_url + "?idUsuario=" + idusuario,
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            data: JSON.stringify(lab),
            hasContent: true
        }).done(function (result) {
            Swal.fire({
                title: "Éxito",
                icon: "success",
                text: "Se ha completado el registro del examen",
            }).then(
                function () {
                    var view = new CreateLab()
                    view.LimpiarFormulario();
                }
            )
        }).fail(function (error) {
            Swal.fire({
                icon: 'error',
                text: "Error al registrar el examen"+error,
                title: 'Error',
                
            })
        });
    }

   
    this.LimpiarFormulario = function () {
        $('#input-nombre-examen').val("");
        $('#input-comentario').val("");
        $('#input-fecha').val("");
       
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
    var view = new CreateLab();
    view.InitView();
});