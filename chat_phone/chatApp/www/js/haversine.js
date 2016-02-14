var R = 6371000; //Earth's radius in metres
var lat1Rad = lat1.toRadians();
var lat2Rad = lat2.toRadians();
var deltaLat = (lat2-lat1).toRadians();
var deltaLon = (lon2-lon1).toRadians();

var a = Math.sin(deltaLat/2) * Math.sin(deltaLat/2) +
		Math.cos(lat1Rad) * Math.cos(lat2Rad) *
		Math.sin(deltaLon/2) * Math.sin(deltaLon/2);
var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));  //angular distance in radians

var d = R * c;	//distance between the two points