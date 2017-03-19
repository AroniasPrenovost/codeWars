// Complete the method so that it does the following:
// Removes any duplicate query string parameters from the url
// Removes any query string parameters specified within the 
// 2nd argument (optional array)

function stripUrlParams(url, paramsToStrip) {
// find query string and formats to max length
var rawQstring = url.substring(url.indexOf(".com") + 4);
var qStringLength = 8;
var qString = rawQstring.substring(0, qStringLength);
// removes query string
var plainUrl = url.substring(0, url.indexOf("?"));
// removes paramsToStrip matches
var x = qString.split(paramsToStrip).join('');
// if 1st or 2nd = "=", then remove + 2
var first = x.charAt(1);
// only true if previous is a match 
var second = x.charAt(4);
// only true if previous ins't a match
var third = x.charAt(5);
if (qString.length > 7) {
if (first === "=" && second === "=") {
	return plainUrl;
} else if (first !== "=" && third === "=") {   
	var fLength = 4;
	var fString = qString.substring(0, fLength);
	return plainUrl + fString;
} else if (first === "=" && second !== "=" ) { 
	var sString = qString.substring(5, fLength);
	return plainUrl + "?" + sString;
} else {
	var zLength = 4;
	var yString = qString.substring(0, zLength);
	return plainUrl + yString;
}
} else if (qString.length > 0) {
	if (first === "=") {
		return plainUrl;
	} return url;
} else {
return url;     
	}
}
stripUrlParams("www.chat.com?a=1&a=2", ["b"]);
// "www.chat.com?a=1"