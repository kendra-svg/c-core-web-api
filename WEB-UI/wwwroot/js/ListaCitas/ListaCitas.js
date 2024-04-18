$(document).ready(function () {

    var citas = [
        { fecha: "2024-04-02", inicio: "08:00", fin: "08:30", paciente: "Juan Perez", pagoCita: "Pendiente", estado: "Confirmada" },
        { fecha: "2024-04-03", inicio: "09:00", fin: "09:30", paciente: "María Rodriguez",  especialidad: "Oftamologia", pagoCita: "Completado", precio: "$120", estado: "Pendiente" },
        
    ];


    var citasTableBody = $("#citasTableBody");


    citasTableBody.empty();


    var detallesCitasUrl = "/Doctor/DetallesCitas";

    citas.forEach(function (cita) {
        var row = "<tr>" +
            "<td>" + cita.fecha + "</td>" +
            "<td>" + cita.inicio + "</td>" +
            "<td>" + cita.fin + "</td>" +
            "<td>" + cita.paciente + "</td>" +
            "<td>" + cita.pagoCita + "</td>" +
            "<td>" + cita.estado + "</td>" +
            "<td>" +
            "<a href='" + detallesCitasUrl + "'class='btn btn-sm btn-success'><i class='bi bi-eye'></i></a>" +
            "<button class='btn btn-sm btn-success'><i class='bi bi-pencil'></i></button>" +
            "<button class='btn btn-sm btn-danger'><i class='bi bi-trash'></i></button>" +
            "</td>" +
            "</tr>";
        citasTableBody.append(row);
    });
});
