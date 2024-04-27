var idSede = null;
var idEspecialidad = null;
var infoSedes = [];
var infoEspecialidad = [];
var idCupo = null;
function Configure() {
    
    
    this.InitView = function () {
        $('#btn-save').click(function () {
            var view = new Configure();
            view.InsertCuposConfig();
        });
        $('#btn-update').click(function () {
            var view = new Configure();
            view.UpdateCupos();
        });
        this.PopulateSpecialties();
        this.PopulateSedes();
        this.GetCupos();
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
            console.log(data)
            var select = $('#ddlSedes');
            select.find('option').remove();

            for (var row in data) {
                select.append('<option value=' + data[row].id + '>' + data[row].nombre + '</option>')
            }
            select.on('change', function () {
                let id = $(this).val();
                
                idSede = id;
                console.log(idSede)
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
    this.InsertCuposConfig = function () {
        let cupos = {};
        cupos.id = generateUniqueId();
        cupos.cronometro = 30;
        cupos.nombreEspecialidad = "string";
        cupos.nombreSede = "string";
        cupos.cantidad = $('#txtCantidad').val();

        console.log(idEspecialidad,idSede); 

        this.RevisarExistenciaDeSedeEspecialidad(idEspecialidad, idSede, function (existe) {
            if (existe) {
                var api_url = API_URL_BASE + "/api/Cupos/CreateCupos";
                $.ajax({
                    headers: {
                        'Accept': "application/json",
                        'Content-Type': "application/json"
                    },
                    method: "POST",
                    url: api_url + "?idEspecialidad=" + idEspecialidad + "&idSede=" + idSede,
                    contentType: "application/json;charset=utf-8",
                    dataType: "json",
                    data: JSON.stringify(cupos),
                    hasContent: true
                }).done(function (result) {
                    Swal.fire({
                        title: "success",
                        icon: "success",
                        text: "Creación de cupo exitosa!",
                        timer: 2000
                    }).then(
                        function () {
                            var view = new Configure();
                            view.InitView();
                        }
                    );
                }).fail(function (error) {
                    Swal.fire({
                        title: "error",
                        icon: "error",
                        text: "Error al guardar el cupo: " + error,
                        timer: 2000
                    });
                });
            } else {
                Swal.fire({
                    title: "Información",
                    icon: "info",
                    text: "Revisar si la sede dispone de dicha especialidad.",
                    timer: 2000
                });
            }
        });
    };

    this.RevisarExistenciaDeSedeEspecialidad = function (idEspecialidad, idSede, callback) {
        var api_url = API_URL_BASE + "/api/SedeEspec/GetSedeEspecialidadesBySedeIdAndEspecialidadId";
        console.log(idEspecialidad, idSede)
        $.ajax({
            url: api_url + "?id_sede=" + idSede + "&id_especialidad=" + idEspecialidad,
            method: "GET",
            contentType: "application/json;charset=utf-8",
            dataType: "json"
        }).done(function (result) {
            console.log(result)
            if (!result || result.id == 0 || result.id == null) {
                callback(false);
            } else {
                callback(true);
            }

        }).fail(function (error) {
            callback(false);
        });
    };

    
    
    this.GetCupos = function () {
        var apiUrl = API_URL_BASE + "/api/Cupos/GetCupos";
        
        $.ajax({
            url: apiUrl,
            method: "GET",
            contentType: "application/json;charset=utf-8",
            dataType: "json"
        }).done(function (result) {
            //console.log(result)
            if (result)
                
                cuposGridOptions.api.setRowData(result);
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error de Ejecucion',
                    text: 'Hubo un error! ' + result.message
                })
            }
        }).fail(function (error) {
            Swal.fire({
                title: "Error",
                icon: "error",
                text: "Error al cargar los cupos" + error,
                timer: 2000
            });
        });
    }

   

    this.GetCuposDetails = function (id) {
        


        var apiUrl = API_URL_BASE + "/api/Cupos/GetCupoById";
        $.ajax({
            url: apiUrl + "?id=" + id,
            method: "GET",
            contentType: "application/json;charset=utf-8",
            dataType: "json"
        }).done(function (result) {
            console.log('El cupo seleccionado es:"', result)
            idCupo=result.id

            $('#txtCantidad').val(result.cantidad);

            var selectEspecialidades = $('#ddlEspecialidades');
            selectEspecialidades.find('option').remove();
            selectEspecialidades.append('<option value="' + result.id + '">' + result.nombreEspecialidad + '</option>');
            selectEspecialidades.val(result.id);



            var selectSedes = $('#ddlSedes');
            selectSedes.find('option').remove();
            selectSedes.append('<option value="' + result.id + '">' + result.nombreSede + '</option>');
            selectSedes.val(result.id);
            
            
        }).fail(function (error) {
            console.log("Error del ajax ", error);
            Swal.fire({
                icon: "error",
                title: "Error al cargar el detalle del paciente",
                text: "Hubo un error " + error
            });
        });

       
    }
    this.UpdateCupos = function () {

       

        var cupo = {};
        cupo.cantidad = $('#txtCantidad').val();
        cupo.id = idCupo;
        cupo.cronometro = 30;
        cupo.nombreSede = "string";
        cupo.nombreEspecialidad = "string";


        var apiUrl = API_URL_BASE + "/api/Cupos/UpdateCupos";
        console.log(cupo)

        $.ajax({
            headers: {
                'Accept': "application/json",
                'Content-Type': "application/json"
            },
            method: "PUT",
            url: apiUrl,
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            data: JSON.stringify(cupo),
            hasContent: true
        }).done(function (result) {
            Swal.fire({
                title: "success",
                icon: "success",
                text: "Cupo actualizado",
                timer: 2000
            }).then(
                function () {
                    var view = new Configure();
                    view.PopulateSpecialties();
                    view.PopulateSedes();
                    view.GetCupos();
                    
                }
            )
            

            

        }).fail(function (error) {
            console.log("Error del ajax ", error);
            Swal.fire({
                icon: "error",
                title: "Error al actulizar el cupo",
                text: "Hubo un error " + error
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
        var view = new Configure();
        view.InitView();
    });

