// Write a function dirReduc which will take an array of strings and 
// returns an array of strings with the needless directions removed 
// (W<->E or S<->N side by side).
function dirReduc(arr){

var directions = [];	

// find # of "NORTH" occurences
var countN = 0;
for(var i = 0; i < arr.length; ++i){
    if(arr[i] == "NORTH")
        countN++;
	} 
	if (countN === 1)
   directions.push("NORTH"); 

// find # of "SOUTH" occurences
var countS = 0;
for(var i = 0; i < arr.length; ++i){
    if(arr[i] == "SOUTH")
        countS++;
	}
if (countS === 1)
   directions.push("SOUTH"); 

// find # of "EAST" occurences
var countE = 0;
for(var i = 0; i < arr.length; ++i){
    if(arr[i] == "EAST")
        countE++;
	} // return countN;
	if (countE === 1)
   directions.push("EAST"); 

// find # of "WEST" occurences
var countW = 0;
for(var i = 0; i < arr.length; ++i){
    if(arr[i] == "WEST")
        countW++;
	} 
	if (countW === 1)
   directions.push("WEST"); 

// returns empty string if all directions cancel out
while (countN == countS && countW == countE) {
	directions.push("");
	return directions;
}
	return directions;
}
dirReduc(["NORTH", "NORTH", "SOUTH", "EAST", "EAST", "WEST", "WEST"]);














