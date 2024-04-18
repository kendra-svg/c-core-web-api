//botonFoto.addEventListener('click', () => {
//    widget_cloudinary.open();
//}, false);

function CreateSpeciality() {
    this.InitView = function () {
        $('#btn-crear-especialidad').click(function (event) {
            var view = new CreateSpeciality();
            view.SubmitCreateSpeciality();
        })
    }
    this.SubmitCreateSpeciality = function () {
        var speciality = {};
        speciality.id = generateUniqueId();

        speciality.Nombre = $('#input-nombre-especialidad').val();
        speciality.Costo = $('#input-costo-especialidad').val();
        speciality.IVA = $('#input-iva-especialidad').val();


        console.log(speciality);
        if (speciality.Nombre === "") {
            Swal.fire({
                icon: 'error',
                text: "Por favor llenar el espacio de nombre.",
                title: 'Error'
            });
            return;
        }

        if (speciality.Costo === "") {
            Swal.fire({
                icon: 'error',
                text: "Por favor rellenar el campo de costo.",
                title: 'Error'
            });
            return;
        }
        if (speciality.IVA === "") {
            Swal.fire({
                icon: 'error',
                text: "Por agregue el monto del iva.",
                title: 'Error'
            });
            return;
        }
               
        var api_url = API_URL_BASE + "/api/Especialidades/CreateEspecialidad";

        $.ajax({
            headers: {
                'Accept': "application/json",
                'Content-Type': "application/json"
            },
            method: "POST",
            url: api_url,
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            data: JSON.stringify(speciality),
            hasContent: true
        }).done(function (result) {
            Swal.fire({
                title: "Éxito",
                icon: "info",
                text: "Se ha completado el registro de especialidad",
            }).then(
                function () {
                    var view = new CreateSpeciality()
                    view.LimpiarFormulario();
                }
            )
        }).fail(function (error) {
            Swal.fire({
                icon: 'error',
                text: "Error al registrar especialidad" + error,
                title: 'Error',

            })
        });
    }


    this.LimpiarFormulario = function () {
        $('#input-nombre-especialidad').val("");
        $('#input-costo-especialidad').val("");
        $('#input-iva-especialidad').val("");

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
    var view = new CreateSpeciality();
    view.InitView();
});