function MapView() {
    var mapCanvas = $('#map-canvas')[0];

    this.chooseElementToPlaceMap = function(callback) {
        callback(mapCanvas);
    };
};