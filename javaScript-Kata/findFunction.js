function domainName(url){
// http
var res = url.slice(7);

// https
var nes = url.slice(8);

// www.
var bes = url.slice(4);

var y = url.includes("www.");
var n = url.includes("http:");

// if url started with one of those ^
if (n = true) {
	return res.split('.')[0];
} else if (y = true) {
	return bes.split('.')[0];
} else {
	return nes.split('.')[0];
}
}