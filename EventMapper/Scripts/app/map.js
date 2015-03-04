var map;
var bounds;
function initialize() {
    bounds = new google.maps.LatLngBounds();
    var mapOptions = {
        zoom: 7,
        center: new google.maps.LatLng(-41.1475787, 175.540889)
    };

    map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

}

google.maps.event.addDomListener(window, 'load', initialize);

