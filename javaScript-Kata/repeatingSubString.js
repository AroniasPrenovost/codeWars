/*

Given a string, find the length of the longest substring without repeating characters.

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3.

*/ 

Array.prototype.contains = function(element){
    return this.indexOf(element) > -1;
};

var lengthOfLongestSubstring = function(s) {
    var uniques = [];
    var succession = []; 
    s = s.split('');
    for (var i = 0; i < s.length; i++) {
        if (succession.contains(s[i])) {
            uniques.push(succession.length);
            succession = [];
        } else {
            succession.push(s[i]);
        }
    }
    return uniques.sort().slice(-1)[0];
};
