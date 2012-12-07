/*global equal:true, test:true*/
/*jslint browser: true, white: false, vars: true, devel: true, bitwise: true, debug: true, nomen: true, sloppy: false, indent: 2*/

// testing minutes
test("sort numeric", function () {
  var arr = [1, 3, 10, 6];
  arr.sortNumeric();
  equal(arr[3], 10);
});
