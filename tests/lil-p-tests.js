/*global test:true, equal:true, $:true, RPM:true, clearInterval: false, clearTimeout: false, document: false, event: false, frames: false, history: false, Image: false, location: false, name: false, navigator: false, Option: false, parent: false, screen: false, setInterval: false, setTimeout: false, window: false, XMLHttpRequest: false */
/*jslint unparam: true, eqeq: false, plusplus: false, sloppy: true, indent: 2*/

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
  console.log(stamp.getHours() + ":" + stamp.getMinutes() )
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
  var stamp = new Date().setTimeAgo('2 minutes');
  var startingPoint = new Date().setTimeAgo('50 seconds')
  
  equal( startingPoint.distanceInWords(stamp), '1 minute, 10 seconds ago');
  stop();
  setTimeout( function(){
    equal(startingPoint.distanceInWords(stamp), '1 minute, 10 seconds ago');
    start();
  }, 1000);
});

// testing string extensions
test("truncates properly", function () {
  equal('Hey there im a really long string'.truncate(5), 'Hey t...');
});

test("truncates with ext param", function () {
  equal('Hey there im a really long string'.truncate(5, '[ext]'), 'Hey t[ext]');
});

test("truncates properly to defaults and trims", function () {
  equal('Hey there im a really long string'.truncate(), 'Hey there...');
});

test("expect foobar to conain foo", function () {
  equal( "foobar".contains('foo'), true );
});

test("pluralize with a value", function () {
  equal('dog'.pluralize(2), 'dogs');
});

test("pluralize with noting passed", function () {
  equal('dog'.pluralize(), 'dog');
});

test("singularize", function () {
  equal('dogs'.singularize(), 'dog');
});

test("expect foobar not to contain donkey", function () {
  equal( "foobar".contains('donkey'), false );
});

test("splits on characters correctly", function () {
  equal("hello there-somethingerather".wordWrap(), "hello <wbr>there-<wbr>somethingerather");
});

test("adds in wraps if past length param", function () {
  equal("123456789".wordWrap(5), "12345<wbr>6789");
});

