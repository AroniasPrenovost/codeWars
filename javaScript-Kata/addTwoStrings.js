function sumStrings(a,b) { 
// brute force variable to behave as integer 
	x = +a + +b;
// turn the array back to a string
	stringify = x.toString();
	return stringify;
}

sumStrings(200,10);
// returns "210"