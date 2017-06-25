// Write a function called validParentheses that 
// takes a string of parentheses, and determines if 
// the order of the parentheses is valid. 
function validParentheses(parens){
// find number of occurences 
	var obracket = parens.split("(").length - 1;
	var cbracket = parens.split(")").length - 1;
// if first or last parens are outward facing - invalid
var first = parens.charAt(0);
var last = parens.substr(parens.length - 1); 
if (first === ")" || last === "(") {
	return false;
} else if (obracket === cbracket) {
// find if brackets are actually valid
var res = parens.replace(/\(\)/g, ""); // removes current matches {}

// end test 
	return true;
} else {
	return false;
	}
}
validParentheses( "(()()()()()()()()())" );

/*
function validParentheses(parens){
var res = parens.replace(/\(\)/g, "");
return res;
  }

validParentheses( "(()(())()()()()()()()())" );
*/











