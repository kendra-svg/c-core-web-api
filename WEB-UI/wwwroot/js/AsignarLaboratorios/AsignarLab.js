function ManejaFuncionarios() {
    this.InitView = function () {

        //this.ListaSedes();
        //this.ListaFuncionarios();
        this.PopulateSedes();
        this.PopulateSpecialties();
        //this.ListaEspecialidades();
        this.PopulateUsers();
        $("#btnAgregar").click(function () {
            var view = new ManejaFuncionarios();
            view.AgregarEspecialidadYUsuarioASede();
        });

    };


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
            
    