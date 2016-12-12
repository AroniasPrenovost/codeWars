// Write a function that will return the count of distinct case-insensitive   
// alphabetic characters and numeric digits that occur more than once in the input 
// string. The input string can be assumed to contain only alphanumeric characters, // including digits, uppercase and lowercase alphabets.

function duplicateCount(text){
   try{ 
   return text.toLowerCase().split("").sort().join("").match(/(.)\1+/g).length; 
   }
     catch(e){ 
   return 0; 
   } 
}
duplicateCount("This is my test sentance!");