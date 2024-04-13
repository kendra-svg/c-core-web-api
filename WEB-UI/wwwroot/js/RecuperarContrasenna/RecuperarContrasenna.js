function CorreoValidation() {

    var self = this; 
    var view;
    self.InitView = function () {
        
        $(btnVerificar).click(function () {
            var view = new CorreoValidation();
            self.GetCorreo();
            
        });
    }

    this.GetCorreo = function (){
        url_base = "https://apisimepci.azurewebsites.net/api/Usuario/GetUserByCorreo";
        $.ajax({
            url: url_base + "?correo=" + $('#Correo').val(),
            method: "GET",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
        }).done(function (result) {
            console.log(result);
            RedirectEmailVerified();
            
        }).fail(function (error) {
            console.log("Error", error);
        });

    }

    this.RedirectEmailVerified = function () {
        window.location = "/VerificaOTP/VerificaOTP";
    }


}

$(document).ready(function () {

    var view = new CorreoValidation();
    view.InitView();
});
