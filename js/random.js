
//We want elem accessible to init() and any other functions below

let elem;
//       //window.onload = init; //not recommended
// window.addEventListener('load', init);

var quotes = [
  'Beautiful choice. That will be $119,999 please.',
  'That is a hideous color. We will pay you $10 to take this car.',
  'Do you really like this color? Okay, that will be $49,999 please.',
  'This color is trending. That will be $29,999 please.',
  'This was last year\'s color. We have a special discounted price of $69,999.'
]

function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];


  elem = document.getElementById('car-color');
  // elem.addEventListener('click', function() {
  elem.style.background = getRandomColor();

      // A nice utility function for generating random hex values
      function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
}
// $(document).ready(function() {
//
//   $('#myBtn').click(function() {
//     $('div.car-color').css("background", getRandomColor());
//   });
// });
//
// // -------------------------------------------------------
// function getRandomColor() {
//   let letters = '0123456789ABCDEF';
//   let color = '#';
//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }
