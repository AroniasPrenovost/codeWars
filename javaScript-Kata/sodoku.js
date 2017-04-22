// requirements
// - check if every array is in a unique order
// - they must all contain #'s 1-9
function validSolution(board){
	arrayVals = [];
	for(var i = 0; i < board.length; i++){
		for(var j = 0; j < board[i].length; j++){
			arrayVals.push(board[i][j]);
		}
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
	return false;
} else {
	return true;
	}
}
validSolution([[1,8,7,4,5,6,3,2,9], 
	[1,8,7,4,6,5,3,2,9], 
	[1,2,3,4,6,5,7,8,9], 
	[1,2,3,4,6,5,7,8,9], 
	[1,2,3,5,4,6,7,8,9], 
	[1,2,4,3,5,6,7,8,9],
	[1,3,2,4,5,6,7,8,9],
	[2,1,3,4,5,6,7,8,9],
	[1,2,3,4,5,6,8,7,9]]);