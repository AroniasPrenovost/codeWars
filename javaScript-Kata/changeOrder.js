var changeOrder = function (arr) {
  var list = arr;
  for (var i = list.length - 1; i >= 0; i--) {
    if (list[i] === 0) {
      list.splice(i, 1);
      list.push(0);
    }
  }
  return list;
}

changeOrder([1, 4, 3, 2, 4, 3, 1, 2, 3, 0, 8, 0]);
// return [1, 4, 3, 2, 4, 3, 1, 2, 3, 8, 0, 0]