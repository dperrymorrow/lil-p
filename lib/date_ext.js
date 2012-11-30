/*global */
/*jslint browser: true, white: false, vars: true, devel: true, bitwise: true, debug: true, nomen: true, sloppy: false, indent: 2*/

//////////////////////////////
///// DATE EXTENSIONS ///////
/////////////////////////////

(function () {
  "use strict";

  Date.timeStampUnits = {
    year: 31536000000,
    month: 2628000000,
    week: 604800000,
    day: 86400000,
    hour: 3600000,
    minute: 60000,
    second: 1000
  };

  Date.timeUnitsOrder = ['year', 'month', 'week', 'day', 'hour', 'minute', 'second'];

  Date.method('setTimeAgo', function (phrase, startDate) {
    var amount, unit, arr = phrase.split(' ');

    if (arr.length !== 2) { throw "You must pass in a phrase in '2 Years' format!"; }
    startDate = startDate instanceof Date ? startDate : new Date();

    amount = parseInt(arr[0], 10); // split on the space and turn into a number
    unit = arr[1].toLowerCase().singularize(); // the units lowercased and trimmed of pluralization

    this.setTime(startDate.getTime() - (amount * Date.timeStampUnits[unit]));
    return this;
  });


  Date.method('distanceInWords', function (from, suffix) {
    var i              = 0,
      diff             = 0,
      nextSmallestUnit = '',
      unit             = '',
      wholeUnits       = 0,
      remainder        = 0,
      str              = '';

    if (typeof suffix === 'undefined') { suffix = " ago"; } else { suffix = " " + suffix.trim(); }
    if (from instanceof Date === false) { from = new Date(); }
    diff = Math.abs(from.getTime() - this.getTime());

    if (diff < Date.timeStampUnits.minute) { return "less than a minute" + suffix; }

    for (i = 0; i < Date.timeUnitsOrder.length; i = i + 1) {
      unit = Date.timeUnitsOrder[i];
      nextSmallestUnit = Date.timeUnitsOrder[i + 1];

      if (diff > Date.timeStampUnits[unit] * 0.9 && diff < Date.timeStampUnits[unit] * 1.1) {
        return "about one " + unit + suffix;
      }

      if (diff >= Date.timeStampUnits[unit]) {
        wholeUnits = diff / Date.timeStampUnits[unit];
        remainder  = wholeUnits.toString().split('.')[1];
        remainder  = (diff / Date.timeStampUnits[unit] - wholeUnits.toFixed(0)) * Date.timeStampUnits[unit];
        remainder  = Math.round(remainder / Date.timeStampUnits[nextSmallestUnit]);

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