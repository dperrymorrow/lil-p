/*jslint browser: true, white: false, vars: true, devel: true, bitwise: true, debug: true, nomen: true, sloppy: false, indent: 2*/

// Base function that allows you to extend objects
(function () {
  "use strict";
  // generic extend method
  Function.prototype.method = function (name, func) {
    if (!this.prototype[name]) {
      this.prototype[name] = func;
      return this;
    }
  };
}());
