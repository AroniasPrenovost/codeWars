// SORT ARRAY BY STRING LENGTH 

// Write a function that takes an array of strings as an argument
// and returns a sorted array containing the same strings, 
// ordered from shortest to longest.

function sortByLength (array) {
  // Return an array containing the same strings, ordered from shortest to longest
  array.sort(function(a, b)
  {return a.length - b.length;});
return array;
};