define(["Place"], function(Place){
    "use strict";
    
    function Home(title, latitude, longitude, whoLivesHere) {
        Place.apply(this, arguments);
        this.whoLivesHere = whoLivesHere;
    }
    Home.prototype = Object.create(Place.prototype);
    Home.prototype.toString = function(){
        return Place.prototype.toString.call(this) + ": " + this.whoLivesHere;
    }
    
    return Home;    
});

