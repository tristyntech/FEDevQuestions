// 1: how could you improve the following code?
// Assume that you have access to a styles.css file
$(document).ready(function() {
  $('.foo #bar').css('color', 'red');
  $('.foo #bar').css('border', '1px solid blue');
  $('.foo #bar').text('new text!');
  $('.foo #bar').click(function() {
    $(this).attr('title', 'new title');
    $(this).width('100px');
  });

  $('.foo #bar').click();
});

// * Answer








// 2: If you needed to inject content into the 4th div via JS or jQuery from the <head> of the document
// without using document.ready how would you accomplish this?
<html>
<head>
// Your script runs here!
</head>
<body>
<h1>Placeholder test for H1</h1>
<div class="element"></div>
<div class="element"></div>
<div class="element"></div>
<div class="element"></div>

</body>
</html>


// Answer
<html>
<head>
<script>
// Your script runs here!
  function replaceHeader(text) {
    // check to make sure 'text' is a string
    if (typeof text !== 'string') {
      // if text is not a string - log the error and end function.
      console.error('replaceHeader `text` must be a string.');
      return;
    }
    document.getElementById('title').innerHTML = (text);
  }
  // Onload requires an anonymous function if the function is being invoked - i allow for strings to be passed so we can use the function for different things if we want
  // To change header text, edit the string below.
  window.onload = () => { replaceHeader('Hire me pls.') };
</script>
</head>
<body>
<h1 id="title">Placeholder test for H1</h1>
<div class="element"></div>
<div class="element"></div>
<div class="element"></div>
<div class="element"></div>

</body>
</html>





// 3: how could you rewrite the following code to make it shorter?
(function(d, $){
  $('li.foo a').attr('title', 'i am foo');
  $('li.bar a').attr('title', 'i am bar');
  $('li.baz a').attr('title', 'i am baz');
  $('li.bop a').attr('title', 'i am bop');
})(dojo, dojo.query);


// * Answer
(function(d, $){
  ['foo', 'bar', 'baz', 'bop'].map((className) => {
    d(`li.${className} a`)
    .attr('title', `I am a ${className}`);
  })
})(dojo, dojo.query);





// 4: given the following data structure, write code that returns an array
// containing the name of each item, followed by a comma-separated list of
// the item's extras, if it has any. e.g.
//
//    [ "Salad (Chicken, Steak, Shrimp)", ... ]
//
// (you can assume the jQuery library is available)
var menuItems = [
  {
    id : 1,
    name : 'Salad',
    extras : [
      'Chicken', 'Steak', 'Shrimp'
    ]
  },

  {
    id : 2,
    name : 'Potato',
    extras : [
      'Bacon', 'Sour Cream', 'Shrimp'
    ]
  },

  {
    id : 3,
    name : 'Sandwich',
    extras : [
      'Turkey', 'Bacon'
    ]
  },

  {
    id : 4,
    name : 'Bread'
  }
];

// * Answer
// here i cover for some edge cases like - "what if something in the middle has no extras - not just the item at the last index?" and "what if there are extras but an empty array of extras"
function printMenu() {
  let menu = [];
  menuItems.forEach((item) => {
    if (item.extras && item.extras.length) {
      let extras = [];
      item.extras.forEach((extra) => {
        extras.push(extra);
      });
      menu.push(`${item.name} (${extras.join(', ')})`);
    } else {
      menu.push(`${item.name}`);
    }
  });
  return menu
}






// 5: what is the faulty logic in the following code? how would you fix it?
var date = new Date(),
    day = date.getDate(),
    month = date.getMonth(),
    dates = [];

for (var i = 0; i <= 5; i++) {
  dates.push(month + '/' + (day + i));
}

console.log('The next five days are ', dates.join(', '));

// Answer
// I suppose the console.log() says "the next five days are...". Then it logs
// the next 5 days PLUS todays date. And todays date is not "the next 5 days". So
// I assume the problem is that the function should only return the next 5 days
// so the way to fix it is to have the for loop start at 1 instead of at 0.
// This way it will print the next 5 days only
var date = new Date(),
    day = date.getDate(),
    month = date.getMonth(),
    dates = [];

for (var i = 1; i <= 5; i++) {
  dates.push(month + '/' + (day + i));
}
console.log('The next five days are ', dates.join(', '));
