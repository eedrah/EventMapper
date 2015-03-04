$(document).ready(function () {

    var bounds = new google.maps.LatLngBounds();

    $('#map-canvas').click(function (event) {
        event.preventDefault();

        $.ajax({
            url: "api/search?searchterm=anything",
            //data: {searchterm: ""}
            type: 'GET',
            contentType: 'application/json',
            success: function (data) {

                var infoWindowContent = [];
                var infoWindow = new google.maps.InfoWindow({ maxWidth: 200 });
                var marker, i;
                for (i = 0; i < data.length; i++) {
                    var position = new google.maps.LatLng(data[i].Point.lat, data[i].Point.lng);
                    bounds.extend(position);
                    marker = new google.maps.Marker({
                        position: position,
                        map: map,
                        title: data[i].Title
                    });


                    for (var j = 0; j < data.length; j++) {
                        infoWindowContent.push([
                            '<div class="info_content">' + '<h5>' + data[j].Title + '</h5>' +
                            '<p>' + data[j].Description + '</p>' +
                            '<p>' + data[j].LocationSummary + '</p></div>']
                        );
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
                    //map.fitBounds(bounds);
                }
                //var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function (event) {
                //    this.setZoom(14);
                //    google.maps.event.removeListener(boundsListener);
                //});
            }
        });

    });
})
