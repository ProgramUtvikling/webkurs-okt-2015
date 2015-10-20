
define(function(){
    "use strict";

    function Place(title, latitude, longitude) {
        this.title = title;
        this.latitude = latitude;
        this.longitude = longitude;
    }
    Place.prototype.toString = function () {
        return this.title + " (pos: " + this.longitude + " " + this.longitude + ")";
    }

    return Place;    
});






