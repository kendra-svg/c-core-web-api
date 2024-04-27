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

        $('#eliminarUsuarioBtn').click(function () {
            var view = new RegistroFuncionarios();
            view.EliminarUsuario();
        });
    }

    this.ListaSedes = function () {
        $.ajax({
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
        var sedesStr = sessionStorage.getItem("Sedes");
        if (sedesStr !== null) {

            var sedeSeleccionada = sedes.find(sede => sede.id === id);
            console.log(id);
            console.log("Sede seleccionada", sedeSeleccionada);
            if (sedes && sedes.length > 0) {
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

                            var especialidades = [];


                            if (result.data && result.data.length > 0) {
                                result.data.forEach(function (item) {
                                    console.log("Sede id " + "elegido" + ": ", item.idSede, "Especialidad id " + "relacionada" + ": ", item.idEspecialidad, "Usuario sede: ", item.idUsuario);
                                    especialidades.push(item.idEspecialidad); // Agregar la especialidad al array

                                });
                            }

                            sessionStorage.setItem("Especialidades_" + id, JSON.stringify(especialidades)); // Guardar las especialidades en sessionStorage con un identificador único para cada sede


                            sessionStorage.setItem("Especialidades", JSON.stringify(especialidades)); // Guardar las especialidades en sessionStorage

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

                                    sessionStorage.setItem("Especialidad Datas", especialidadData);

                                    especialidadesData.push(especialidadData); // Agregar el objeto al array de datos de especialidades
                                    console.log("Especialidad Data especialidad: ", especialidadData);
                                    //nombresEspecialidades.push(especialidadData.nombre);
                                    console.log("Se agregó " + contador + " vez")
                                    contador++;
                                    if (especialidadesIds.length === 1) {
                                        break;
                                    }
                                }


                                //sessionStorage.setItem("NombresEspecialidades", JSON.stringify(nombresEspecialidades));

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
        } else {
            Swal.fire({
                icon: "error",
                title: "Sede no encontrada",
                text: "La sede seleccionada no fue encontrada"
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

    this.EliminarUsuario = function () {
        var usuario = {};
        usuario.Id = $('#IdUsuario').val();

        var api_url = API_URL_BASE + "/api/SedeEspec/DeleteUserFromSedeEspecialidad?id=" + usuario.Id;
        $.ajax({
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "DELETE",
            url: api_url,
            contentType: "application/json;charset=utf-8",
            dataType: "text",
            data: JSON.stringify(usuario)
        }).done(function (response) {
            Swal.fire({
                icon: "success",
                title: "Usuario removido",
                text: "El usuario ha sido removido exitosamente"
            });
        }).then(function (result) {
            console.log("ENTRO AL THEN DEL AJAX")
        }).fail(function (error) {
            Swal.fire({
                icon: "error",
                title: "Error al remover el usuario",
                text: "Hubo un error al remover el usuario" + error.message
            });
        });
    }


    this.GetSedeUsuariosDetails = function (id) {
        var sedes = JSON.parse(sessionStorage.getItem("Sedes"));

        var sedeSeleccionada = sedes.find(sede => sede.id === id);
        console.log(id);
        console.log("Sede seleccionada", sedeSeleccionada);
        if (sedes && sedes.length > 0) {
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

                        var especialidades = [];
                        var usuariosId = [];
                        var especialidadesNombres = [];

                        if (result.data && result.data.length > 0) {
                            result.data.forEach(function (item) {
                                console.log("Sede id " + "elegido" + ": ", item.idSede, "Especialidad id " + "relacionada" + ": ", item.idEspecialidad, "Usuario sede: ", item.idUsuario);
                                especialidades.push(item.idEspecialidad); // Agregar la especialidad al array
                                usuariosId.push(item.idUsuario); // Agregar la especialidad al array
                                especialidadesNombres.push(item.nombre);
                            });
                        }

                        
                        sessionStorage.setItem("UsuariosIds", JSON.stringify(usuariosId)); // Guardar las especialidades en sessionStorage


                        console.log("UsuariosIds: ", usuariosId)


                        var especialidadesIds = JSON.parse(sessionStorage.getItem("Especialidades"));
                        console.log("EspecialidadesIds: ", especialidadesIds)
                        var usuariosIds = JSON.parse(sessionStorage.getItem("UsuariosIds"));
                        console.log("UsuariosIds: ", usuariosIds)


                        var promises = [];



                        if (usuariosIds.length === 1) {
                            var promise1User =
                                $.ajax({
                                    url: API_URL_BASE + "/api/Usuario/GetUserByUserIdA?id_usuario=" + usuariosIds,
                                    method: "GET",
                                    contentType: "application/json;charset=utf-8",
                                    dataType: "json"
                                });
                            promises.push(promise1User); // Agregar la promesa al array de promesas
                        }

                       

                        usuariosIds.forEach(function (usuarioId) {
                            var promise =
                                $.ajax({
                                    url: API_URL_BASE + "/api/Usuario/GetUserByUserIdA?id_usuario=" + usuarioId,
                                    method: "GET",
                                    contentType: "application/json;charset=utf-8",
                                    dataType: "json"
                                });
                            promises.push(promise); // Agregar la promesa al array de promesas
                            

                        });

                        // Cuando todas las promesas se resuelvan, agregar las especialidades al grid
                        $.when.apply($, promises).done(function () {


                            

                            var usuariosData = []; // Array para almacenar los datos de los usuarios

                            contador = 1;


                            for (var i = 0; i < arguments.length; i++) {
                                var usuario = arguments[i][0].data[0]; // Obtener los datos de la especialidad

                                var especialidesIds = JSON.parse(sessionStorage.getItem("Especialidades_" + id)); /*Return point*/ 

                                var usuarioData = {
                                    id: usuario.id,
                                    identificacion: usuario.identificacion,
                                    nombre: usuario.nombre,
                                    apellidos: usuario.apellidos,
                                    correo: usuario.correo,
                                    sexo: usuario.sexo,
                                    rol: usuario.rol,
                                    telefono: usuario.telefono,
                                    direccion: usuario.direccion,
                                    Ubicacion: usuario.Ubicacion,
                                    foto: usuario.foto,
                                    estado: usuario.estado,
                                    contrasenna: usuario.contrasenna,
                                    edad: usuario.edad,
                                    verificacion: usuario.verificacion,
                                    nombreCompleto: usuario.nombre + " " + usuario.apellidos,
                                    especialidad: especialidesIds ? especialidadesIds[i] : "No tiene"

                                    //aca va especialidad
                                };


                                console.log("Usuario Data: ", usuarioData);

                                usuariosData.push(usuarioData); // Agregar el objeto al array de datos de usuarios
                                console.log("Se agregó " + contador + " vez")
                                contador++;
                                if (usuariosIds.length === 1) {
                                    break;
                                }

                            }


                            userGridOptions.api.setRowData(usuariosData); // Agregar los datos al grid de especialidades

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

}

                   
$(document).ready(function () {
    var view = new RegistroFuncionarios();
    view.InitView();
});