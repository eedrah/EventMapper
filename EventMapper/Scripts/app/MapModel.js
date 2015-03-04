﻿function MapModel() {
    //this.map
    var dal = new Dal();

    this.createMapOnElement = function(callback) {
        var mapOptions = {
            zoom: 9,
            center: { lat: -41.1475787, lng: 175.540889 }
        };
        var mapCreator = function(element) {
            this.map = new google.maps.Map(element, mapOptions);
        }.bind(this);
        callback(mapCreator);
    };

    this.refreshEvents = function() {
        //todo: clear all current events?

    };
};