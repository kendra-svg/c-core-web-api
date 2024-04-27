
function Citas() {
    var self = this;

    this.InitView = function () {
        this.PopulateInfo();
    }
    //BUSCA TODAS LAS SEDE
    this.PopulateInfo = function () {
        var apiUrl = API_URL_BASE + "/api/Sedes/GetSedes";

        $.ajax({
            url: apiUrl,
            method: "GET",
            contentType: "application/json;charset=utf-8",
            dataType: "json"
        }).done(function (data) {
            infoSedes = data
            //console.log(data)
            var select = $('#ddlSedes');
            select.find('option').remove();

            for (var row in data) {
                select.append('<option value=' + data[row].id + '>' + data[row].nombre + '</option>')
            }
            select.on('change', function () {
                let id = $(this).val();
                //console.log(id)
                sessionStorage.setItem('idSedeCita', id);
                self.CargarInfoEspecialidadesSede(id);
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

    //BUSCA ESPECIALIDAD POR SEDE
    this.CargarInfoEspecialidadesSede = function (idSede) {
        //console.log(idSede)
        var apiUrl = API_URL_BASE + "/api/SedeEspec/GetEspecialidadesBySedeId";
        $.ajax({
            url: apiUrl + "?id_sede=" + idSede,
            method: "GET",
            contentType: "application/json;charset=utf-8",
            dataType: "json"
        }).done(function (result) {
           // console.log('El resultado seleccionado es:', result);
            self.BuscarNombreDeEspecialiades(result, idSede)
        }).fail(function (error) {
            console.log("Error del ajax ", error);
            Swal.fire({
                icon: "error",
                title: "Error al cargar el detalle del paciente",
                text: "Hubo un error " + error
            });
        });
    }

    //BUSCA EL NOMBRE DE LA ESPECIALIDAD
    this.BuscarNombreDeEspecialiades = function (result, idSede) {
        const especialidadesDict = {};


        Object.keys(result).forEach(function (key) {
            var idEspecialidad = result[key].idEspecialidad;


            var apiUrl = API_URL_BASE + "/api/Especialidades/GetEspecialidadById";
            $.ajax({
                url: apiUrl + "?id=" + idEspecialidad,
                method: "GET",
                contentType: "application/json;charset=utf-8",
                dataType: "json"
            }).done(function (result) {

                especialidadesDict[idEspecialidad] = result.nombre;
                //console.log('Diccionario de especialidades:', especialidadesDict);
                self.PopulateEspacialidades(especialidadesDict, idSede)
            }).fail(function (error) {
                console.log("Error del ajax ", error);
                Swal.fire({
                    icon: "error",
                    title: "Error al cargar el detalle del paciente",
                    text: "Hubo un error " + error
                });
            });
        });

    }
    //LLENA EL SELECT DE ESPECIALIDAD
    this.PopulateEspacialidades = function (especialidadesDict, idSede) {
        //console.log(especialidadesDict)
        var select = $('#ddlEspecialidades');
        select.find('option').remove();


        Object.keys(especialidadesDict).forEach(function (key) {

            select.append('<option value=' + key + '>' + especialidadesDict[key] + '</option>');
        });
        select.on('change', function () {
            let idEspecialidad = $(this).val();
            sessionStorage.setItem('idEspecialidadCita', idEspecialidad);
            //console.log(idEspecialidad)
            self.CargarMedicos(idEspecialidad, idSede);

        });


    }
    //BUSCA LOS MEDICOS SEGUN SEDE Y ESPECIALIDAD
    this.CargarMedicos = function (idEspecialidad, idSede) {
        //console.log(idEspecialidad, idSede)

        var apiUrl = API_URL_BASE + "/api/SedeEspec/GetSedeEspecialidadesBySedeIdAndEspecialidadId";
        $.ajax({
            url: apiUrl + "?id_sede=" + idSede + "&id_especialidad=" + idEspecialidad,
            method: "GET",
            contentType: "application/json;charset=utf-8",
            dataType: "json"
        }).done(function (result) {
           //console.log(result)
            self.BuscarNombreMedicos(result, idEspecialidad, idSede)

        }).fail(function (error) {
            console.log("Error del ajax ", error);
            Swal.fire({
                icon: "error",
                title: "Error al cargar el detalle del paciente",
                text: "Hubo un error " + error
            });
        });
    }
    this.BuscarNombreMedicos = function (result, idEspecialidad, idSede) {
        //console.log(result)
        
        const idMedico = result.idUsuario;
        //console.log(idMedico)
        var apiUrl = API_URL_BASE + "/api/Usuario/GetUserByUserId";
        $.ajax({
            url: apiUrl + "?id_usuario=" + idMedico,
            method: "GET",
            contentType: "application/json;charset=utf-8",
            dataType: "json"
        }).done(function (result) {
            //console.log(result);
            const medicosDic = {};
            medicosDic[idMedico] = result[0].nombre;
            //console.log('Diccionario de medicos:', medicosDic);
            self.PopulateMedicos(medicosDic, idEspecialidad, idSede)
        }).fail(function (error) {
            Swal.fire({
                icon: "error",
                title: "Error al cargar el detalle del paciente",
                text: "Hubo un error " + error
            });
        });
    }
    this.PopulateMedicos = function (medicosDic, idEspecialidad, idSede) {
        //console.log(medicosDic);
        var select = $('#ddlmedicos');
        select.empty(); 

       
        $.each(medicosDic, function (key, value) {
            select.append('<option value="' + key + '">' + value + '</option>');
        });

       
        select.on('change', function () {
            let idDoctor = $(this).val();
            sessionStorage.setItem('idDoctorCita', idDoctor);
            self.CargarHorario(idDoctor, idEspecialidad, idSede);
        });

       
        if (Object.keys(medicosDic).length === 1) {
            let idDoctor = Object.keys(medicosDic)[0];
            select.val(idDoctor).change();
        }
    }





    this.CargarHorario = function (idDoctor, idEspecialidad, idSede) {
        //console.log(idDoctor)
        var apiUrl = API_URL_BASE + "/api/Horario/GetHorarioByUserId";
        $.ajax({
            url: apiUrl + "?userId=" + idDoctor,
            method: "GET",
            contentType: "application/json;charset=utf-8",
            dataType: "json"
        }).done(function (result) {
        
            const processedData = result.map(item => ({
                id: item.id,
                fecha: new Date(item.fecha).toLocaleDateString('es-ES'),
                hora: new Date(item.hora).toLocaleTimeString('es-ES'),
                estado: item.estado
            }));

            
            HorarioGridOptions.api.setRowData(processedData);
        
        
        }).fail(function (error) {
            console.log("Error al cargar los horarios del médico:", error);
            Swal.fire({
                icon: "error",
                title: "Error al cargar los horarios del médico",
                text: "Hubo un error al cargar los horarios del médico."
            });
        });
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
    var view = new Citas();
    view.InitView();
});





