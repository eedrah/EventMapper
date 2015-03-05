
google.maps.event.addDomListener(window, 'load', appStart);
// $(appStart);

function appStart() {
    var mapController = new MapController();
    mapController.loadMap();
};