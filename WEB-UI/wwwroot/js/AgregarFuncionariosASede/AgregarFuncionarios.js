function ManejaFuncionarios() {
    this.InitView = function () {

        this.ListaSedes();
        this.ListaFuncionarios();
        this.PopulateSedes();
        this.PopulateSpecialties();
        this.ListaEspecialidades();
        this.PopulateUsers();
        $("#btnAgregar").click(function () {
            var view = new ManejaFuncionarios();
            view.AgregarEspecialidadYUsuarioASede();
        });

    }
;

    this.ListaSedes = function () {
        $.ajax({
            url: API_URL_BASE + "/api/Sedes/GetAllSedesA",
            method: "GET",
            contentType: "application/json;charset=utf-8",
            dataType: "json"
        }).done(function (result) {

                console.log("Estos fueron", result.data);
                sedeGridOptions.api.setRowData(result.data);

                var contador = 1;
                result.data.forEach(function (item) {
                    console.log("Sede id " + contador + ": ", item.id);
                    sessionStorage.setItem("Sede id: " + contador + ": ", item.id);

                    contador++;
                });

                sessionStorage.setItem("Sedes", JSON.stringify(result.data));
        }).fail(function (error) {
            Swal.fire({
                title: "Error",
                icon: "error",
                text: "Error al cargar las sedes" + error
            });
        });
    }

    this.ListaFuncionarios = function () {
        $.ajax({
            url: API_URL_BASE + "/api/Usuario/GetAllFuncionariosA",
            method: "GET",
            contentType: "application/json;charset=utf-8",
            dataType: "json"
        }).done(function (result) {
                console.log("Estos fueron", result.data);
                userGripOptions.api.setRowData(result.data);

        }).fail(function (error) {
            Swal.fire({
                title: "Error",
                icon: "error",
                text: "Error al cargar los funcionarios" + error
            });
        });
    }

    this.ListaEspecialidades = function () {
        $.ajax({
            url: API_URL_BASE + "/api/Especialidades/GetAllEspecialidadesA",
            method: "GET",
            contentType: "application/json;charset=utf-8",
            dataType: "json"
        }).done(function (result) {
                console.log("Estos fueron", result.data);
                especGridOptions.api.setRowData(result.data);

 

                sessionStorage.setItem("Especialidades", JSON.stringify(result.data));
        }).fail(function (error) {
            Swal.fire({
                title: "Error",
                icon: "error",
                text: "Error al cargar las especialidades" + error
            });
        });
    }

    this.PopulateSedes = function () {
        var apiUrl = API_URL_BASE + "/api/Sedes/GetSedes";

        $.ajax({
            url: apiUrl,
            method: "GET",
            contentType: "application/json;charset=utf-8",
            dataType: "json"
        }).done(function (data) {
            infoSedes = data

            var select = $('#ddlSedes');
            select.find('option').remove();

            select.append('<option value="" disabled selected>Seleccione una sede</option>')

            for (var row in data) {
                select.append('<option value=' + data[row].id + '>' + data[row].nombre + '</option>')
            }
            select.on('change', function () {
                let id = $(this).val();
                idSede = id;

            });

        }).fail(function (error) {
            Swal.fire({
                title: "Error",
                icon: "error",
                text: "Error al cargar las sedes" + error,
                timer: 2000
            });
        });
    }

    this.PopulateUsers = function () {
        var apiUrl = API_URL_BASE + "/api/Usuario/GetAllFuncionarios";

        $.ajax({
            url: apiUrl,
            method: "GET",
            contentType: "application/json;charset=utf-8",
            dataType: "json"
        }).done(function (data) {
            infoUsuarios = data

            var select = $('#ddlFuncionarios');
            select.find('option').remove();

            select.append('<option value="" disabled selected>Seleccione un funcionario</option>')

            for (var row in data) {
                select.append('<option value=' + data[row].id + '>' + data[row].nombre + '</option>')

            }
            select.on('change', function () {
                let id = $(this).val();
                idUsuario = id;
                var rolUsuario = data.find(user => user.id == id).rol;
                $('#RolUsuario').val(rolUsuario);
                activateRolInput();

            });


        }).fail(function (error) {
            Swal.fire({
                title: "Error",
                icon: "error",
                text: "Error al cargar los usuarios" + error,
                timer: 2000
            });
        });
    }

    this.GetSedesDetails = function (idSede) {
        var apiUrl = API_URL_BASE + "/api/Sedes/GetSedeById?id=" + idSede;

        $.ajax({
            url: apiUrl,
            method: "GET",
            contentType: "application/json;charset=utf-8",
            dataType: "json"
        }).done(function (result) {
            console.log("Resultado del get sedes:", result);
            //idSede = result.id;
            if (result && result.length > 0) { // Verifica si el array tiene elementos
                var sede = result[0]; // Accede al primer elemento del array
                idSede = sede.id;
                nombreSede = sede.nombre;

                console.log("Sede id: ", idSede);

                var selectSedes = $('#ddlSedes');
                selectSedes.find('option').remove();
                selectSedes.append('<option value=' + idSede + '>' + nombreSede + '</option>');
                selectSedes.val(idSede);
                //idSede = result.id;
            } else {
                console.error("El resultado no contiene un ID de sede válido:", result);
            }


        }).fail(function (error) {
            Swal.fire({
                title: "Error",
                icon: "error",
                text: "Error al cargar la sede" + error,
                timer: 2000
            });
        });
    }

    this.PopulateSpecialties = function () {
        var apiUrl = API_URL_BASE + "/api/Especialidades/GetAllEspecialidad";

        $.ajax({
            url: apiUrl,
            method: "GET",
            contentType: "application/json;charset=utf-8",
            dataType: "json"
        }).done(function (data) {
            //console.log(data);
            infoEspecialidad = data;
            var select = $('#ddlEspecialidades');
            select.find('option').remove();

            select.append('<option value="" disabled selected>Seleccione una especialidad</option>')

            for (var row in data) {

                select.append('<option   value=' + data[row].id + '>' + data[row].nombre + '</option>');

            }
            select.on('change', function () {
                let id = $(this).val();
                idEspecialidad = id;

            });

        }).fail(function (error) {
            Swal.fire({
                title: "Error",
                icon: "error",
                text: "Error al cargar las especialidades" + error,
                timer: 2000
            });
        });
    }

    this.GetEspecDetails = function (idEspecialidad) {
        var apiUrl = API_URL_BASE + "/api/Especialidades/GetEspecById?idespec=" + idEspecialidad;

        $.ajax({
            url: apiUrl,
            method: "GET",
            contentType: "application/json;charset=utf-8",
            dataType: "json"
        }).done(function (result) {
            console.log("Resultado del get especialidades:", result);
            //idSede = result.id;
            if (result && result.length > 0) { // Verifica si el array tiene elementos
                var especialidad = result[0]; // Accede al primer elemento del array
                idEspecialidad = especialidad.id;
                nombreEspecialidad = especialidad.nombre;

                console.log("Especialidad id: ", idEspecialidad);

                var selectEspecialidades = $('#ddlEspecialidades');
                selectEspecialidades.find('option').remove();
                selectEspecialidades.append('<option value=' + idEspecialidad + '>' + nombreEspecialidad + '</option>');
                selectEspecialidades.val(idEspecialidad);
                //idSede = result.id;
            } else {
                console.error("El resultado no contiene un ID de especialidad válido:", result);
            }
        }).fail(function (error) {
            Swal.fire({
                title: "Error",
                icon: "error",
                text: "Error al cargar la especialidad" + error,
                timer: 2000
            });
        });
    }

    this.GetUsuarioDetails = function (idUsuario) {
        var apiUrl = API_URL_BASE + "/api/Usuario/GetUserByUserId?id_usuario=" + idUsuario;

        $.ajax({
            url: apiUrl,
            method: "GET",
            contentType: "application/json;charset=utf-8",
            dataType: "json"
        }).done(function (result) {
            console.log("Resultado del get usuario:", result);
            //idSede = result.id;
            if (result && result.length > 0) { // Verifica si el array tiene elementos
                var usuario = result[0]; // Accede al primer elemento del array
                idUsuario = usuario.id;
                nombreUsuario = usuario.nombre;

                console.log("Usuario id: ", idUsuario);
                $('#RolUsuario').val(usuario.rol);
                var selectUsuarios = $('#ddlFuncionarios');
                selectUsuarios.find('option').remove();
                selectUsuarios.append('<option value=' + idUsuario + '>' + nombreUsuario + '</option>');
                selectUsuarios.val(idUsuario);




            } else {
                console.error("El resultado no contiene un ID de usuario válido:", result);
            }
        }).then(function () {
            activateRolInput();
        }).fail(function (error) {
            Swal.fire({
                title: "Error",
                icon: "error",
                text: "Error al cargar el usuario" + error,

            });
        });
    }

    this.AgregarEspecialidadYUsuarioASede = function () {

        var idUnique = generateUniqueId();


        var apiUrl = API_URL_BASE + "/api/SedeEspec/InsertEspecialidadesYFuncionariosIntoSedes?id=" + idUnique + "&idSede=" + idSede + "&idEspecialidad=" + idEspecialidad + "&idUsuario=" + idUsuario;

        var data = {
            id: idUnique,
            idSede: idSede,
            idEspecialidad: idEspecialidad,
            idUsuario: idUsuario
        }
        console.log(data);

        $.ajax({
            headers: {
                'Accept': "application/json",
                'Content-Type': "application/json"
            },
            method: "POST",
            url: apiUrl,
            contentType: "application/json;charset=utf-8",
            data: JSON.stringify(data),
            dataType: "json"
        }).done(function (result) {
            Swal.fire({
                title: "Éxito",
                icon: "success",
                text: "Se ha agregado la especialidad y el usuario a la sede correctamente",

            }).then(function () {
                Swal.fire({
                    title: "Siendo redirigido",
                    icon: "info",
                    text: "Estas siendo redirigido a la página para ver los usuarios y especialidades pertenecientes a las sedes",
                    timer: 5000,
                    showConfirmButton: false
                }).then(function () {
                    window.location = "/Administrador/DetallesSedes";
                });
            });
        }).fail(function (error) {
            Swal.fire({
                title: "Error",
                icon: "error",
                text: "Error al agregar la especialidad y el usuario a la sede" + error,

            });
        });
    }
}

function activateRolInput() {
    const RolUsuarioInput = document.getElementById('RolUsuario');
    const RolUsuarioLabel = document.querySelector('label[for=RolUsuarioLabel]');

    document.getElementById('btnAgregar').style.display = 'block';

    RolUsuarioInput.style.display = "block";
    RolUsuarioLabel.style.display = "block";
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
    var view = new ManejaFuncionarios();
    view.InitView();
});
            
    