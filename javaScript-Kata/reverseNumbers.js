var reverse = function(x) {
    while(x !== 0) {
        digits = (""+x).split("");
        var neg = "";
        if (digits[0] === "-") {
            neg += "-";
        } 
        var result = "";
        digits = digits.reverse().join("");
        digits = parseInt(digits);
        if (neg.length > 0) {
            result += neg+digits;
        } else {
            result += digits;
        }
        return result;
    }
    return 0;
};

reverse(-12188881); 