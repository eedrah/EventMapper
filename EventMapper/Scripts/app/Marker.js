function Marker() {
    this.parseJson = function(eventJson) {
        this.infoWindow = new google.maps.InfoWindow({ maxWidth: 200 });

        var $link = $('<a>').text("More details").attr('href', eventJson.Link);
    };
};