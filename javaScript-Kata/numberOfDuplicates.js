// Write a function that will return the count of distinct case-insensitive   
// alphabetic characters and numeric digits that occur more than once in the input 
// string. The input string is assumed to contain only alphanumeric characters, 
// including digits, uppercase and lowercase alphabet characters.

function duplicateCount(text){
   try { 
   // turn string to array, sort characters and match like characters, ading their respective lengths 
   return text.split("").sort().join("").match(/(.)\1+/g).length; 
   }
     catch(e){ 
   return 0; 
   } 
}
duplicateCount("This is my test sentance!");
// returns 6 