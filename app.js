// selecting the elements

const canvas = document.querySelector('.board');
const btn = document.querySelector('button.shake');
const moveAmount = 10;

// Canvas properties
const ctx = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;

// for generating random x and y values

let randomX = Math.floor(Math.random() * width);
let randomY = Math.floor(Math.random() * height);

// canvas default properties
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;
let hue = 0;
// ctx.strokeStyle = `hsl(${hue},100%,50%)`;

ctx.beginPath();
ctx.moveTo(randomX, randomY);
ctx.lineTo(randomX, randomY);
ctx.stroke();

// function for drawing

const draw = options => {
  //   console.log('Called draw');
  //   hue += 10;
  ctx.strokeStyle = `hsl(${Math.random() * 1000},100%,50%)`;
  ctx.beginPath();
  ctx.moveTo(randomX, randomY);
  if (options === 'ArrowUp') {
    randomY -= moveAmount;
  } else if (options === 'ArrowDown') {
    randomY += moveAmount;
  } else if (options === 'ArrowRight') {
    randomX += moveAmount;
  } else {
    randomX -= moveAmount;
  }

  ctx.lineTo(randomX, randomY);
  ctx.stroke();
};

// handler for working with keypress events
window.addEventListener('keydown', function(event) {
  //   console.log(event.keyCode, event.key);
  if (
    event.keyCode === 37 ||
    event.keyCode === 38 ||
    event.keyCode === 39 ||
    event.keyCode === 40
  ) {
    console.log(event.key);
    draw(event.key);
  }
});

// clearing canvas

const canvasClear = () => {
  canvas.classList.add('shake');
  ctx.clearRect(0, 0, width, height);
  canvas.addEventListener(
    'animationend',
    function() {
      canvas.classList.remove('shake');
    },
    { once: true }
  );
};

btn.addEventListener('click', canvasClear);
