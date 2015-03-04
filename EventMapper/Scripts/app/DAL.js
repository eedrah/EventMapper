function Dal() {
    this.downloadData = function(callback) {
        $.ajax({
            url: "api/search?searchterm=anything",
            //data: {searchterm: ""}
            type: 'GET',
            dataType: 'json',
            success: callback(data),
            error: function(xhr, status, errorThrown) {
                alert("Sorry, there was a problem!");
                console.log("Error: " + errorThrown);
                console.log("Status: " + status);
                console.dir(xhr);
            }
        });
    };
};