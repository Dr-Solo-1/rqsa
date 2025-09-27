const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let dancerX = canvas.width / 2;
let dancerY = canvas.height / 2;
let dancerRadius = 20;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(dancerX, dancerY, dancerRadius, 0, 2 * Math.PI);
  ctx.fillStyle = 'red';
  ctx.fill();

  dancerY += 5;
  if (dancerY > canvas.height) {
    dancerY = 0;
  }

  requestAnimationFrame(draw);
}

draw();
