﻿$(document).ready(function () {

    $('#map-canvas').click(function (event) {
        event.preventDefault();

        $.ajax({
            url: "api/search?searchterm=anything",
            //data: {searchterm: term}
            type: 'GET',
            contentType: 'application/json',
            success: function (data) {

                var infoWindowContent = [];
                var infoWindow = new google.maps.InfoWindow({ maxWidth: 200 });
                var marker, i;

                for (i = 0; i < data.length; i++) {
                    //var position = new google.maps.LatLng(data[i].Latitude, data[i].Longitude);
                    bounds.extend(data[i].Point);
                    marker = new google.maps.Marker({
                        position: data[i].Point,
                        map: map,
                        title: data[i].Title
                    });

                    for (var j = 0; j < data.length; j++) {
                        infoWindowContent.push(['<div class="info_content">' + '<h5>' + data[j].Title + '</h5>' +
                        '<p>' + data[j].Description + '</p>' +
                        '<p> Start time: ' + data[j].Start + '</p>' +
                        '<p> <a href=\"' + data[j].Link + '\">More info</a>' + '</div>']);
                    }
                    google.maps.event.addListener(marker, 'click', (function (marker, i) {
                        return function () {
                            infoWindow.setContent(infoWindowContent[i][0]);
                            infoWindow.open(map, marker);

                        }
                    })(marker, i));

                    google.maps.event.addListener(infoWindow, 'click', function () {
                        if (infoWindow) {
                            infoWindow.close();
                        }

                    });
                    map.fitBounds(bounds);
                }
                var boundsListener = google.maps.even.addListener((map), 'bounds_changed', function (event) {
                    this.setZoom(14);
                    google.maps.removeListener(boundsListener);
                });
            }
        });

    });
})