// reverse the order of each inidividual word in a string

function reverseWords(str) {
  sentance = str.split("").reverse().join("").split(" ").reverse().join(" ");
return sentance;
}
reverseWords("hey there, this is aron");

// str.split("") turns the string into an array of substrings
// .reverse() reverses the order of the array elements 
// .join("") combines elements of an array + converts to string
// .split(" ") adds the spaces back in 
// .reverse() reverses each element in the array 
// .join(" ") converts it back to a string again 