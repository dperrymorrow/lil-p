/*global */
/*jslint browser: true, white: false, vars: true, devel: true, bitwise: true, debug: true, nomen: true, sloppy: false, indent: 2*/

//////////////////////////////
//// STRING EXTENSIONS ///////
/////////////////////////////

(function () {
  "use strict";

  String.method('pluralize', function (value) {
    value = value || 0; // make sure we have a value
    return parseInt(value, 10) > 1 ? this + 's' : this;
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
    var i    = 0,
      z      = 0,
      str    = this.toString(),
      chunks = [],
      chunk  = '';

    len   = (typeof len !== 'number') ? null : len;
    chars = (typeof chars !== 'object') ? null : chars;
    chars = chars || ["/", "-", " "];
    len   = len || 25;

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
    return this.length > length ? this.substring(0, length).trimRight() + append : this;
  });

  /*
  modern browsers have trim, trimLeft, trimRight,
  but we only write the prototype function if it doesnt exist, 
  so we shim all those that dont
  */
  String.method('trim', function () {
    return this.replace(/^\s+|\s+$/g, "");
  });

  String.method('trimLeft', function () {
    return this.replace(/^\s+/, "");
  });

  String.method('trimRight', function () {
    return this.replace(/\s+$/, "");
  });

}());
