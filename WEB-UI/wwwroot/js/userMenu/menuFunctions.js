
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
})

