const buttonElement = document.querySelector('#botonFoto');

const fotoCloudinary = document.querySelector('#fotoUsuario');

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

function CreaSede() {
    this.InitView = function () {
        $('#btnCreateSede').click(function (event) {
            var view = new CreaSede();
            view.SubmitCreaSede();
        })
    }
    this.SubmitCreaSede = function () {
        var sede = {};
        sede.id = generateUniqueId();
        sede.nombre = $('#input-nombre-sede').val();
        sede.descripcion = $('#input-descripcion').val();
        sede.fechaCreacion = $('#input-fecha-creacion').val();
        sede.ubicacion = $('#input-otras-senas').val();
        sede.canton = $('#combobox2').find(":selected").val();
        sede.provincia = $('#combobox1').find(":selected").val();
        sede.distrito = $('#combobox3').find(":selected").val();
        sede.direccion = $('#coordinates').val();
        sede.foto = fotoCloudinary.src;
        console.log(sede);
        if (sede.nombre === "") {
            Swal.fire({
                icon: 'error',
                text: "Por favor llenar el espacio de nombre.",
                title: 'Error'
            });
            return;
        }
        if (sede.descripcion === "") {
            Swal.fire({
                icon: 'error',
                text: "Por favor llenar el espacio de descripción.",
                title: 'Error'
            });
            return;
        }
        if (sede.fechaCreacion === "") {
            Swal.fire({
                icon: 'error',
                text: "Por favor seleccione una fecha de creacion.",
                title: 'Error'
            });
            return;
        }
        if (sede.ubicacion === "") {
            Swal.fire({
                icon: 'error',
                text: "Por agregue su ubicación.",
                title: 'Error'
            });
            return;
        }
        if (sede.canton === "") {
            Swal.fire({
                icon: 'error',
                text: "Por favor llene el espacio de cantón.",
                title: 'Error'
            });
            return;
        }
        if (sede.provincia === "") {
            Swal.fire({
                icon: 'error',
                text: "Por favor llenar el espacio de provincia.",
                title: 'Error'
            });
            return;
        }
        if (sede.distrito === "") {
            Swal.fire({
                icon: 'error',
                text: "Por favor llene el espacio de distrito.",
                title: 'Error'
            });
            return;
        }
        if (sede.direccion === "") {
            Swal.fire({
                icon: 'error',
                text: "Por favor seleccione una fecha de nacimiento.",
                title: 'Error'
            });
            return;
        }
        if (sede.foto === "") {
            Swal.fire({
                icon: 'error',
                text: "Por favor seleccione una fecha de nacimiento.",
                title: 'Error'
            });
            return;
        }
        var api_url = API_URL_BASE + "/api/Sedes/CreateSede";

        $.ajax({
            headers: {
                'Accept': "application/json",
                'Content-Type': "application/json"
            },
            method: "POST",
            url: api_url,
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            data: JSON.stringify(sede),
            hasContent: true
        }).done(function (result) {
            Swal.fire({
                title: "Éxito",
                icon: "info",
                text: "Se ha completado el registro",
            }).then(
                function () {
                    var view = new CreaSede()
                    view.LimpiarFormulario();
                }
            )
        }).fail(function (error) {
            Swal.fire({
                icon: 'error',
                text: "Error al registrarse",
                title: 'Error',
            })
        });
    }
    this.LimpiarFormulario = function () {
        $('#input-nombre-sede').val("");
        $('#input-descripcion').val("");
        $('#input-fecha-creacion').val("");
        $('input-provincia').val('');
        $('#input-canton').val("");
        $('#input-distrito').val("");
        $('#input-otras-senas').val("");
        $('#coordinates').val("");
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
    var view = new CreaSede();
    view.InitView();
});