// Given five positive integers, find the minimum and maximum values 
// that can be calculated by summing exactly four of the five integers. 
// Then print the respective minimum and maximum values as a single line 
// of two space-separated long integers.

function main() {
    arr = readLine().split(' ');
    arr = arr.map(Number); // arr = [ 5, 4, 3, 2, 1 ]
    var length = arr.length;
    var total = arr.reduce((a, b)=>a+b);
    var smallest = Math.min.apply(Math, arr);
    var biggest = Math.max.apply(Math, arr);
    var solution = (total - biggest) + ' ' + (total - smallest);
    console.log(solution);
}