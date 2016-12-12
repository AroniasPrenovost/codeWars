// Complete the solution so that it reverses all of the 
// words within the string passed in.

function reverseWords(str){
  return str.split("").join("").split(" ").reverse().join(" ");
}

reverseWords("Hey there, this is Aron.");

// str.split("") turns the string into an array of substrings
// .join("") combines elements of an array + converts to string
// .split(" ") adds spaces 
// .reverse() reverses element order 
// .join(" ") converts it back to a string again 