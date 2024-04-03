document.addEventListener('DOMContentLoaded', function () {
    var sidebarMenu = document.getElementById('sidebar-menu');
    sidebarMenu.addEventListener('mouseout', function () {
        sidebarMenu.classList.add('active');
    });
    sidebarMenu.addEventListener('mouseover', function (event) {
        sidebarMenu.classList.remove('active');
    });
});