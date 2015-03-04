function Marker() {
    this.parseJson = function(eventJson) {
        this.infoWindow = new google.maps.InfoWindow({ maxWidth: 200 });
    };
};