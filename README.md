LIL-p
=====

#Javascript Prototype Extensions
Add on functions to native ojects in Javascript. See the tests directory for examples of use

##String extensions

###truncate(charLimit:Number, ext:String);
Truncates a string to the charLimit number, and then appends the ext if needed. Defaults to 10 and ... if params are ommited.

````javascript
  'Hey there im a really long string'.truncate(5);
  // returns => 'Hey t...'

  'Hey there im a really long string'.truncate(5, '(shortened)');
  // returns => 'Hey t(shortened)'

  'Hey there im a really long string'.truncate();
  // returns => 'Hey there...'


###contains(substring:String);
Searches the string for the substring, and returns true/false for if found.

````javascript
  "foobar".contains('foo');
  // returns => true


###safe();
Strips encodes HTMl characters in the string.

````javascript
  "foobar<a href='foo'>bar</a>".safe();
  // returns => "foobar&lt;a href='foo'&gt;bar&lt;/a&gt;"


###humanize();
Converts camelcase, underscored, or dashed string to human readable space separated.

````javascript
  'monkeyPants'.humanize();
  // returns => 'monkey pants'

  'monkey_Pants'.humanize();
  // returns => 'monkey pants'

  'monkey-Pants'.humanize(); 
  // returns => 'monkey pants'


###inject(obj:Object);
Inject an object into a string just like in Ruby or Coffeescript #{} syntax

````javascript
  var obj = {victim: "cat"};
  "dog bit #{victim}".inject(obj);
  // returns => 'dogs bit cat'


###pluralize(amount:Number);
Converts a string to plural if the number passed is greater than 1. If nothing passed, converts to plural.

````javascript
  'dog'.pluralize();
  // returns => 'dogs'


###singularize();
Converts a plural string back to singular. No params.

````javascript
  'dogs'.singularize();
  // returns => 'dog'


###wordWrap(chars:Number, breakChars:Array);
Takes a string and inserts wbr HTML elements. This allows the browser to wrap within a word.
Defaults to 25 and ["/", "-", " "]

```javascript
  "hello there-somethingerather".wordWrap()
  // returns => "hello <wbr>there-<wbr>somethingerather"

  "123456789".wordWrap(5);
  //returns => "12345<wbr>6789"

