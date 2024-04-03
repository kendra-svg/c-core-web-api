function initMap() {
    // Coordenadas del centro del mapa
    var myLatLng = { lat: 0, lng: 0 };

    // Opciones del mapa
    var mapOptions = {
        center: myLatLng,
        zoom: 8 // Zoom inicial
    };

    // Crear mapa
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
}