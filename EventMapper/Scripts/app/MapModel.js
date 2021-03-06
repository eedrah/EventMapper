﻿function MapModel() {
    //this.map
    this.markers = [];
    var dal = new Dal();

    this.createMapOnElement = function(fnPlaceMap) {
        var mapOptions = {
            zoom: 15,
            center: { lat: -41.29, lng: 174.78 }
        };
        this.map = fnPlaceMap(mapOptions);
    };

    this.refreshEvents = function(fnPlaceEventMarkers) {
        //todo: clear all current events?
        dal.downloadData(function(json) {
            createMarkers(fnPlaceEventMarkers, json);
        });
    };

    var selfModel = this;
    function createMarkers(fnPlaceEventMarkers, json) {
        json.forEach(createMarker);
        fnPlaceEventMarkers(selfModel);
    };

    var markers = this.markers;
    function createMarker(eventJson) {
        var marker = new Marker();
        marker.parseJson(eventJson);
        markers.push(marker);
    };
};