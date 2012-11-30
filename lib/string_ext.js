/*global */
/*jslint browser: true, white: false, vars: true, devel: true, bitwise: true, debug: true, nomen: true, sloppy: false, indent: 2*/

//////////////////////////////
//// STRING EXTENSIONS ///////
/////////////////////////////

(function () {
  "use strict";

  String.method('pluralize', function (value) {
    value = value || 0; // make sure we have a value
    value = parseInt(value, 10); // parse it to an integer
    var str = (value > 1) ? this + 's' : this;
    return str;
  });

  String.method('contains', function (checkFor) {
    return this.indexOf(checkFor.toString()) !== -1;
  });

  String.method('singularize', function () {
    if (this.substring(this.length - 1, this.length) === 's') {
      return this.substring(0, this.length - 1);
    }
    return this;
  });

  String.method('wordWrap', function (len, chars) {
    var i = 0,
      z = 0,
      str = this.toString(),
      chunks = [],
      chunk = '';

    len = (typeof len !== 'number') ? null : len;
    chars = (typeof chars !== 'object') ? null : chars;
    chars = chars || ["/", "-", " "];
    len = len || 25;

    for (i = 0; i <= str.length; i += len) {chunks.push(str.substring(i, i + len)); }

    for (i = 0; i < chunks.length; i += 1) {
      chunk = chunks[i];
      for (z = 0; z <= chars.length; z += 1) {chunk = chunk.split(chars[z]).join(chars[z] + '<wbr>'); }
      if (chunk.contains('<wbr>') === false && i !== chunks.length - 1) { chunk += '<wbr>'; }
      chunks[i] = chunk;
    }

    return chunks.join('');
  });

  String.method('truncate', function (length, append) {
    append = append || '...';
    length = length || 10;
    var shortened = this.substring(0, length).rtrim();
    if (shortened.length < this.length) {shortened += append; }
    return shortened;
  });

  String.method('trim', function () {
    return this.replace(/^\s+|\s+$/g, "");
  });

  String.method('ltrim', function () {
    return this.replace(/^\s+/, "");
  });

  String.method('rtrim', function () {
    return this.replace(/\s+$/, "");
  });

}());
