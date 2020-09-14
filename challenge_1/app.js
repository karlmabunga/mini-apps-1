
// Elements
const reset = document.querySelector('button');
const spots = document.querySelectorAll('.spot');
console.log(spots);

// game variables
var xIsNext = true;
var noWinner = true;

// handle events

const checkWinner = () => {
  var one = spots[0].classList[1]
  var two = spots[1].classList[1]
  var three = spots[2].classList[1]
  var four = spots[3].classList[1]
  var five = spots[4].classList[1]
  var six = spots[5].classList[1]
  var seven = spots[6].classList[1]
  var eight = spots[7].classList[1]
  var nine = spots[8].classList[1]
  if (one && one === two && two === three) {
    alert(one + ' has won!')
  } else if (four && four === five && five === six) {
    alert(four + ' has won!')
  } else if (seven && seven === eight && eight === nine) {
    alert(seven + ' has won!')
  } else if (one && one === four && four === seven) {
    alert(one + ' has won!')
  } else if (two && two === five && five === eight) {
    alert(two + ' has won!')
  } else if (three && three === six && six === nine) {
    alert(three + ' has won!')
  } else if (three && three === five && five === seven) {
    alert(three + ' has won!')
  } else if (one && one === five && five === nine) {
    alert(one + ' has won!')
  }

}

const handleReset = (event) => {
  // wipe the x or o from the class
  for (const spot of spots) {
    spot.innerHTML = '';
    if (spot.classList[1] === 'X') {
      spot.classList.remove('X')
    } else if (spot.classList[1] === 'O') {
      spot.classList.remove('O')
    }
  }
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
    checkWinner();
    xIsNext = !xIsNext
  } else {
    event.target.classList.add('O')
    document.getElementById(location).innerHTML = 'O'
    checkWinner();
    xIsNext = !xIsNext
  }
}

// event listener

for (const spot of spots) {
  spot.addEventListener('click', handleSpotClick)
}

reset.addEventListener('click', handleReset)


// var inputs = ['', '', '','', '', '','', '', ''];

