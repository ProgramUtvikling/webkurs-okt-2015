define(["Place"], function(Place){
    "use strict";

    function Shop(title, latitude, longitude, whatDoTheySell, openHours) {
        Place.apply(this, arguments);
        this.whatDoTheySell = whatDoTheySell;
        this.openHours = openHours;
    }
    Shop.prototype = Object.create(Place.prototype);
    
    return Shop;    
});

