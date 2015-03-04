function MapModel() {
    //this.map
    var markers = [];
    var dal = new Dal();

    this.createMapOnElement = function(fnPlaceMap) {
        var mapOptions = {
            zoom: 9,
            center: { lat: -41.1475787, lng: 175.540889 }
        };
        this.map = fnPlaceMap(mapOptions);
    };

    this.refreshEvents = function(fnPlaceEventMarkers) {
        //todo: clear all current events?
        dal.downloadData(function(json) {
            this.createMarkers(fnPlaceEventMarkers, json);
        }.bind(this));
    };

    this.createMarkers = function (fnPlaceEventMarkers, json) {
        json.forEach(this.createMarker);
        fnPlaceEventMarkers(markers);
    };

    this.createMarker = function(eventJson) {

    };
};