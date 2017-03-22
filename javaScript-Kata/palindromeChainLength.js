// Write a method palindrome_chain_length which takes a positive number 
// and returns the number of special steps needed to obtain a palindrome. 
// The special step is: "reverse the digits, and add to the original number". 
// If the resulting number is not a palindrome, repeat the procedure with the sum 
// until the resulting number is a palindrome.

// If the input number is already a palindrome, the number of steps is 0.
// Input will always be a positive integer.

var palindromeChainLength = function(n) {
// checks if number is a palindrome - returns boolean value (t/f)
var bvalue = n == n.split("").reverse().join(""); 
if (bvalue === true) {
return 0;

} else {
	return "it isn\'t a palindrome";
	}
}; // close function
palindromeChainLength("2044102");
"false"

// need to count how many times it calculates and attach 
// that to non-palindrome numbers 