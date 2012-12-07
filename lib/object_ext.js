/*jslint browser: true, white: false, vars: true, devel: true, bitwise: true, debug: true, nomen: true, sloppy: false, indent: 2*/

(function () {
  "use strict";
  // stopgap to make sure that we have this method availible to us in any browser
  Object.method('keys', function () {
    var keys = [],
      key = '';

    for (key in this) {
      if (this.hasOwnProperty(key)) {
        keys.push(key);
      }
    }
    return keys;
  });

}());
