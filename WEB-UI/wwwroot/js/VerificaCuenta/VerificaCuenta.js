function setCorreoValue() {
    $("#Correo").val(sessionStorage.getItem("correo"));

}


$(document).ready(function () {
    console.log(sessionStorage.getItem("correo"));
    setCorreoValue();
});