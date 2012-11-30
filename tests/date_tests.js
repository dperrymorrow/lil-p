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

test("testing time ago from a starting point", 2, function () {
  var stamp = new Date().setTimeAgo('2 minutes'),
    startingPoint = new Date().setTimeAgo('50 seconds');

  equal(startingPoint.distanceInWords(stamp), '1 minute, 10 seconds ago');
  stop();
  setTimeout(function () {
    equal(startingPoint.distanceInWords(stamp), '1 minute, 10 seconds ago');
    start();
  }, 1000);
});
