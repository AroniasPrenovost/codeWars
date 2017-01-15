// produce an array of the prime numbers and the integer itself 

function prime(num) {
    var primes = [];
    var news = [];
    for(var i = 2; i < num; i++) {
        primes[i] = true;
    }
    var limit = Math.sqrt(num);
    for(var i = 2; i < limit; i++) {
        if(primes[i] === true) {
            for(var j = i * i; j < num; j += i) {
                primes[j] = false;
            }
        }
    }
    for(var i = 2; i < num; i++) {
        if(primes[i] === true) {
            news.push(i);
        }
    }
    news.push(num);
    var stringer = news.join(",").split(",");
    var hmm = stringer.map(Number);
    return hmm;
}
prime(11);
// returns [2, 3, 5, 7, 11]