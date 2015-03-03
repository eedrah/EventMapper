var map;
function initialize() {
    var mapOptions = {
        zoom: 13,
        center: new google.maps.LatLng(-41.2958703, 174.7981961)
    };

    map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

}
google.maps.event.addDomListener(window, 'load', initialize);


