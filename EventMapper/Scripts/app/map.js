var map;

// $(appStart);

function appStart() {
    var mapOptions = {
        zoom: 9,
        center: { lat: -41.1475787, lng: 175.540889 }
    };
    map = new google.maps.Map($("#map-canvas")[0], mapOptions);
};

google.maps.event.addDomListener(window, 'load', appStart);
