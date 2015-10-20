requirejs.config({
    paths: {
        magellan: "../bower_components/magellan/magellan"
    }
});


require(["Shop", "Home"], function (Shop, Home) {
  	"use strict";

	var noPlaceLikeHome = new Home("Hjem", 59.922315, 10.49115, "A+M+M+M+H");
	var meny = new Shop("Meny", 59.924399, 10.485839, "Dagligvarer", "9-22 (9-20)");
	
	console.log(noPlaceLikeHome.toString());
	console.log(meny.toString());
	
	console.log("Hei fra app.js");
	
});






