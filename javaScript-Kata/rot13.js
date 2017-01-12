// return a string with every character is replaced with the 
// 13th letter from that character in the alphabet 

function rotate13(message) {
  var output = '';
  for (var i = 0; i < message.length; i ++) {
    var c = message[i];
    if (c.match(/[a-z]/i)) {
      var code = message.charCodeAt(i);
      if ((code >= 65) && (code <= 90))
        c = String.fromCharCode(((code - 65 + 13) % 26) + 65);
      else if ((code >= 97) && (code <= 122))
        c = String.fromCharCode(((code - 97 + 13) % 26) + 97);
    }
    output += c;
  }
  return output;
};
rotate13("aesttt");
// returns "nrfggg"










