// Write a function that takes an array of strings as an argument
// and returns a sorted array containing the same strings, 
// ordered from shortest to longest.

function sortByLength(array) {
  array.sort(function(a, b)
  {return a.length - b.length;});
return array;
};
sortByLength(["This should be index 1.", "What?", "This is one of the sentances."]);
// returns ["What?", "This should be index 1.", "This is one of the sentances."]