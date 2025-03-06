var arr = ['a', 'b', 'c'];
function shuffle(arr) {
  var result = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    result.push(arr[j]);
    arr.splice(j, 1);
  }
  return result;
}
console.log(shuffle(arr));
