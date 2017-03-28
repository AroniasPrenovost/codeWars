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
// --------------- ONE ------------------------ // 
if (one !== undefined) {
	if (one.length > 30) {
var subs = one.split("-"); // turn it to array of substrings
var filtArray = subs.filter(function(a){return a !== "the" && a !== "of" && a !== "in" && a !== "from" && a !== "by" && a !== "with" && a !== "and" && a !== "or" && a !== "for" && a !== "to" && a !== "at" && a !== "a" });
// return newarr;
var acronimyze = [];
for( var i=0; i<filtArray.length; i++ ) {
	acronimyze.push( filtArray[i].charAt(0) );
}
var acronymn1 = acronimyze.join().replace(/,/g, "").toUpperCase();
} else {
	var acronymn1 = arrayElements[0].toUpperCase();
} 
var onee = "<a href=\"/" + one + "/\">" + acronymn1 + "</a>";  // follow this example for formatting
finalString.push(onee);
} 
// --------------- TWO ------------------------ // 
if (two !== undefined) {

	if (two.length > 30) {
var subs = two.split("-"); // turn it to array of substrings
var filtArray = subs.filter(function(a){return a !== "the" && a !== "of" && a !== "in" && a !== "from" && a !== "by" && a !== "with" && a !== "and" && a !== "or" && a !== "for" && a !== "to" && a !== "at" && a !== "a" });
// return newarr;
var acronimyze = [];
for( var i=0; i<filtArray.length; i++ ) {
	acronimyze.push( filtArray[i].charAt(0) );
}
var acronymn2 = acronimyze.join().replace(/,/g, "").toUpperCase();
} else {
	var acronymn2 = arrayElements[1].toUpperCase();
} 
var twoo = "<a href=\"/" + one + "/" + two + "/\">" + acronymn2 + "</a>"
finalString.push(twoo);
}
// --------------- THREE ------------------------ // 
if (three !== undefined) {
	if (three.length > 30) {
var subs = three.split("-"); // turn it to array of substrings
var filtArray = subs.filter(function(a){return a !== "the" && a !== "of" && a !== "in" && a !== "from" && a !== "by" && a !== "with" && a !== "and" && a !== "or" && a !== "for" && a !== "to" && a !== "at" && a !== "a" });
// return newarr;
var acronimyze = [];
for( var i=0; i<filtArray.length; i++ ) {
	acronimyze.push( filtArray[i].charAt(0) );
}
var acronymn3 = acronimyze.join().replace(/,/g, "").toUpperCase();
} else {
	var acronymn3 = arrayElements[2].toUpperCase();
} 
var threee = "<a href=\"/" + one + "/" + two + "/" + three + "/\">" + acronymn3 + "</a>"
finalString.push(threee);
}
// --------------- FOUR ------------------------ // 
if (four !== undefined) {
	if (four.length > 30) {
var subs = four.split("-"); // turn it to array of substrings
var filtArray = subs.filter(function(a){return a !== "the" && a !== "of" && a !== "in" && a !== "from" && a !== "by" && a !== "with" && a !== "and" && a !== "or" && a !== "for" && a !== "to" && a !== "at" && a !== "a" });
// return newarr;
var acronimyze = [];
for( var i=0; i<filtArray.length; i++ ) {
	acronimyze.push( filtArray[i].charAt(0) );
}
var acronymn4 = acronimyze.join().replace(/,/g, "").toUpperCase();
} else {
	var acronymn4 = arrayElements[3].toUpperCase();
} 
var fourr = "<a href=\"/" + one + "/" + two + "/" + three + "/" + four + "/\">" + acronymn4 + "</a>"
finalString.push(fourr);
}
var spanEe = "<span class=\"active" + "\">" + spanE.toUpperCase() + "</a>"
finalString.push(spanEe);
return finalString.join().replace(/,/g , separator);
}
generateBC("mysite.com/very-long-url-to-make-a-sillcc/mysitestruff/test/holidays.html", " + ");