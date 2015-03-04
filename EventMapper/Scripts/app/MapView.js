function MapView() {
    var mapCanvas = $('#map-canvas');

    this.chooseElementToPlaceMap = function(callback) {
        callback(mapCanvas);
    };
};