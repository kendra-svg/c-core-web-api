$(document).ready(function () {

    var usuarios = [
        { identificaion: "1232342",nombre: "Juan ", apellidos: "Perez", rol: "Doctor" , },
       

    ];


    var usuarioTableBody = $("#usuariosTableBody");


    usuarioTableBody.empty();


    var detallesUsuarioUrl = "/Administrador/VerUsuarios";

    usuarios.forEach(function (usuarios) {
        var row = "<tr>" +
            "<td>" + usuarios.identificaion + "</td>" +
            "<td>" + usuarios.nombre + "</td>" +
            "<td>" + usuarios.apellidos + "</td>" +
            "<td>" + usuarios.rol + "</td>" +
            "<td>" +
            "<a href='" + detallesUsuarioUrl + "'class='btn btn-sm btn-success'><i class='bi bi-eye'></i></a>" +
            "</td>" +
            "</tr>";
        usuarioTableBody.append(row);
    });
});

