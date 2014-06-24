/*global loadFixtures: true, waits:true, beforeEach: true, it: true, expect: true, describe:true, spyOn: true, white: true, vars: true, jQuery:true, $:true*/
/*jslint browser: true, devel: true, bitwise: true, debug: true, nomen: true, sloppy: false, indent: 2*/

describe("String Prototypes", function () {
  "use strict";

  beforeEach(function () {
  });

  it("truncates properly", function () {
    expect('Hey there im a really long string'.truncate(5)).toEqual('Hey t...');
  });

  it("truncates with ext param", function () {
    expect('Hey there im a really long string'.truncate(5, '[ext]')).toEqual('Hey t[ext]');
  });

  it("truncates properly to defaults and trims", function () {
    expect('Hey there im a really long string'.truncate()).toEqual('Hey there...');
  });

  it("expect foobar to conain foo", function () {
    expect("foobar".contains('foo')).toEqual(true);
  });
  //testing escape
  it("strips the html characters", function () {
    expect("foobar<a href='foo'>bar</a>".safe()).toEqual("foobar&lt;a href='foo'&gt;bar&lt;/a&gt;");
  });
  // testing contains
  it("expect foobar not to contain donkey", function () {
    expect("foobar".contains('donkey')).toEqual(false);
  });
  // humanize
  it("humanize camelcase", function () {
    expect('monkeyPants'.humanize()).toEqual('monkey pants');
  });

  it("humanize underscore", function () {
    expect('monkey_Pants'.humanize()).toEqual('monkey pants');
  });

  it("humanize dashes", function () {
    expect('monkey-Pants'.humanize()).toEqual('monkey pants');
  });

  // concat
  it("concat with availible variables", function () {
    var obj = {foo: " love cats"};
    expect("dogs#{foo}".inject(obj)).toEqual('dogs love cats');
  });
  // pluralize
  it("pluralize with noting passed", function () {
    expect('dog'.pluralize()).toEqual('dogs');
  });
  // singularize
  it("singularize", function () {
    expect('dogs'.singularize()).toEqual('dog');
  });
  // wordwrap testing
  it("splits on characters correctly", function () {
    expect("hello there-somethingerather".wordWrap()).toEqual("hello <wbr>there-<wbr>somethingerather");
  });

  it("adds in wraps if past length param", function () {
    expect("123456789".wordWrap(5)).toEqual("12345<wbr>6789");
  });
});
