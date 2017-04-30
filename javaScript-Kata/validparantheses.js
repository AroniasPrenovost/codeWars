// Write a function called validParentheses that 
// takes a string of parentheses, and determines if 
// the order of the parentheses is valid. 
function validParentheses(parens){
	var obracket = parens.split("(").length - 1;
	var cbracket = parens.split(")").length - 1;
// if first or last parens are outward facing - invalid
var first = parens.charAt(0);
var last = parens.substr(parens.length - 1); 
if (first === ")" || last === "(") {
	return false;
} else if (obracket === cbracket) {
	return true;
} else {
	return false;
	}
}