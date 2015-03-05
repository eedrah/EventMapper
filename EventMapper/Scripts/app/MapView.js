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
        var closeOnMouseout;
        google.maps.event.addListener(marker.googleMarker, 'mouseover', function() {
            marker.infoWindow.open(map, marker.googleMarker);
            closeOnMouseout = google.maps.event.addListenerOnce(marker.googleMarker, 'mouseout', function () {
                marker.infoWindow.close();
            });
        });
        google.maps.event.addListener(marker.googleMarker, 'click', function () {
            google.maps.event.removeListener(closeOnMouseout);
            google.maps.event.addDomListener(marker.infoWindow.getContent(), 'mouseleave', function() {
                marker.infoWindow.close();
            });
        });
    };
};