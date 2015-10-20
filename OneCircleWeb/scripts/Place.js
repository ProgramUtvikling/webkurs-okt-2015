
define(["magellan"], function(magellan){
    "use strict";

    function Place(title, latitude, longitude) {
        this.title = title;
        this.latitude = latitude;
        this.longitude = longitude;
    }
    Place.prototype.toString = function () {
        var lat = magellan(this.latitude).latitude().toDMS()
        var lon = magellan(this.longitude).longitude().toDMS()
        return this.title + " (pos: " + lat + " " + lon + ")";
    }

    return Place;    
});






