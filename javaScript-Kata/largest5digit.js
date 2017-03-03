// find the largest sequence of 5 digits in the series 

function solution(digits){  
// convert digits to string 
var n = digits.toString();

// returns greatest number 
  var greatest;
  var indexOfGreatest;
  for (var i = 0; i < n.length; i++) {
    if (!greatest || n[i] > greatest) {
      greatest = n[i];
      indexOfGreatest = i;
    }
  }

  // finds every index the greatest number occurs at 
    var indices = []; // lists occurences 
    for(var i=0; i < n.length;i++) {
        if (n[i] === greatest) indices.push(i);
    }
  alert(indices);

// find those that can go on 5 more spaces 
// loop through indexes and apply that to n 

// compare size of viable sequences

// return largest sequence

}
solution(9273649844333);
// returns 0,6