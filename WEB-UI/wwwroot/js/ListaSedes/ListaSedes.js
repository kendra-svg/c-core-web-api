document.addEventListener("DOMContentLoaded", function () {
    // Definir los datos de las sedes
    var sedes = [
        { nombre: "Sede 1", descripcion: "Descripción de la sede 1", fechaCreacion: "2022-04-04" },
        { nombre: "Sede 2", descripcion: "Descripción de la sede 2", fechaCreacion: "2022-04-05" },
        { nombre: "Sede 3", descripcion: "Descripción de la sede 3", fechaCreacion: "2022-04-06" }
    ];

    // Obtener la referencia al cuerpo de la tabla
    var sedeTableBody = document.getElementById("sedeTableBody");

    // Iterar sobre los datos y construir las filas de la tabla
    sedes.forEach(sede => {
        var row = "<tr>" +
            "<td>" + sede.nombre + "</td>" +
            "<td>" + sede.descripcion + "</td>" +
            "<td>" + sede.fechaCreacion + "</td>" +
            "<td>" +
            "<a class='btn btn-sm btn-outline-success'><i class='bi bi-eye'></i></a>" +
            "<button class='btn btn-sm btn-success'><i class='bi bi-pencil'></i></button>" +
            "<button class='btn btn-sm btn-danger'><i class='bi bi-trash'></i></button>" +
            "</td>" +
            "</tr>";
        sedeTableBody.innerHTML += row;
    });
});
