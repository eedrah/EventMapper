var map;

//var json_array = JSON.parse(json_string);

function Event (title, start, end, lng, lat, url) {
    this.title = title;
    this.start = start;
    this.end = end;
    this.lng = lng;
    this.lat = lat;
    this.url = url;
}

var markers = [];

var eventsArray = [
['Wellington', -41.294, 174.7753],
['wellington chamber orchestra', -41.2801, 174.7753]
];

eventObjects(eventsArray);

function eventObjects(array) {
    for (var i = 0; i < array.length; i++) {
        markers.push(array[i]);

    }
}


function initialize() {
    var mapOptions = {
        zoom: 9,
        center: new google.maps.LatLng(-41.1475787, 175.540889)
    };

    map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
    
    //var markers = [
    //['Wellington Raw Comedy Quest', -41.294, 174.7753],
    //['WIT Worldwide Wellington Tour', -41.2179, 175.4596],
    //['Wellington Chamber Orchestra', -41.2801, 174.7753]
    //];

    var marker, i;

    for (i = 0; i < markers.length; i++) {
      marker = new google.maps.Marker({
            position: new google.maps.LatLng(markers[i][1],markers[i][2]),
            map: map,
            title: markers[i][0]
        });

    }
    
}

google.maps.event.addDomListener(window, 'load', initialize);

