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
        var $link = $('<a>').text("More details").attr('href', json.Link).addClass('link');
        var $description = $('<p>').text(json.Description).addClass('description');
        var $title = $('<h5>').text(json.Title).addClass('title');
        var $locationSummary = $('<h6>').text(json.LocationSummary).addClass('locationSummary');
        var $start = $('<em>').text(json.Start).addClass('start');
        var $end = $('<em>').text(json.End).addClass('end');
        var $dateSummary = $('<em>').text(json.DateSummary).addClass('dateSummary');

        $windowBody = $('<div>').addClass('eventPopup');
        $windowBody.append($title)
            .append($dateSummary)
            .append($description)
            .append($locationSummary)
            .append($start)
            .append($end)
            .append($link);
    };

    function createInfoWindow() {
        selfMarker.infoWindow = new google.maps.InfoWindow({ maxWidth: 300 });
        selfMarker.infoWindow.setContent($windowBody[0]);
    };

    function createGoogleMarker() {
        selfMarker.googleMarker = new google.maps.Marker({
            position: selfMarker.position
    });
    };
};