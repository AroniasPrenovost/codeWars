// Write a method palindrome_chain_length which takes a positive number 
// and returns the number of special steps needed to obtain a palindrome. 
// The special step is: "reverse the digits, and add to the original number". 
// If the resulting number is not a palindrome, repeat the procedure with the sum 
// until the resulting number is a palindrome.

// If the input number is already a palindrome, the number of steps is 0.
// Input will always be a positive integer.

var palindromeChainLength = function(n) {
// set step calculation ("step count") variable 
var stepCount = 0;
// checks if number is a palindrome - returns boolean value (t/f)
var pvalue = parseInt((n + '').split("").reverse().join("")); 
    while (pvalue !== n) { // if the number isn't a palindorme
      n = parseInt(n) + parseInt(pvalue); // add the value of n to the pvalue 
      pvalue = parseInt((n + '').split('').reverse().join(''));
      ++stepCount; // repeat the process if it is still not a palindrome 
    }
    return stepCount; // how many times did it take until we got to palindrome? 
}; 
palindromeChainLength(2044102);
// "false"