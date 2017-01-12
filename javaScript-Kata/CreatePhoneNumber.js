// Write a function that accepts an array of 10 integers (between 0 and 9), 
// and returns a string of those numbers in the form of a phone number.

// phone number prototype 
// if x is an integer, expected result is "(xxx) xxx-xxxx"

function createPhoneNumber(numbers){
// add first component of the format
	numbers.unshift("(");
// because the input length is known, we add special characters at known indexes    
	numbers.splice(4, 0, ") ");
	numbers.splice(8, 0, "-");
// turns array to string and uses regex to remove commas 
	return numbers.toString().replace(/,/g,"");
}
createPhoneNumber([2,3,4,2,3,4,5,6,5,4]);
// returns '(234) "234-5654"	