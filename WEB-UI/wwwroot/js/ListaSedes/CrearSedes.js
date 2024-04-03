document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("crearSedeForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Evitar que el formulario se envíe automáticamente

        // Obtener referencias a los campos del formulario
        var nombreSedeInput = document.getElementById("NombreSede");
        var descripcionInput = document.getElementById("Descripcion");
        var fechaCreacionInput = document.getElementById("FechaCreacion");
        // Agregar referencias a los demás campos de validación si es necesario

        // Validar cada campo
        var isValid = true;

        // Validar nombre de la sede
        if (!nombreSedeInput.value.trim()) {
            isValid = false;
            nombreSedeInput.classList.add("is-invalid"); // Agregar clase para resaltar en rojo
        } else {
            nombreSedeInput.classList.remove("is-invalid"); // Remover clase si el campo es válido
        }

        // Validar descripción
        if (!descripcionInput.value.trim()) {
            isValid = false;
            descripcionInput.classList.add("is-invalid"); // Agregar clase para resaltar en rojo
        } else {
            descripcionInput.classList.remove("is-invalid"); // Remover clase si el campo es válido
        }

        // Validar fecha de creación
        if (!fechaCreacionInput.value) {
            isValid = false;
            fechaCreacionInput.classList.add("is-invalid"); // Agregar clase para resaltar en rojo
        } else {
            fechaCreacionInput.classList.remove("is-invalid"); // Remover clase si el campo es válido
        }

        // Agregar validación para los demás campos si es necesario

        // Si todos los campos son válidos, envía el formulario
        if (isValid) {
            this.submit();
        }
    });
});
