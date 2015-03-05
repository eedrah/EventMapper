function MapController() {
    var mapModel = new MapModel();
    var mapView = new MapView();

    this.loadMap = function() {
        mapModel.createMapOnElement(mapView.placeMap);
        mapModel.refreshEvents(mapView.placeEventMarkers);
    };
};