
google.maps.event.addDomListener(window, 'load', appStart);

// $(appStart);

function appStart() {
    var map = loadMap();
    loadEvents(map);
};

function loadMap() {
    var mapOptions = {
        zoom: 9,
        center: { lat: -41.1475787, lng: 175.540889 }
    };
    return new google.maps.Map($("#map-canvas")[0], mapOptions);
};

function loadEvents(map) {
    
};