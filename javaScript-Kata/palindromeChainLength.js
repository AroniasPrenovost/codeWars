// Write a method palindrome_chain_length which takes a positive number 
// and returns the number of special steps needed to obtain a palindrome. 
// The special step is: "reverse the digits, and add to the original number". 
// If the resulting number is not a palindrome, repeat the procedure with the sum 
// until the resulting number is a palindrome.

// If the input number is already a palindrome, the number of steps is 0.

// Input will always be a positive integer.


var palindromeChainLength = function(n) {

// checks if number is a palindrome - returns boolean value (t/f) 
 function checkPalindrom(n) {
 var bvalue = n == n.split("").reverse().join(""); // get the boolean value external of the function 
}

if (bvalue = true) {
return "this is a palindrome";
} else { // keep checking 
return "this isn\'t at all!"; 
	}
}; // close function 
palindromeChainLength("2002");




// for reference - thsi gives me a boolean value 
function checkPalindrom(n) {
 return n == n.split("").reverse().join("");
}
checkPalindrom("2002");
// true