// Write a function dirReduc which will take an array of strings and 
// returns an array of strings with the needless directions removed 
// (W<->E or S<->N side by side).
function dirReduc(arr){
for(var i = 0; i < arr.length; ++i){
// remove conflicting directions
	while (arr[i] == "NORTH" && arr[i+1] == "SOUTH") {
  	arr.splice(arr[i], 2);  
}
// remove conflicting directions
	while (arr[i] == "SOUTH" && arr[i+1] == "NORTH") {
  	arr.splice(arr[i], 2);  
}
// remove conflicting directions
	while (arr[i] == "EAST" && arr[i+1] == "WEST") {
  	arr.splice(arr[i], 2);  
}
// remove conflicting directions
	while (arr[i] == "WEST" && arr[i+1] == "EAST") {
  	arr.splice(arr[i], 2);  
}
// removes duplicate directions 
	while (arr[i] !== arr[i+1]) {
  	var arr = arr; 
}

// removes duplicate directions 
	while (arr[i] === arr[i+1]) {
  	arr.splice(arr[i], 1);  
}


} // close for loop 
	return arr; 
}
dirReduc(['EAST', 'WEST', 'NORTH', 'SOUTH', 'SOUTH', 'WEST', 'WEST', 'EAST', 'SOUTH', 'NORTH']);





// ==================================================================
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
// end function approach 







function dirReduc(arr){
	var directions = [];
	var empty = [];
	var countE = 0;
	for(var i = 0; i < arr.length * 50; ++i){
// ---------------------------------------------- //
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
// ====================== //
		if(arr[i] == "SOUTH") {
			var arraycontainsNORTH = (arr.indexOf("NORTH") > -1);
			if (arraycontainsNORTH === true) {
				var search_term = "NORTH";
				for (var i=arr.length-1; i>=0; i--) {
				if (arr[i] === search_term) {
				arr.splice(i, 1);
				var index = arr.indexOf("SOUTH"); // removes first instance of "NORTH"
				arr.splice(index, 1);
				break;       // Uncomment  if only the first term has to be removed
			}	
	} 
countE++; 
}  
	} 
	// ================== // 
			if(arr[i] == "EAST") {
			var arraycontainsWEST = (arr.indexOf("WEST") > -1);
			if (arraycontainsWEST === true) {
				var search_term = "WEST";
				for (var i=arr.length-1; i>=0; i--) {
				if (arr[i] === search_term) {
				arr.splice(i, 1);
				var index = arr.indexOf("EAST"); // removes first instance of "NORTH"
				arr.splice(index, 1);
				break;       // Uncomment  if only the first term has to be removed
			}	
	} 
countE++; 
}  
	} 
// ================================ //
			if(arr[i] == "WEST") {
			var arraycontainsEAST = (arr.indexOf("EAST") > -1);
			if (arraycontainsEAST === true) {
				var search_term = "EAST";
				for (var i=arr.length-1; i>=0; i--) {
				if (arr[i] === search_term) {
				arr.splice(i, 1);
				var index = arr.indexOf("WEST"); // removes first instance of "NORTH"
				arr.splice(index, 1);
				break;       // Uncomment  if only the first term has to be removed
			}	
	} 
countE++; 
}  
	} 

// ====================== // 
}
return arr; 
// ====================== // 


}
dirReduc(["NORTH", "NORTH", "SOUTH", "EAST", "EAST", "WEST", "WEST"]);

// i need to make it so each iteration starts from beginning of array 




function dirReduc(arr){
for(var i = 0; i < arr.length; ++i){


	while (arr[i] == "NORTH") {
if (arr[i+1] == "SOUTH") {
	arr.splice(arr[i], 2);
} else if (arr[i+1] == "NORTH") {
arr.splice(arr[i], 1);
} else {
		i++;
}
}

	while (arr[i] == "SOUTH") {
if (arr[i+1] == "NORTH") {
	arr.splice(arr[i], 2);
} else if (arr[i+1] == "SOUTH") {
arr.splice(arr[i], 1);
} else {
		i++;
}
}

	while (arr[i] == "EAST") {
if (arr[i+1] == "WEST") {
	arr.splice(arr[i], 2);
} else if (arr[i+1] == "EAST") {
arr.splice(arr[i], 1);
} else {
		i++;
}
}

	while (arr[i] == "WEST") {
if (arr[i+1] == "EAST") {
	arr.splice(arr[i], 2);
} else if (arr[i+1] == "WEST") {
arr.splice(arr[i], 1);
} else {
	i++;
}
}

} // close for loop
	return arr; 
}
dirReduc(['EAST', 'WEST', 'SOUTH', 'NORTH', 'NORTH', 'EAST', 'WEST', 'EAST', 'SOUTH', 'NORTH']);




