/*global setTimeout:true, equal:true, stop:true, start:true, test:true*/
/*jslint browser: true, white: false, vars: true, devel: true, bitwise: true, debug: true, nomen: true, sloppy: true, indent: 2*/

// testing minutes
test("less than a minute ago", function () {
  var stamp = new Date().setTimeAgo('1 second');
  equal(new Date().distanceInWords(stamp), 'less than a minute ago');
});

test("2 minutes ago", function () {
  var stamp = new Date().setTimeAgo('2 minutes');
  equal(new Date().distanceInWords(stamp), '2 minutes ago');
});

test("1 hour, 25 minutes ago", function () {
  var stamp = new Date().setTimeAgo('85 minutes');
  equal(new Date().distanceInWords(stamp), '1 hour, 25 minutes ago');
});

// testing days
test("2 days ago", function () {
  var stamp = new Date().setTimeAgo('2 days');
  equal(new Date().distanceInWords(stamp), '2 days ago');
});

test("1 day, 2 hours ago", function () {
  var stamp = new Date().setTimeAgo('26 hours');
  equal(new Date().distanceInWords(stamp), 'about one day ago');
});

// testing weeks
test("1 weeks ago", function () {
  var stamp = new Date().setTimeAgo('2 weeks');
  equal(new Date().distanceInWords(stamp), '2 weeks ago');
});

test("1 week, 2 days ago", function () {
  var stamp = new Date().setTimeAgo('9 days');
  equal(new Date().distanceInWords(stamp), '1 week, 2 days ago');
});

// testing months
test("2 months ago", function () {
  var stamp = new Date().setTimeAgo('2 months');
  equal(new Date().distanceInWords(stamp, '   before  '), '2 months before');
});

test("52 weeks ago", function () {
  var stamp = new Date().setTimeAgo('52 weeks');
  equal(new Date().distanceInWords(stamp), 'about one year ago');
});

// testing years
test("2 years ago", function () {
  var stamp = new Date().setTimeAgo('2 years');
  equal(new Date().distanceInWords(stamp), '2 years ago');
});

test("time ago", function () {
  var stamp = new Date("March 11, 1985 09:25:00 GMT-0800 (PST)");
  stamp.setTimeAgo('6 weeks');
  equal(stamp, 'Mon Jan 28 1985 09:25:00 GMT-0800 (PST)');
});

test("distance in words from 2 independant date objects", function () {
  var start = new Date("March 11, 1985 09:25:00 GMT-0800 (PST)");
  var stop  = new Date("July 30, 1999 10:50:00 GMT-0800 (PST)");
  equal(stop.distanceInWords(start), '14 years, 5 months ago');
});
