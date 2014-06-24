/*global loadFixtures: true, waits:true, beforeEach: true, it: true, expect: true, describe:true, spyOn: true, white: true, vars: true, jQuery:true, $:true*/
/*jslint browser: true, devel: true, bitwise: true, debug: true, nomen: true, sloppy: false, indent: 2*/

describe("Object Prototype Extensions", function () {

  beforeEach(function () {
  });

  it("keys plucks keys", function () {
    var obj = {foo: "bar", fruit: "cake"};
    expect(obj.keys()).toEqual(["foo", "fruit"]);
  });

});
