/*global setTimeout:true, equal:true, stop:true, start:true, test:true*/
/*jslint browser: true, white: false, vars: true, devel: true, bitwise: true, debug: true, nomen: true, sloppy: true, indent: 2*/

// testing truncation
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
//testing escape
test("strips the html characters", function () {
  equal("foobar<a href='foo'>bar</a>".safe(), "foobar&lt;a href='foo'&gt;bar&lt;/a&gt;");
});
// testing contains
test("expect foobar not to contain donkey", function () {
  equal("foobar".contains('donkey'), false);
});
// humanize
test("humanize camelcase", function () {
  equal('monkeyPants'.humanize(), 'monkey pants');
});

test("humanize underscore", function () {
  equal('monkey_Pants'.humanize(), 'monkey pants');
});

test("humanize dashes", function () {
  equal('monkey-Pants'.humanize(), 'monkey pants');
});

// concat
test("concat with availible variables", function () {
  var obj = {foo: " love cats"};
  equal("dogs#{foo}".inject(obj), 'dogs love cats');
});
// pluralize
test("pluralize with noting passed", function () {
  equal('dog'.pluralize(), 'dog');
});
// singularize
test("singularize", function () {
  equal('dogs'.singularize(), 'dog');
});
// wordwrap testing
test("splits on characters correctly", function () {
  equal("hello there-somethingerather".wordWrap(), "hello <wbr>there-<wbr>somethingerather");
});

test("adds in wraps if past length param", function () {
  equal("123456789".wordWrap(5), "12345<wbr>6789");
});

