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

function CrearUsuario() {

    this.InitView = function () {
        $('#btnCreate').click(function (event) {
            var view = new CrearUsuario();
            view.SubmitCrearUsuario(); // Llama al método para enviar el usuario
        })
    }
    this.SubmitCrearUsuario = function () {
        var usuario = {};
        usuario.id = generateUniqueId();
        usuario.nombre = $('#Nombre').val();
        usuario.apellidos = $('#Apellidos').val();
        usuario.telefono = $('#Telefono').val();
        usuario.correo = $('#Correo').val();
        usuario.fechaNacimiento = $('#FechaNacimiento').val();
        usuario.sexo = $('#Sexo').find(":selected").val();
        /*usuario.contrasenna = $('#Contrasenna').val();*/
        usuario.direccion = $('#Direccion').find(":selected").val();
        usuario.foto = fotoCloudinary.src;
        usuario.identificacion = $('#Identificacion').val();
        usuario.ubicaciones = $('#coordinates').val();
        usuario.rol = "Paciente";
        usuario.estado = 0;
        usuario.verificacion = "Incompleta";
        console.log(usuario.verificacion)

        var fechaNacimientoString = $('#FechaNacimiento').val();
        var fechaNacimiento = new Date(fechaNacimientoString);

        var fechaActualString = new Date().toISOString().slice(0, 16);
        var fechaActual = new Date(fechaActualString);

        var edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();

        var timeoutstring = $('#timestamp').val();
       /* var timeout = new Date(timeoutstring);*/
        usuario.timeout = $('#timestamp').val(); /*timeout;$('#timestamp').val();*/
        /*usuario.timeout = timeout;*/
        console.log(usuario.timeout)


        //console.log("Fecha actual: " + fechaActual);
        //console.log("Fecha actual string: " + fechaActualString);
        //console.log("Timeout: " + usuario.timeout);
        usuario.otp = generateUniqueOTP();
        guardaOtp = usuario.otp;
        localStorage.setItem('correo', usuario.correo);



        if (fechaActual.getMonth() < fechaNacimiento.getMonth() ||
            (fechaActual.getMonth() === fechaNacimiento.getMonth() && fechaActual.getDate() < fechaNacimiento.getDate())) {
            edad--;
        }

        usuario.edad = edad;
        console.log(usuario)
        if (fechaNacimientoString > fechaActualString) {
            Swal.fire({
                icon: 'error',
                text: "La fecha de nacimiento no puede ser mayor a la fecha actual.",
                title: 'Error'
            });
            console.log(fechaActualString)
            $('#FechaNacimiento').val("");
            return;
        }

        if (fechaNacimientoString == "") {
            Swal.fire({
                icon: 'error',
                text: "Por favor seleccione una fecha de nacimiento.",
                title: 'Error'
            });
            return;
        }

        if (!usuario.foto) {
            Swal.fire({
                icon: 'error',
                text: "Por favor seleccione una foto.",
                title: 'Error'
            });
            return; 
        }

        if (usuario.telefono.length > 14) { 
            Swal.fire({
                icon: 'error',
                text: "El número de teléfono no puede tener más de 14 dígitos.",
                title: 'Error'
            });
            $('#Telefono').val("");
            return;
        }

        if (usuario.identificacion.length > 9) {
            Swal.fire({
                icon: 'error',
                text: "La identificación no puede tener más de 9 dígitos.",
                title: 'Error'
            });
            $('#Identificacion').val("");
            return;
        }

        if (usuario.sexo === "") {
            Swal.fire({
                icon: 'error',
                text: "Por favor seleccione un sexo.",
                title: 'Error'
            });
            return;
        }


        if (usuario.nombre === "") {
            Swal.fire({
                icon: 'error',
                text: "Por favor ingrese un nombre.",
                title: 'Error'
            });
            return;
        }

        if (usuario.apellidos === "") {
            Swal.fire({
                icon: 'error',
                text: "Por favor ingrese un apellido.",
                title: 'Error'
            });
            return;
        }

        if (usuario.correo === "") {
            Swal.fire({
                icon: 'error',
                text: "Por favor ingrese un correo.",
                title: 'Error'
            });
            return;
        }

        if (usuario.direccion === "") {
            Swal.fire({
                icon: 'error',
                text: "Por favor ingrese una dirección.",
                title: 'Error'
            });
            return;
        }

  

        if ($('#Contrasenna').val() == $('#ConfirmarContrasenna').val()) {
            usuario.contrasenna = $('#Contrasenna').val();
        }

        if (usuario.contrasenna != $('#ConfirmarContrasenna').val()) {
            Swal.fire({
                icon: 'error',
                text: "Las contraseñas no coinciden.",
                title: 'Error'
            });
            $('#Contrasenna').val("");
            $('#ConfirmarContrasenna').val('')
            return;
        }

        if (usuario.contrasenna.length < 8) {
            Swal.fire({
                icon: 'error',
                text: "La contraseña debe tener al menos 8 caracteres.",
                title: 'Error'
            });
            $('#Contrasenna').val("");
            $('#ConfirmarContrasenna').val('')
            return;
        }

        if (usuario.contrasenna.length > 12) {
            Swal.fire({
                icon: 'error',
                text: "La contraseña no puede tener más de 12 caracteres.",
                title: 'Error'
            });
            $('#Contrasenna').val("");
            $('#ConfirmarContrasenna').val('')
            return;
        }


        if (usuario.telefono.length < 8) { 
            Swal.fire({
                icon: 'error',
                text: "El número de teléfono no puede tener menos de 8 dígitos.",
                title: 'Error'
            });
            $('#Telefono').val("");
            return;
        }

        var api_url = API_URL_BASE + "/api/Usuario/CreateUsuario";

        $.ajax({
            headers: {
                'Accept': "application/json",
                'Content-Type': "application/json"
            },
            method: "POST",
            url: api_url,
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            data: JSON.stringify(usuario),
            hasContent: true
        }).done(function (result) {
            Swal.fire({
                title: "Éxito",
                icon: "success",
                text: "Se ha completado el registro",
            }).then(
                function () {
                    var view = new CrearUsuario();
                    view.CommunicatePatient();
                    view.LimpiarFormulario();

                    sessionStorage.setItem('correo', usuario.correo);
                    sessionStorage.setItem('timestamp', usuario.timeout);
                    window.location = "/VerificaCuenta/VerificaCuenta";

                }
            )
        }).fail(function (error) {
            Swal.fire({
                icon: 'error',
                text: "Error al registrarse",
                title: 'Error',

            });
            console.log("Error", error);
        });

    }
    this.CommunicatePatient = function () {
        var correo = $('#Correo').val();
        var nombreCompleto = $('#Nombre').val() + " " + $('#Apellidos').val();
        var otp = guardaOtp;
        console.log(otp)
        var cuerpo = "Hola " + nombreCompleto + "<br><br>" +
            "Gracias por registrarte. Para activar tu cuenta, por favor ingresa el siguiente código de verificación en la página: " + otp + "." + "<br><br>" +
            "Ten en cuenta que el código expirará en un minuto." + "<br><br>" +
            "Hospital SIMEPCI."
        console.log("Correo enviado en la solicitud:", correo);
        var apiUrl = API_URL_BASE + "/api/Communication/SendEmail?correo=" + correo + "&cuerpo=" + cuerpo + "&otp=" + otp + "&asunto=Verificación de cuenta";

        $.ajax({
            url: apiUrl,
            method: "POST",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            processData: false,
            data: JSON.stringify({}),
            headers: {
                'Content-Type': 'text/html'
            }

        }).done(function (data) {
            console.log("Se ha enviado un correo con el código OTP" + data)
       
        }).fail(function (xhr, textStatus, errorThrown) {
            if (xhr.responseText === "Ok") {
                Swal.fire({
                    icon: 'success',
                    text: "Correo de verificación enviado con éxito",
                    title: 'Success',
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    text: xhr.responseText,
                    title: 'Error',
                });
            }
        });

    }

    this.RedirectToLogin = function () {
        window.location = "/Login/Login";
    }

    this.LimpiarFormulario = function () {
        $('#Nombre').val("");
        $('#Apellidos').val("");
        $('#Telefono').val("");
        $('Foto').val('');
        $('#Correo').val("");
        $('#FechaNacimiento').val("");
        $('#Sexo').val("");
        $('#Contrasenna').val("");
        $('#ConfirmarContrasenna').val("");
        $('#Coordinates').val("");
        $('#Direccion').val("");
        $('#Identificacion').val("");
        $('#Direccion').val("");
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

generateOTPS = [];

generateUniqueOTP = () => {
    let newOTP;
    do {
        const randomNumber = Math.floor(100000 + Math.random() * 900000);
        newOTP = parseInt(randomNumber);
    } while (generateOTPS.includes(newOTP));
    generateOTPS.push(newOTP);
    return newOTP;
}




$(document).ready(function () {

    var view = new CrearUsuario();
    view.InitView();
});