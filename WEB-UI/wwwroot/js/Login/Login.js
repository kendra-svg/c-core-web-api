function LoginView() {
    this.Validate = function () {
        var div = $('#validations')

        if (div.text() !== "") {
            Swal.fire({
                icon: 'error',
                text: div.text(),
                title: 'Error'
            });

            $('#Correo').val('');
            $('#Contrasenna').val('');

            return false;
        }
        return true;
    }

}

$(document).ready(function () {
    $('#Correo').attr('autocomplete', 'off');
    $('#Contrasenna').attr('autocomplete', 'off');
    $('form').submit(function (event) {
        var view = new LoginView();
        if (!view.Validate()) {
            event.preventDefault();
        }
    });
});
