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


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Below may be a better approach

function dirReduc(arr){
	var directions = [];
	var empty = [];
	var countE = 0;
	for(var i = 0; i < arr.length; ++i){
		if(arr[i] == "NORTH") {
			var arraycontainsSOUTH = (arr.indexOf("SOUTH") > -1);
			if (arraycontainsSOUTH === true) {
				var search_term = "SOUTH";
				for (var i=arr.length-1; i>=0; i--) {
				if (arr[i] === search_term) {
				arr.splice(i, 1);
				var index = arr.indexOf("NORTH"); // removes first instance of "NORTH"
				arr.splice(index, 1);
				break;       // Uncomment  if only the first term has to be removed
			}	
	} 
countE++; 
}  
	} 
}
return arr; 
}
dirReduc(["NORTH", "NORTH", "SOUTH", "EAST", "EAST", "WEST", "WEST"]);

// i need to make it so each iteration starts from beginning of array 









