
$(document).ready(function () {

    var usuarios = [
        { identificacion: "1223", correo: "Juan@gmail.com", nombre: "Juan", rol: "Doctor", estado: "Activo" }
    ];

    var usuarioTableBody = $("#usuariosTableBody");

    usuarioTableBody.empty();

    var detallesUsuarioUrl = "/Administrador/DetallesUsuario";

    usuarios.forEach(function (usuario) {
        var row = "<tr>" +
            "<td>" + usuario.identificacion + "</td>" +
            "<td>" + usuario.correo + "</td>" +
            "<td>" + usuario.nombre + "</td>" +
            "<td>" + usuario.rol + "</td>" +
            "<td>" + usuario.estado + "</td>" +
            "<td>" +
            "<a href='" + detallesUsuarioUrl + "' class='btn btn-success'><i class='bi bi-eye'></i></a>" +
            "<a href='#' class='btn btn-danger'><i class='bi bi-trash'></i></a>" +
            "</td>" +
            "</tr>";
        usuarioTableBody.append(row);
    });
});



 