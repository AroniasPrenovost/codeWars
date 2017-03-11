// Complete the method so that it does the following:
// Removes any duplicate query string parameters from the url
// Removes any query string parameters specified within the 
// 2nd argument (optional array)


function stripUrlParams(url, paramsToStrip){
// complete me

// checks if if has query string
if (url.split("?").length - 1 > 0) {

// turns paramsToString to string
var pString = paramsToStrip.toString(); 

// returns query string
var qString = url.substring(url.indexOf(".com") + 4); 
// make qString 8 characters max - double checks
var length = 8;
var trimmedString = qString.substring(0, length);
//  return trimmedString;

// removes paramsToStrip matches
// BUT it's a WIP since need to remove that +2 spaces
var x = trimmedString.split(pString).join('');
// return x;

var second = x.charAt(5);
var first = x.charAt(1);

// if the 6th spot of the array = "=", slice after the &
if (first === "=") {
	var bindex = 1; var eindex = 4; 
	var finalq = x.slice(0, bindex) + x.slice(eindex);
	return finalq;
// if first area is a match
} else if (second === "=") {
	var finalq = x.split('&')[0];
	return finalq;
} else {
	var finalq = x;
	return finalq;
}

} else {
//	return url;
}

// removes query string
var plainUrl = url.substring(0, url.indexOf("?"));


}
stripUrlParams("www.chat.com?a=1&b=1", ["a"]);