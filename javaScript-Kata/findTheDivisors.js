// write a function that returns all divisor variations
// of an integer, not including 0 or the integer itself
// if the integer is prime, return "x is prime"

function divisors(integer){
	var str = "0";
	for (i=1;i<=integer;i++){
		if (integer % i == 0){
			str += ','+i;
		}
	}
// turn string to array of values
var array = str.split(',');
// remove 0 and integer from first and last indexes
array.shift();
array.shift();
array.pop();

// convert to string and use a regular expression to add spacing
var changeString = array.toString().replace(/"/g," ");
// turn string back to array 
var divisorNumbers = JSON.parse("[" + changeString + "]");

// if you've removed all elements of array... (0, integer)
if (divisorNumbers.length > 0) {
	return divisorNumbers;
} else {
	return integer + " is prime";
	}
}

divisors(100);
// returns [2, 4, 5, 10, 20, 25, 50]