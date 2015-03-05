function MapView() {
    var mapCanvas = $('#map-canvas')[0];

    this.placeMap = function(mapOptions) {
        return new google.maps.Map(mapCanvas, mapOptions);
    };

    this.placeEventMarkers = function (mapModel) {
        mapModel.markers.forEach(function(marker) {
            marker.googleMarker.setMap(mapModel.map);
            bindMarkerOpenOnHover(marker, mapModel.map);
        });
    };

    function bindMarkerOpenOnHover(marker, map) {
        google.maps.event.addListener(marker.googleMarker, 'mouseover', function() {
            marker.infoWindow.open(map, marker.googleMarker);
        });
        var closeOnMouseout = google.maps.event.addListener(marker.googleMarker, 'mouseout', function () {
            marker.infoWindow.close();
        });
        google.maps.event.addListener(marker.googleMarker, 'click', function () {
            google.maps.event.removeListener(closeOnMouseout);
            google.maps.event.addListener(marker.infoWindow.getContent(), 'click', function() {
                console.log('mouseout');
                console.log(marker);
                marker.infoWindow.close();
            });
        });
    };
};