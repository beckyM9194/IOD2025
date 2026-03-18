const square = document.querySelector('.slider-square');
let goingDown = true;

function slideSquare() {
  if (goingDown) {
    square.style.top = '200px';
    square.style.backgroundColor = 'blue';
  } else {
    square.style.top = '0px';
    square.style.backgroundColor = 'red';
  }
  goingDown = !goingDown;
}

// Move every 1 second after transition
setInterval(slideSquare, 2000);