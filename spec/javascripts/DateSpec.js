/*global loadFixtures: true, waits:true, beforeEach: true, it: true, expect: true, describe:true, spyOn: true, white: true, vars: true, jQuery:true, $:true*/
/*jslint browser: true, devel: true, bitwise: true, debug: true, nomen: true, sloppy: false, indent: 2*/

describe("Date Prototypes", function () {
  "use strict";

  beforeEach(function () {
  });

  // testing minutes
  it("less than a minute ago", function () {
    var stamp = new Date().setTimeAgo('1 second');
    expect(new Date().distanceInWords(stamp)).toEqual('less than a minute ago');
  });

  it("2 minutes ago", function () {
    var stamp = new Date().setTimeAgo('2 minutes');
    expect(new Date().distanceInWords(stamp)).toEqual('2 minutes ago');
  });

  it("1 hour, 25 minutes ago", function () {
    var stamp = new Date().setTimeAgo('85 minutes');
    expect(new Date().distanceInWords(stamp)).toEqual('1 hour, 25 minutes ago');
  });

  // testing days
  it("2 days ago", function () {
    var stamp = new Date().setTimeAgo('2 days');
    expect(new Date().distanceInWords(stamp)).toEqual('2 days ago');
  });

  it("1 day, 2 hours ago", function () {
    var stamp = new Date().setTimeAgo('26 hours');
    expect(new Date().distanceInWords(stamp)).toEqual('about one day ago');
  });

  // testing weeks
  it("1 weeks ago", function () {
    var stamp = new Date().setTimeAgo('2 weeks');
    expect(new Date().distanceInWords(stamp)).toEqual('2 weeks ago');
  });

  it("1 week, 2 days ago", function () {
    var stamp = new Date().setTimeAgo('9 days');
    expect(new Date().distanceInWords(stamp)).toEqual('1 week, 2 days ago');
  });

  // testing months
  it("2 months ago", function () {
    var stamp = new Date().setTimeAgo('2 months');
    expect(new Date().distanceInWords(stamp, '   before  ')).toEqual('2 months before');
  });

  it("52 weeks ago", function () {
    var stamp = new Date().setTimeAgo('52 weeks');
    expect(new Date().distanceInWords(stamp)).toEqual('about one year ago');
  });

  // testing years
  it("2 years ago", function () {
    var stamp = new Date().setTimeAgo('2 years');
    expect(new Date().distanceInWords(stamp)).toEqual('2 years ago');
  });

  it("time ago", function () {
    var stamp = new Date("March 11, 1985 09:25:00 GMT-0800 (PST)");
    stamp.setTimeAgo('6 weeks');
    expect(stamp, 'Mon Jan 28 1985 09:25:00 GMT-0800 (PST)');
  });

  it("distance in words from 2 independant date objects", function () {
    var start = new Date("March 11, 1985 09:25:00 GMT-0800 (PST)"),
      stop  = new Date("July 30, 1999 10:50:00 GMT-0800 (PST)");
    expect(stop.distanceInWords(start)).toEqual('14 years, 5 months ago');
  });

});
