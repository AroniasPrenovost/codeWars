// Write a function that reverses the order of words in a sentance

function reverseWords(str){
  return str.split("").join("").split(" ").reverse().join(" ");
}
reverseWords("Hey there, this is Aron.");
// returns "Aron. is this there, Hey"

// str.split("") converts string to array of substrings
// .join("") combines array substrings 
// .split(" ") adds spaces 
// .reverse() reverses order of each element 
// .join(" ") converts the array back to a string