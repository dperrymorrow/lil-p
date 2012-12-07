/*jslint browser: true, white: false, vars: true, devel: true, bitwise: true, debug: true, nomen: true, sloppy: false, indent: 2*/

(function () {
  "use strict";

  // sort assumes everything is a string even if they are numbers
  Array.method('sortNumeric', function () {
    return this.sort(function (a, b) {
      return a - b;
    })
  });

}());
