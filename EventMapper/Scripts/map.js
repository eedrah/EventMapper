var map;
function initialize() {
    var mapOptions = {
        zoom: 9,
        center: new google.maps.LatLng(-41.1475787, 175.540889)
    };

    map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

    var markers = [
    ['Wellington Raw Comedy Quest', -41.294, 174.7753]
    ['WIT\'s Worldwide Wellington Tour', -41.2179, 175.4596]
    ['Wellington Chamber Orchestra', -41.2801, 174.7753]
    ];


    for (var i = 0; i < markers.Length; i++) {
        var position = new google.maps.Latlng(markers[i][1], markers[i][2]);
        bounds.extend(position);
        markers = new google.maps.Marker({
            position: position,
            map: map,
            title: markers[i][0]
        });

    }

    }

google.maps.event.addDomListener(window, 'load', initialize);

