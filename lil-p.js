
/*jslint browser: true, white: false, vars: true, devel: true, bitwise: true, debug: true, nomen: true, sloppy: false, indent: 2*/

(function () {
  "use strict";
  // generic extend method
  Function.prototype.method = function (name, func) {
    if (!this.prototype[name]) {
      this.prototype[name] = func;
      return this;
    }
  };

  //////////////////////////////
  //// STRING EXTENSIONS ///////
  /////////////////////////////

  String.method('pluralize', function (value) {
    value = value || 0; // make sure we have a value
    value = parseInt(value, 10); // parse it to an integer
    var str = (value > 1) ? this + 's' : this;
    return str;
  });
  String.method('contains', function (checkFor) {
    return this.indexOf(checkFor.toString()) !== -1;
  });
  String.method('singularize', function () {
    if (this.substring(this.length - 1, this.length) === 's') {
      return this.substring(0, this.length - 1);
    }
    return this;
  });

  String.method('truncate', function (length, append) {
    append = append || '...';
    length = length || 10;
    var shortened = this.substring(0, length).rtrim();
    if (shortened.length < this.length) {shortened += append; }
    return shortened;
  });

  String.method('trim', function () {
    return this.replace(/^\s+|\s+$/g, "");
  });
  String.method('ltrim', function () {
    return this.replace(/^\s+/, "");
  });
  String.method('rtrim', function () {
    return this.replace(/\s+$/, "");
  });


  //////////////////////////////
  ///// DATE EXTENSIONS ///////
  /////////////////////////////

  Date.prototype.timeStampUnits = {
    year: 31536000000,
    month: 2628000000,
    week: 604800000,
    day: 86400000,
    hour: 3600000,
    minute: 60000,
    second: 1000
  };

  Date.prototype.timeUnitsOrder = ['year', 'month', 'week', 'day', 'hour', 'minute', 'second'];

  Date.method('setTimeAgo', function (phrase, startDate) {
    var amount, unit, arr = phrase.split(' ');

    if (arr.length !== 2) { throw "You must pass in a phrase in '2 Years' format!"; }
    startDate = startDate instanceof Date ? startDate : new Date();

    amount = parseInt(arr[0], 10); // split on the space and turn into a number
    unit = arr[1].toLowerCase().singularize(); // the units lowercased and trimmed of pluralization

    this.setTime(startDate.getTime() - (amount * this.timeStampUnits[unit]));
    return this;
  });


  Date.method('distanceInWords', function (from, suffix) {
    var i = 0, diff = 0, nextSmallestUnit = '', unit = '', wholeUnits = 0, remainder = 0, str = "";
    if (typeof suffix === 'undefined') { suffix = " ago"; } else { suffix = " " + suffix.trim(); }
    if (from instanceof Date === false) { from = new Date(); }
    diff = Math.abs(from.getTime() - this.getTime());

    if (diff < this.timeStampUnits.minute) { return "less than a minute" + suffix; }

    for (i = 0; i < this.timeUnitsOrder.length; i = i + 1) {
      unit = this.timeUnitsOrder[i];
      nextSmallestUnit = this.timeUnitsOrder[i + 1];

      if (diff > this.timeStampUnits[unit] * 0.9 && diff < this.timeStampUnits[unit] * 1.1) {
        return "about one " + unit + suffix;
      }

      if (diff >= this.timeStampUnits[unit]) {
        wholeUnits = diff / this.timeStampUnits[unit];
        remainder = wholeUnits.toString().split('.')[1];
        remainder = (diff / this.timeStampUnits[unit] - wholeUnits.toFixed(0)) * this.timeStampUnits[unit];
        remainder = Math.round(remainder / this.timeStampUnits[nextSmallestUnit]);

        if (wholeUnits > 0) {
          str = wholeUnits.toFixed(0) + " " + unit.pluralize(wholeUnits);
        }
        if (remainder > 0) {
          str = str + ", " + remainder + " " + nextSmallestUnit.pluralize(remainder);
        }
        return str + suffix;
      }
    }
  });
}());
