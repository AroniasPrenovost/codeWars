// list the top 5 most repeated words in the Gettysburg Address
// state how many times each word appears 

function wordCounter(str) {
// removes special characters, extra tabs/spaces
str = str.replace(/[^a-zA-Z ]/g, "").replace(/\s\s+/g, ' ').toLowerCase();

// turns string to array of substrings
var newstring = str.split(" ");
obj = {};
for (var i=0; i < newstring.length; i++){
  if(obj[newstring[i]]===undefined){
    obj[newstring[i]]=1;
  }else{
    obj[newstring[i]]++;
  }
}

// turn object to string w/ associated word
var arr = [];
for (var key in obj) {
  if (obj.hasOwnProperty(key)) {
    arr.push(key + obj[key]);
  }
}

// create wordCount of 5 largest key values
var wordCount = Object.values(obj); 
wordCount.sort(function(a, b){return b-a});
wordCount = wordCount.slice(0, 5);

// match object key value w/ wordCount array
Object.prototype.getKeyByValue = function( value ){
  for( var prop in this ) {
    if( this.hasOwnProperty( prop ) ){
      if( this[ prop ] === value ){
        return prop;
      }
    }
  }
}

// remove object key after iteration over wordCount
Object.prototype.removeByValue = function(value){
  var i;
  for(i in this){
    if(this.hasOwnProperty(i)){
      if(value === this[i]){
        delete(this[i]);
        return true;
      }
    }
  }   
  return false;
}

var topFiveWords = "";
var clearedObjectValues = "";
for (var j = 0; j < wordCount.length; j++) {
  topFiveWords += obj.getKeyByValue( wordCount[j] ) + ' ';  
// remove key from object
clearedObjectValues += obj.removeByValue( wordCount[j] );
}

// combine topFiveWords and wordCount 
topFiveWords = topFiveWords.split(" ");
finalList = topFiveWords.map(function (e, i) {
  return [topFiveWords[i], wordCount[i]];
});

// convert raw data to readable form 
finalList = finalList.join(', ');

// replaces commas with :
finalList = finalList.replace(/,/g, ':');

// replace ': ' with ', ' 
finalList = finalList.replace(/: /g, ', ');

// this removes ', :' at end of string
finalList = finalList.replace(/, :/g, '');

console.log(finalList);
}
wordCounter("Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal. Now we are engaged in a great civil war, testing whether that nation, or any nation so conceived and so dedicated, can long endure. We are met on a great battle-field of that war. We have come to dedicate a portion of that field, as a final resting place for those who here gave their lives that that nation might live. It is altogether fitting and proper that we should do this. But, in a larger sense, we can not dedicate -- we can not consecrate -- we can not hallow -- this ground. The brave men, living and dead, who struggled here, have consecrated it, far above our poor power to add or detract. The world will little note, nor long remember what we say here, but it can never forget what they did here. It is for us the living, rather, to be dedicated here to the unfinished work which they who fought here have thus far so nobly advanced. It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.");