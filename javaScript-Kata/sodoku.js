// REQUIREMENTS
 // - check if every array is in a unique order
 // - they must all contain #'s 1-9
function validSolution(board){
	arrayVals = [];
	for(var i = 0; i < board.length; i++){
		for(var j = 0; j < board[i].length; j++){
			arrayVals.push(board[i][j]);
		}
// ----------------------------------------------------
// remove commas from each string and replace with +'s
var regex = new RegExp(',', 'g');
var row1 = arrayVals.slice(0, 9).toString().replace(regex, '+');
var row2 = arrayVals.slice(9, 18).toString().replace(regex, '+');
var row3 = arrayVals.slice(18, 27).toString().replace(regex, '+');
var row4 = arrayVals.slice(27, 36).toString().replace(regex, '+');
var row5 = arrayVals.slice(36, 45).toString().replace(regex, '+');
var row6 = arrayVals.slice(45, 54).toString().replace(regex, '+');
var row7 = arrayVals.slice(54, 63).toString().replace(regex, '+');
var row8 = arrayVals.slice(63, 72).toString().replace(regex, '+');
var row9 = arrayVals.slice(72, 81).toString().replace(regex, '+');
} // end for loop
// ----------------------------------------------------
// evaluate the expression. numbers 1-9 will = 45
rows = [eval(row1), eval(row2), eval(row3), eval(row4), eval(row5), eval(row6), eval(row7), eval(row8), eval(row9)];
var wrong = [];
var right = [];
for(var i = 0; i < rows.length; i++){
	if(rows[i] != 45) {
		wrong.push(rows[i]);
	} else {
		right.push(rows[i]);
	}
} // end for loop
if (right.length > 8) {
	rows = rows;
} else {
	return false;
}
// ----------------------------------------------------
// check if all arrays are in a different order
arrS = [row1, row2, row3, row4, row5, row6, row7, row8, row9];
//  return rawRows;
var sorted_arr = arrS.slice().sort();                        
var results = [];
for (var i = 0; i < arrS.length + 1 - 1; i++) {
	if (sorted_arr[i + 1] == sorted_arr[i]) {
		results.push(sorted_arr[i]);
	}
}
if (results.length > 0) {
	alert(results);
} else {
	arrS = arrS;
	}
// -----------------------------------------------------
// check if there are no duplicates in vertical indeces
var vertOne = (eval(row1.charAt(0) + "+" + row2.charAt(0) + "+" + row3.charAt(0) + "+" + row4.charAt(0) + "+" + row5.charAt(0) + "+" + row6.charAt(0) + "+" + row7.charAt(0) + "+" + row8.charAt(0) + "+" + row9.charAt(0)));
var vertTwo = (eval(row1.charAt(2) + "+" + row2.charAt(2) + "+" + row3.charAt(2) + "+" + row4.charAt(2) + "+" + row5.charAt(2) + "+" + row6.charAt(2) + "+" + row7.charAt(2) + "+" + row8.charAt(2) + "+" + row9.charAt(2)));
var vertThree = (eval(row1.charAt(4) + "+" + row2.charAt(4) + "+" + row3.charAt(4) + "+" + row4.charAt(4) + "+" + row5.charAt(4) + "+" + row6.charAt(4) + "+" + row7.charAt(4) + "+" + row8.charAt(4) + "+" + row9.charAt(4)));
var vertFour = (eval(row1.charAt(6) + "+" + row2.charAt(6) + "+" + row3.charAt(6) + "+" + row4.charAt(6) + "+" + row5.charAt(6) + "+" + row6.charAt(6) + "+" + row7.charAt(6) + "+" + row8.charAt(6) + "+" + row9.charAt(6)));
var vertFive = (eval(row1.charAt(8) + "+" + row2.charAt(8) + "+" + row3.charAt(8) + "+" + row4.charAt(8) + "+" + row5.charAt(8) + "+" + row6.charAt(8) + "+" + row7.charAt(8) + "+" + row8.charAt(8) + "+" + row9.charAt(8)));
var vertSix = (eval(row1.charAt(10) + "+" + row2.charAt(10) + "+" + row3.charAt(10) + "+" + row4.charAt(10) + "+" + row5.charAt(10) + "+" + row6.charAt(10) + "+" + row7.charAt(10) + "+" + row8.charAt(10) + "+" + row9.charAt(10)));
var vertSeven = (eval(row1.charAt(12) + "+" + row2.charAt(12) + "+" + row3.charAt(12) + "+" + row4.charAt(12) + "+" + row5.charAt(12) + "+" + row6.charAt(12) + "+" + row7.charAt(12) + "+" + row8.charAt(12) + "+" + row9.charAt(12)));
var vertEight = (eval(row1.charAt(14) + "+" + row2.charAt(14) + "+" + row3.charAt(14) + "+" + row4.charAt(14) + "+" + row5.charAt(14) + "+" + row6.charAt(14) + "+" + row7.charAt(14) + "+" + row8.charAt(14) + "+" + row9.charAt(14)));
var vertNine = (eval(row1.charAt(16) + "+" + row2.charAt(16) + "+" + row3.charAt(16) + "+" + row4.charAt(16) + "+" + row5.charAt(16) + "+" + row6.charAt(16) + "+" + row7.charAt(16) + "+" + row8.charAt(16) + "+" + row9.charAt(16)));
return vertOne + " " + vertTwo + " " + vertThree + " " + vertFour + " " + vertFive + " " + vertSix;

}
validSolution([[1,8,7,4,5,6,3,2,9], 
	[1,9,7,4,5,6,3,2,8], 
	[1,2,3,4,6,5,7,8,9], 
	[1,2,7,4,6,5,3,8,9], 
	[1,2,3,5,4,6,7,8,9], 
	[1,2,4,3,5,6,7,8,9],
	[1,3,2,4,5,6,7,8,9],
	[2,1,3,4,5,6,7,8,9],
	[1,2,3,4,5,6,8,7,9]]);