function Marker() {
    //this.position
    //this.infoWindow
    //this.googleMarker

    var selfMarker = this;
    var $windowBody;

    this.parseJson = function(json) {
        selfMarker.position = { lat: json.Point.lat, lng: json.Point.lng };
        createWindowBody(json);
        createInfoWindow();
        createGoogleMarker();
    };

    function createWindowBody(json) {
        var $link = $('<a>').text("More details").attr('href', json.Link);
        var $description = $('<p>').text(json.Description);
        var $title = $('<h5>').text(json.Title);
        var $locationSummary = $('<p>').text(json.LocationSummary)

        $windowBody = $('<div>').addClass('eventPopup');
        $windowBody.append($title)
            .append($description)
            .append($locationSummary)
            .append($link);
    };

    function createInfoWindow() {
        selfMarker.infoWindow = new google.maps.InfoWindow({ maxWidth: 200 });
        selfMarker.infoWindow.setContent($windowBody[0]);
    };

    function createGoogleMarker() {
        selfMarker.googleMarker = new google.maps.Marker({
            position: selfMarker.position
    });
    };
};