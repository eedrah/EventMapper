$(document).ready(function () {

    $('#map-canvas').click(function (event) {
        event.preventDefault();

        $.ajax({
            url: "api/search?searchterm=anything",
            //data: {searchterm: term}
            type: 'GET',
            contentType: 'application/json',
            success: function (data) {

                var infoWindow = new google.maps.InfoWindow();
                var marker, i;
                for (i = 0; i < data.length; i++) {
                    //bounds.extend(position);
                    marker = new google.maps.Marker({
                        position: new google.maps.LatLng(data[i].Latitude, data[i].Longitude),
                        map: map,
                        title: data[i].Title
                    });
                }
            }
        });

    });
})
