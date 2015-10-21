

define(["Entities/MittNamespace"], function (ns) {
  	"use strict";

	var noPlaceLikeHome = new ns.Home("Hjem", 59.922315, 10.49115, "A+M+M+M+H");
	var meny = new ns.Shop("Meny", 59.924399, 10.485839, "Dagligvarer", "9-22 (9-20)");
	
	console.log(noPlaceLikeHome.toString());
	console.log(meny.toString());
	
	console.log("Hei fra app.js");
});






