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

  Date.method('setTimeAgo', function (phrase) {
    var amount,
      unit,
      arr = phrase.split(' ');

    if (arr.length !== 2) { throw "You must pass in a phrase in '2 Years' format!"; }
    amount = parseInt(arr[0], 10); // split on the space and turn into a number
    unit   = arr[1].toLowerCase().singularize(); // the units lowercased and trimmed of pluralization

    this.setTime(this.getTime() - (amount * Date.timeStampUnits[unit]));
    return this;
  });


  Date.method('distanceInWords', function (from, suffix) {
    var i              = 0,
      diff             = 0,
      unitKeys         = Date.timeStampUnits.keys(),
      parts            = {
        nextSmallestUnit: '',
        unit: '',
        wholeUnits: 0,
        remainder: 0,
        str: ''
      };

    parts.suffix = suffix || "ago";
    parts.suffix = parts.suffix.trim();
    from         = (from instanceof Date === false) ? new Date() : from;
    diff         = Math.abs(from.getTime() - this.getTime());

    if (diff < Date.timeStampUnits.minute) { return "less than a minute #{suffix}".inject(parts); }

    for (i = 0; i < unitKeys.length; i = i + 1) {
      parts.unit             = unitKeys[i];
      parts.nextSmallestUnit = unitKeys[i + 1];

      if (diff > Date.timeStampUnits[parts.unit] * 0.9 && diff < Date.timeStampUnits[parts.unit] * 1.1) {
        return "about one #{unit} #{suffix}".inject(parts);
      }

      if (diff >= Date.timeStampUnits[parts.unit]) {
        parts.wholeUnits   = diff / Date.timeStampUnits[parts.unit];
        parts.remainder    = (diff / Date.timeStampUnits[parts.unit] - parts.wholeUnits.toFixed(0)) * Date.timeStampUnits[parts.unit];
        parts.remainder    = Math.round(parts.remainder / Date.timeStampUnits[parts.nextSmallestUnit]);
        parts.wholeUnits   = parts.wholeUnits.toFixed(0);
        parts.unit         = parts.unit.pluralize(parts.wholeUnits);

        if (parts.wholeUnits > 0) {
          parts.str = "#{wholeUnits} #{unit}".inject(parts);
        }
        if (parts.remainder > 0) {
          parts.nextSmallestUnit = parts.nextSmallestUnit.pluralize(parts.remainder);
          parts.str = "#{str}, #{remainder} #{nextSmallestUnit}".inject(parts);
        }
        return "#{str} #{suffix}".inject(parts);
      }
    }
  });

}());
