
// Elements
const reset = document.querySelector('button');
const spots = document.querySelectorAll('.spot');
console.log(spots);

// game variables
var xIsNext = true;
var noWinner = true;

// handle events
const handleReset = (event) => {
  console.log(event)
}
const handleSpotClick = (event) => {
  const location = event.target.id;
  const classList = event.target.classList;

  if (classList[1] === 'X' || classList[1] === 'O') {
    return;
  }
  if (xIsNext) {
    event.target.classList.add('X')
    document.getElementById(location).innerHTML = 'X'
    console.log(event.target)
    xIsNext = !xIsNext
  } else {
    event.target.classList.add('O')
    document.getElementById(location).innerHTML = 'O'
    console.log(event.target)
    xIsNext = !xIsNext
  }
}

// event listener

for (const spot of spots) {
  spot.addEventListener('click', handleSpotClick)
}

reset.addEventListener('click', handleReset)

// var x = function () {
//   inputs[0][0] = 'X';
//   console.log(inputs);
//   document.getElementById('one').innerHTML = "X"
// }

var inputs = ['', '', '','', '', '','', '', ''];

