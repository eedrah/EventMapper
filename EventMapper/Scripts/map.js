//var json_array = JSON.parse(json_string);

//var markers = [];

//function eventObjects(array) {
//    for (var i = 0; i < array.length; i++) {
//        markers.push(array[i]);

//    }
//}

var markers = [
    ["Title", -41, 175],
];
//eventObjects(json_array);

function initialize() {
    var mapOptions = {
        zoom: 9,
        center: new google.maps.LatLng(-41.1475787, 175.540889)
    };

   var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

    var marker, i;

    for (i = 0; i < markers.length; i++) {
      marker = new google.maps.Marker({
            position: new google.maps.LatLng(markers[i][0],markers[i][1]),
            map: map,
            title: markers[i][2]
        });

    }
    
}

google.maps.event.addDomListener(window, 'load', initialize);

