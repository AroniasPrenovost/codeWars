function generateBC(url, separator) {
// grab everything after .com until any instance of .html, .asp, .htm, .php
var urlString = url.substring(url.indexOf(".com") + 4).split("index")[0].split('.')[0];  
var lengthn = urlString.split("/").length-1;

// turns breadcrumb string into array of substrings
// using .filter and Boolean property removes empty substrings
var arrayElements = urlString.split(/[/\/]/).filter(Boolean);
// assign and remove span value from array 
var spanE = arrayElements.splice(-1)[0];

// length of array after span value is taken
var aLength = arrayElements.length;
var one = arrayElements[0];
var two = arrayElements[1];
var three = arrayElements[2];
var four = arrayElements[3];
var finalString = ["<a href=\"/\">HOME</a>"];

if (one !== undefined) {
var onee = "<a href=\"/" + one + "/\">" + one.toUpperCase() + "</a>";  // follow this example for formatting 
finalString.push(onee);
} 
if (two !== undefined) {
	var twoo = "<a href=\"/" + one + "/" + two + "/\">" + two.toUpperCase() + "</a>"
	finalString.push(twoo);
}
if (three !== undefined) {
	var threee = "<a href=\"/" + one + "/" + two + "/" + three + "/\">" + three.toUpperCase() + "</a>"
	finalString.push(threee);
}
if (four !== undefined) {
	var fourr = "<a href=\"/" + one + "/" + two + "/" + three + "/" + four + "/\">" + four.toUpperCase() + "</a>"
	finalString.push(fourr);
}
var spanEe = "<span class=\"active" + "\">" + spanE.toUpperCase() + "</a>"
finalString.push(spanEe);
return finalString.join().replace(/,/g , separator);
}
generateBC("mysite.com/pictures/mysitestruff/holidays.html", " + ");



