
document.addEventListener('DOMContentLoaded', function () {
    var sidebarMenu = document.getElementById('sidebar-menu');
    sidebarMenu.addEventListener('mouseout', function () {
        sidebarMenu.classList.add('active');
    });
    sidebarMenu.addEventListener('mouseover', function (event) {
        sidebarMenu.classList.remove('active');
    });

    
    
    
    var otherOptions = document.getElementById('other-options');
    var otherOptionsList = document.getElementById('other-options-list');

    otherOptions.addEventListener('click', function () {
        otherOptionsList.style.display = 'block';
    });

    otherOptionsList.addEventListener('mouseover', function () {
        otherOptionsList.style.display = 'block';
    });
    otherOptionsList.addEventListener('mouseout', function () {
        otherOptionsList.style.display = 'none';
    });

    
    // Recuperar el correo electrónico almacenado en sessionStorage
    var storedUserEmail = sessionStorage.getItem('userEmail');
    console.log(storedUserEmail)

    // Mostrar el correo electrónico en el div correspondiente
    var userEmailElement = document.getElementById('user-email-display'); // Asegúrate de tener un elemento con el id "userEmail" donde quieras mostrar el correo
    if (userEmailElement) {
        userEmailElement.innerText= storedUserEmail; // Si es un input, usa .value; si es un elemento que muestra texto, usa .innerText o .textContent
    }

})

