// CREATE PHONE NUMBER

// Write a function that accepts an array of 10 integers (between 0 and 9), 
// that returns a string of those numbers in the form of a phone number.

// My Answer

function createPhoneNumber(numbers){
	numbers.unshift("(");    
	numbers.splice(4, 0, ") ");
	numbers.splice(8, 0, "-");
	return numbers.toString().replace(/,/g,"");
}

createPhoneNumber([2,3,4,2,3,4,5,6,5,4]);
// returns 
'(234) 234-5654'