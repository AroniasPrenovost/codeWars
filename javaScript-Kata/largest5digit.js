// find the largest sequence of 5 digits in the series 

function solution(digits){  
// convert digits to string 
var n = digits.toString();
// determines greatest number 
var greatest;
var indexOfGreatest;
for (var i = 0; i < n.length; i++) {
  if (!greatest || n[i] > greatest) {
    greatest = n[i];
indexOfGreatest = i; // only returns the 1st 
}
}
// lists every index the largest number occurs at 
var indices = []; // lists occurences 
for(var i=0; i < n.length; i++) {
  if (n[i] === greatest) 
    indices.push(i);
}
// return indices; 

// work in progress below
// returns the 1st correct number, but not 3
var sequence = []; // lists occurences 
for(var i=0; i < indices.length; i++) {
  res = n.charAt(indexOfGreatest); 
  ves = sequence.push(res);
  return res ; 
}
}
solution(837699263593);
// returns "9"