function MapView() {
    var mapCanvas = $('#map-canvas')[0];

    this.placeMap = function(mapOptions) {
        return new google.maps.Map(mapCanvas, mapOptions);
    };
};