/*global setTimeout:true, equal:true, stop:true, start:true, test:true*/
/*jslint browser: true, white: false, vars: true, devel: true, bitwise: true, debug: true, nomen: true, sloppy: true, indent: 2*/

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
  equal("foobar".contains('foo'), true);
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
  equal("foobar".contains('donkey'), false);
});

test("splits on characters correctly", function () {
  equal("hello there-somethingerather".wordWrap(), "hello <wbr>there-<wbr>somethingerather");
});

test("adds in wraps if past length param", function () {
  equal("123456789".wordWrap(5), "12345<wbr>6789");
});

