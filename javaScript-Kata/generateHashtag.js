function generateHashtag (str) {
	if (str.length + 1 > 140) {
		return false;
	} else if (str.length > 0) {
		upperCase = str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
		return "#" + upperCase.replace(/ /g, ""); 
	} else {
		return false;
	}
}
generateHashtag("This is my string");
// returns "#ThisIsMyString"



