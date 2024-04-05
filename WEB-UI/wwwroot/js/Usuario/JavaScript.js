function CrearUsuario() {
    this.InitView = function () {
        $("Registro").click(function () {
            var view = CrearUsuario();
            view.SubmitCreateUsuario();
        }
    });
    this.PopulateSpecialities();
}
this.SubmitCreateUsuario = function () {
    var usuario = {};
    usuario.nombre = ${"Nombre"}

}
