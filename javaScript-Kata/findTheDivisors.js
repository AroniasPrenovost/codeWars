function divisors(integer){
	var str = "0";
	for (i=1;i<=integer;i++){
		if (integer % i == 0){
			str += ','+i;
		}
	}
// turn string to array of values
var array = str.split(',');
// remove first & last array elements
array.shift();
array.shift();
array.pop();

// convert to string to use a regular expression 
var changeString = array.toString().replace(/"/g," ");

// turn string back to array 
var divisorNumbers = JSON.parse("[" + changeString + "]");

if (divisorNumbers.length > 0) {
	return divisorNumbers;
} else {
	return integer + " is prime";
}
}

divisors(100);
// returns [2, 4, 5, 10, 20, 25, 50]