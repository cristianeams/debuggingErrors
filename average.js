function average(list) {
  var sum = 0;

  for (var num of list) {
    //declare var num
    var num;
    // fix ++ to += to increment
    sum += num;
  }

return sum / list.length;
//close } in function
}

console.log(average([3, 5, 7]));
