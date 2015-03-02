google.maps.event.addDomListener(window, 'load', initialize);

function initialize() {
    var mapOptions = {
        center: { lat: -34.397, lng: 150.644},
        zoom: 8
    };
    var map = new google.maps.Map(
        document.getElementById('map-canvas'),
        mapOptions
    );

    var marker = new google.maps.Marker({
        position: map.getCenter(),
        map: map, // or marker.setMap(map);
        title: 'This is my hover text'
    });

    var infoWindow = new google.maps.InfoWindow();
    infoWindow.setContent("<p>Surely there is a better way to pass html... jQuery?</p>");
    infoWindow.setPosition(marker.getPosition());

    google.maps.event.addListener(marker, 'click', function(){
        infoWindow.open(map);
    });
};
