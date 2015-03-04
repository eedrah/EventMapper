function Marker() {
    //this.position
    //this.infoWindow

    this.parseJson = function(json) {
        this.position = { lat: json.Point.lat, lng: json.Point.lng };

        var $link = $('<a>').text("More details").attr('href', json.Link);
        var $description = $('<p>').text(json.Description);
        var $title = $('<h5>').text(json.Title);
        var $locationSummary = $('<p>').text(json.LocationSummary)

        var $windowBody = $('<div>').addClass('eventPopup');
        $windowBody.append($title)
            .append($description)
            .append($locationSummary)
            .append($link);

        this.infoWindow = new google.maps.InfoWindow({ maxWidth: 200 });
        this.infoWindow.setContent($windowBody[0]);
    };
};