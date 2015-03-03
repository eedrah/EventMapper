function initialize() {
    var mapOptions = {
        zoom: 9,
        center: new google.maps.LatLng(-41.1475787, 175.540889)
    };

   var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
    
}

google.maps.event.addDomListener(window, 'load', initialize);

