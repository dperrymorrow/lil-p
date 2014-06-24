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
