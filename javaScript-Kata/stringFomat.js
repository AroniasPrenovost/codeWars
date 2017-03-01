// Given: an array containing hashes of names
// Return: a string formatted as a list of names 
// separated by commas except for the last two names, 
// which should be separated by an ampersand.

function list(names){
// counts number of distinct names in onject literal 
var n = 0;
for (name in names) n++;
// number is always +1 the index, so we need to remove 1 
var namelist = n - 1;
var result = []; 
for (var i = 0; i < names.length; i++) {
	result.push(names[i].name);
} 
if (namelist > 2) {
// adds space after commas 
var manyNames = result.join().replace(/,/g, ', ');
var strReplacedWith = " &";
var currentIndex = manyNames.lastIndexOf(",");
var answer = manyNames.substring(0, currentIndex) + strReplacedWith + manyNames.substring(currentIndex + 1, manyNames.length);
return answer;
} else if (namelist === 2) {
// converts to string and reformats 
var twoNames = result.join().replace(',',' & ');
return twoNames;
	} else if (namelist === 1) {
	return result.join();
} else {
	return result.join();
	}
}

list([{name: "Bart"}, {name: "lisa"}, {name: "Maggies"}, {name: "Marge"}]);
// returns 'Bart, Lisa, Maggie, Homer & Marge'