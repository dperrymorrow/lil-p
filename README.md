#lil-p (Javascript Prototype Extensions)
Add on functions to native ojects in Javascript. See the tests directory for examples of use. 
The fastest way to get started is to include the (minified version)[https://raw.github.com/dperrymorrow/lil-p/master/lib/lil_p.min.js].

##String Object Extensions

###truncate(charLimit:Number, ext:String);
Truncates a string to the charLimit number, and then appends the ext if needed. Defaults to 10 and ... if params are ommited.

````javascript
'Hey there im a really long string'.truncate(5);
// returns => 'Hey t...'

'Hey there im a really long string'.truncate(5, '(shortened)');
// returns => 'Hey t(shortened)'

'Hey there im a really long string'.truncate();
// returns => 'Hey there...'
````

###contains(substring:String);
Searches the string for the substring, and returns true/false for if found.

````javascript
"foobar".contains('foo');
// returns => true
````

###safe();
Strips encodes HTMl characters in the string.

````javascript
"foobar<a href='foo'>bar</a>".safe();
// returns => "foobar&lt;a href='foo'&gt;bar&lt;/a&gt;"
````

###humanize();
Converts camelcase, underscored, or dashed string to human readable space separated.

````javascript
'monkeyPants'.humanize();
// returns => 'monkey pants'

'monkey_Pants'.humanize();
// returns => 'monkey pants'

'monkey-Pants'.humanize(); 
// returns => 'monkey pants'
````

###inject(obj:Object);
Inject an object into a string just like in Ruby or Coffeescript #{} syntax

````javascript
var obj = {victim: "cat"};
"dog bit #{victim}".inject(obj);
// returns => 'dogs bit cat'
````

###pluralize(amount:Number);
Converts a string to plural if the number passed is greater than 1. If nothing passed, converts to plural.

````javascript
'dog'.pluralize(3);
// returns => 'dogs'

'dog'.pluralize(1);
// returns => 'dog'
````

###singularize();
Converts a plural string back to singular. No params.

````javascript
'dogs'.singularize();
// returns => 'dog'
````

###wordWrap(chars:Number, breakChars:Array);
Takes a string and inserts wbr HTML elements. This allows the browser to wrap within a word.
Defaults to 25 and ["/", "-", " "]

```javascript
"hello there-somethingerather".wordWrap()
// returns => "hello <wbr>there-<wbr>somethingerather"

"123456789".wordWrap(5);
//returns => "12345<wbr>6789"
````

##Date Object Extensions

###setTimeAgo(distance:String);
Takes a date object and sets it back in time to human readable string such as "2 weeks", "3 minutes", "5 years", or "30 seconds"
````javascript
var stamp = new Date("March 11, 1985 09:25:00 GMT-0800 (PST)");
stamp.setTimeAgo('6 weeks');
// returns => 'Mon Jan 28 1985 09:25:00 GMT-0800 (PST)'
````

###distanceInWords(dateObject:Date, suffix:String);
Returns a string of the distance in words from one Date object to another. Suffix defaults to "ago".

````javascript
var start = new Date("March 11, 1985 09:25:00 GMT-0800 (PST)");
var stop  = new Date("July 30, 1999 10:50:00 GMT-0800 (PST)");
stop.distanceInWords(start);
// returns => '14 years, 5 months ago';
````
