function RegistroFuncionarios() {
    this.InitView = function () {
        this.ListaSedes();

        $('#agregarEspecialidadBtn').click(function () {
            var view = new RegistroFuncionarios();
            view.EditarEspecialidad();
        });

        $('#eliminarEspecialidadBtn').click(function () {
            var view = new RegistroFuncionarios();
            view.EliminarEspecialidad();
        });
    }

    this.ListaSedes = function () {
        $.ajax({
            //url: "https://localhost:7154/api/Sedes/GetAllSedesA",
            url: "https://apisimepci.azurewebsites.net/api/Sedes/GetAllSedesA",
            method: "GET",
            contentType: "application/json;charset=utf-8",
            dataType: "json"
        }).done(function (result) {
            if (result.result == "OK") {
                console.log("Estos fueron", result);
                gripOptions.api.setRowData(result.data);

                var contador = 1;
                result.data.forEach(function (item) {
                    console.log("Sede id " + contador + ": ", item.id);
                    sessionStorage.setItem("Sede id: " + contador + ": ", item.id);
                    // Aquí puedes guardar item.idEspecialidad en sessionStorage si lo deseas

                    contador++;
                });

                sessionStorage.setItem("Sedes", JSON.stringify(result.data));

            }

            else {
                Swal.fire({
                    icon: "error",
                    title: "Hubo un problema al cargar las Sedes",
                    text: "Hubo un problema al cargar las Sedes " + result.message
                });
            }
            //sessionStorage.SeItem("idEspecialidad", result.data.id_especialidades);
        }).fail(function (error) {
            console.log("El error" + error.data);
            Swal.fire({
                icon: "error",
                title: "Error al cargar las Sedes",
                text: "Hubo un error" + error.message
            });

        });
    }
    this.GetSedeEspecialidadesDetails = function (id) {
        var sedes = JSON.parse(sessionStorage.getItem("Sedes"));

        var sedeSeleccionada = sedes.find(sede => sede.id === id);
        console.log(id);
        console.log("Sede seleccionada", sedeSeleccionada);
        if(sedes && sedes.length > 0) {
            if (sedeSeleccionada) {
                console.log("Id dentro del if " + id);
                $.ajax({
                    url: API_URL_BASE + "/api/SedeEspec/GetEspecialidadesBySedeIdA?id_sede=" + id,
                    method: "GET",
                    contentType: "application/json;charset=utf-8",
                    dataType: "json"
                }).done(function (result) {
                    if (result.result == "OK") {
                        console.log("Estos fueron los detalles de details", result);
                        //especGridOptions.api.setRowData(result.data);

                        var especialidades = [];

                        if (result.data && result.data.length > 0) {
                            result.data.forEach(function (item) {
                                console.log("Sede id " + "elegido" + ": ", item.idSede, "Especialidad id " + "relacionada" + ": ", item.idEspecialidad);
                                especialidades.push(item.idEspecialidad); // Agregar la especialidad al array
                            });
                        }

                        //result.data.forEach(function (item) {
                        //    console.log("Sede id " + "elegido" + ": ", item.idSede, "Especialidad id " + "relacionada" + ": ", item.idEspecialidad);

                        //});

                        sessionStorage.setItem("Especialidades", JSON.stringify(especialidades)); // Guardar las especialidades en sessionStorage


                        /*sessionStorage.setItem("Especialidades", JSON.stringify(result.data.map(item => item.idEspecialidad)));*/

                        console.log("Especialides : " + sessionStorage.getItem("Especialidades"));

                        var especialidadesIds = JSON.parse(sessionStorage.getItem("Especialidades"));
                        console.log("EspecialidadesIds: ", especialidadesIds)

                        var promises = [];

                        var noRepetir = false;

                        if (especialidadesIds.length === 1) {
                            var promise1Espec =
                                $.ajax({
                                url: API_URL_BASE + "/api/Especialidades/GetEspecByIdA?idespec=" + especialidadesIds,
                                method: "GET",
                                contentType: "application/json;charset=utf-8",
                                dataType: "json"
                            });

                            promises.push(promise1Espec); // Agregar la promesa al array de promesas

                        }
                        especialidadesIds.forEach(function (especialidadId) {
                            var promise =
                                $.ajax({
                                url: API_URL_BASE + "/api/Especialidades/GetEspecByIdA?idespec=" + especialidadId,
                                method: "GET",
                                contentType: "application/json;charset=utf-8",
                                dataType: "json"
                            });
                            promises.push(promise); // Agregar la promesa al array de promesas
                        });

                        // Cuando todas las promesas se resuelvan, agregar las especialidades al grid
                        $.when.apply($, promises).done(function () {
                            var especialidadesData = []; // Array para almacenar los datos de las especialidades

                            contador = 1;
                            for (var i = 0; i < arguments.length; i++) {
                                var especialidad = arguments[i][0].data[0]; // Obtener los datos de la especialidad

                                // Crear un objeto con los datos de la especialidad
                                var especialidadData = {
                                    id: especialidad.id,
                                    nombre: especialidad.nombre,
                                    costo: especialidad.costo,
                                    iva: especialidad.iva
                                };
                                console.log("Especialidad Data: ", especialidadData);

                                especialidadesData.push(especialidadData); // Agregar el objeto al array de datos de especialidades
                                console.log("Se agregó " + contador + " vez")
                                contador++;
                                if (especialidadesIds.length === 1) {
                                    break;
                                }
                            }
                       

                                especGridOptions.api.setRowData(especialidadesData); // Agregar los datos al grid de especialidades

                        });

                    } else {
                        Swal.fire({
                            icon: "error",
                            title: "Hubo un problema al cargar las especialidades de la sede",
                            text: "Hubo un problema al cargar las especialidades de la sede " + result.message
                        });
                    }
                }).fail(function (error) {
                    console.log("El error" + error.data);
                    Swal.fire({
                        icon: "error",
                        title: "Error al cargar las especialidades de la sede",
                        text: "Hubo un error" + error.message
                    });
                });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Sede no encontrada",
                    text: "La sede seleccionada no fue encontrada en el almacenamiento local"
                });
            }
        } else {
            Swal.fire({
                icon: "error",
                title: "Sede no encontrada",
                text: "La sede seleccionada no fue encontrada en el almacenamiento local"
            });
        }
    }

    this.EditarEspecialidad = function () {
        var especialidades = {};
        especialidades.nombre = $('#NombreEspecialidad').val();
        especialidades.costo = $('#CostoEspecialidad').val();
        especialidades.iva = $('#IvaEspecialidad').val();
        especialidades.id = $('#IdEspecialidad').val();

        var api_url = API_URL_BASE + "/api/Especialidades/UpdateEspecialida?id=" + especialidades.id + "&costo=" + especialidades.costo + "&iva=" + especialidades.iva;
        $.ajax({
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "PUT",
            url: api_url,
            contentType: "application/json;charset=utf-8",
            dataType: "text",
            data: JSON.stringify(especialidades)
        }).done(function (response) {
            Swal.fire({
                icon: "success",
                title: "Especialidad actualizada",
                text: "La especialidad ha sido actualizada exitosamente"
            });
        }).then(function (result) {
            console.log("ENTRO AL THEN DEL AJAX")
        }).fail(function (error) {
            Swal.fire({
                icon: "error",
                title: "Error al actualizar la especialidad",
                text: "Hubo un error al actualizar la especialidad" + error.message
            });
        });
    }

    this.EliminarEspecialidad = function () {
        var especialidades = {};
        especialidades.Id = $('#IdEspecialidadEliminar').val();

        var api_url = API_URL_BASE + "/api/SedeEspec/DeleteSedeEspec?id=" + especialidades.Id;
        $.ajax({
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "DELETE",
            url: api_url,
            contentType: "application/json;charset=utf-8",
            dataType: "text",
            data: JSON.stringify(especialidades)
        }).done(function (response) {
            Swal.fire({
                icon: "success",
                title: "Especialidad eliminada",
                text: "La especialidad ha sido eliminada exitosamente"
            });
        }).then(function (result) {
            console.log("ENTRO AL THEN DEL AJAX")
        }).fail(function (error) {
            Swal.fire({
                icon: "error",
                title: "Error al eliminar la especialidad",
                text: "Hubo un error al eliminar la especialidad" + error.message
            });
        });
    }


}

                   
$(document).ready(function () {
    var view = new RegistroFuncionarios();
    view.InitView();
});