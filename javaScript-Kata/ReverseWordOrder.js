// Write a function that reverses the order of words in a sentance
// and the order of the letters within each word. 

function reverseWords(str) {
  sentance = str.split("").reverse().join("").split(" ").reverse().join(" ");
return sentance;
}
reverseWords("hey there, this is aron");
// returns "yeh ,ereht siht si nora"

// str.split("") converts string to array of substrings
// .reverse() reverses the order of the array elements 
// .join("") combines array substrings 
// .split(" ") adds spaces 
// .reverse() reverses order of array elements 
// .join(" ") converts the array to string