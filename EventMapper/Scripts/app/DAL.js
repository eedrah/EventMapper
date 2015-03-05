function Dal() {
    this.downloadData = function(callback) {
        $.ajax({
            url: "api/search?searchterm=anything",
            //data: {searchterm: ""}
            type: 'GET',
            dataType: 'json',
            success: callback,
            error: function(xhr, status, errorThrown) {
                alert("Could not connect to the server!");
                console.log("Error: " + errorThrown);
                console.log("Status: " + status);
                console.dir(xhr);
            }
        });
    };
};