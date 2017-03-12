// Complete the method so that it does the following:
// Removes any duplicate query string parameters from the url
// Removes any query string parameters specified within the 
// 2nd argument (optional array)


function stripUrlParams(url, paramsToStrip){
// complete me

// if url contains query string
if (url.split("?").length - 1 > 0) {

// turns paramsToString to string
var pString = paramsToStrip.toString(); 

// returns query string
var qString = url.substring(url.indexOf(".com") + 4); 
// make qString 8 characters max - double checks
var length = 8;
var trimmedString = qString.substring(0, length);

// removes paramsToStrip matches
var x = trimmedString.split(pString).join('');
// return x;

// removes query string
var plainUrl = url.substring(0, url.indexOf("?"));



var first = x.charAt(1);
var second = x.charAt(4);


// return "yes " + hasDuplicates;
// if querystring contains pString happens more than once 


// if both variables match parameters, don't return query string 
 if (first && second === "=") {

 var finalq = trimmedString.slice(0, 9);
	return plainUrl + finalq;
} else if (first === "=") {
	var bindex = 1; var eindex = 4;
	var finalq = x.slice(0, bindex) + x.slice(eindex);
	return plainUrl + finalq;
// if first area is a match
} else if (second === "=") {
	var finalq = x.split('&')[0];
	return plainUrl + finalq;
} else {
	var finalq = x;
	return plainUrl + finalq;
}

// if ir doesn't contain query string
} else {
	return url;
}

}
stripUrlParams("www.chat.com?a=1&a=1", ["a"]);

// still needs to account for a query string that look slike "?a=1&a=2"

