function LoginView() {
    this.Validate = function () {
        var div = $('#validations')

        if (div.text() !== "") {
            Swal.fire({
                icon: 'error',
                text: div.text(),
                title: 'Error'
            });

            /*   limpiarFormulario();*/
            /* return false;*/
        }

        /* return true;*/

    }
    /*segundoIntento = false;*/
}


function limpiarFormulario() {
    $('#Correo').val('');
    $('#Contrasenna').val('');

}

$(document).ready(function () {
    $('#Correo').attr('autocomplete', 'off');
    $('#Contrasenna').attr('autocomplete', 'off');
    //$('form').submit(function (event) {
    //    var view = new LoginView();
    //    //if (!view.Validate()) {
    //    //    event.preventDefault();
    //    //}
    //    view.Validate();
    //});
    var view = new LoginView();
    view.Validate();
    /*  ViewData.Clear();*/
    limpiarFormulario();
    /* ViewData.Clear();*/

});
