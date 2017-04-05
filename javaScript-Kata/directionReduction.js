// Write a function dirReduc which will take an array of strings and 
// returns an array of strings with the needless directions removed 
// (W<->E or S<->N side by side).

function dirReduc(arr){

// find # of "NORTH" occurences
var countN = 0;
for(var i = 0; i < arr.length; ++i){
    if(arr[i] == "NORTH")
        countN++;
	} // return countN;

// find # of "SOUTH" occurences
var countS = 0;
for(var i = 0; i < arr.length; ++i){
    if(arr[i] == "SOUTH")
        countS++;
	} // return countN;

// find # of "EAST" occurences
var countE = 0;
for(var i = 0; i < arr.length; ++i){
    if(arr[i] == "EAST")
        countE++;
	} // return countN;

// find # of "WEST" occurences
var countW = 0;
for(var i = 0; i < arr.length; ++i){
    if(arr[i] == "WEST")
        countW++;
	} // return countN;

// returns empty string if all directions cancel out 
if (countN == countS && countW == countE) {
	return "";
} else {
// figure out what cancels what out 

	}
}

dirReduc(["NORTH", "NORTH", "SOUTH", "SOUTH", "EAST", "EAST", "WEST", "WEST", "WEST"]);



