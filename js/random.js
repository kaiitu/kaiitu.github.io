// function newColor() {
//   var randomRed = Math.floor(Math.random() * 255);
//   document.getElementById('newRed').innerHTML = randomRed;
//   var randomGreen = Math.floor(Math.random() * 255);
//   document.getElementById('newGreen').innerHTML = randomGreen;
//   var randomBlue = Math.floor(Math.random() * 255);
//   document.getElementById('newBlue').innerHTML = randomBlue;
// }

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


function setRandomColor() {
  $("#car-color").css("background-color", getRandomColor());
}
