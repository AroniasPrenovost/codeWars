// Implement a function that adds two numbers together 
// and returns their sum in binary. The conversion can 
// be done before, or after the addition. 
// The binary number returned should be a string.

// My Answer

function addBinary(a,b) {
	//takes value of 2 integers
	var numberOne = a + b;
	//takes integer - gets base numeric value
	return (numberOne >>> 0).toString(2);
}
	// refactored further 
	function addBinary(a,b){
return ((a + b) >>> 0).toString(2);
}

addBinary(1, 3);
// returns "11"
