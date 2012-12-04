LIL-p
=====

##Javascript Prototype Extensions

Add on functions to native ojects in Javascript. 

##String extensions

- truncate

````javascript
  // truncate a string to number of chars
  'Hey there im a really long string'.truncate(5);
  // returns => 'Hey t...'

  // takes the truncation characters as a parameter
  'Hey there im a really long string'.truncate(5, '(shortened)');
  // outputs => 'Hey t(shortened)'

  // defaults to 10 characters
  'Hey there im a really long string'.truncate();
  // outputs => 'Hey there...'

