function MapModel() {
    //this.map
    //var dal = new Dal();

    this.createMapOnElement = function(fnPlaceMap) {
        var mapOptions = {
            zoom: 9,
            center: { lat: -41.1475787, lng: 175.540889 }
        };
        this.map = fnPlaceMap(mapOptions);
    };

    this.refreshEvents = function() {
        //todo: clear all current events?

    };
};