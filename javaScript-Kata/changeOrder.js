// write a function that returns a list of numbers
// placing the 0's at the end in their original order

var changeOrder = function (arr) {
  var list = arr;
  for (var i = list.length - 1; i >= 0; i--) {
  // if number is equal to zero, splice it 
  // out of the array and push it to the end 
    if (list[i] === 0) {
      list.splice(i, 1);
      list.push(0);
    }
  }
  return list;
}
changeOrder([1, 4, 3, 2, 4, 3, 1, 2, 3, 0, 8, 0]);
// return [1, 4, 3, 2, 4, 3, 1, 2, 3, 8, 0, 0]