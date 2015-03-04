function MapController() {
    var mapModel = new MapModel();
    var mapView = new MapView();

    this.loadMap = function() {
        mapModel.createMapOnElement(mapView.chooseElementToPlaceMap);
        mapModel.refreshEvents();
    };
};