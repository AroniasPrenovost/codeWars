function toUnderscore(string) {

// needs if/else for number vs. string 

string = string.replace(/([a-z])([A-Z])/g, '$1_$2');
// adds _ after letter + number combo 
string = string.replace(/([0-9])(?=[a-z])/ig, '$1_');

    return string.toLowerCase();

}

toUnderscore("ThisIsSick");









