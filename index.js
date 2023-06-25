const canvas = document.getElementById("my-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let points = [];

class Point {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

const triangleTop = new Point(window.innerWidth / 2, 50, 3);
triangleTop.draw();

const triangleLeft = new Point(50, window.innerHeight - 50, 3);
triangleLeft.draw();

const triangleRight = new Point(
  window.innerWidth - 50,
  window.innerHeight - 50,
  3
);
triangleRight.draw();

const triangle = [triangleTop, triangleLeft, triangleRight];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function drawRest(prevPoint) {
  let randomCorner, middlePoint;

  for (let i = 0; i < 100000; i++) {
    randomCorner = triangle[getRandomInt(0, 3)];
    console.log(randomCorner);

    //find middle point
    middlePoint = new Point(
      (prevPoint.x + randomCorner.x) / 2,
      (prevPoint.y + randomCorner.y) / 2,
      1
    );
    middlePoint.draw();
    prevPoint = middlePoint;
  }
}

canvas.addEventListener(
  "click",
  function (e) {
    const firstPoint = new Point(e.x, e.y, 1);
    firstPoint.draw();
    drawRest(firstPoint);
    // draw rest
  },
  { once: true }
);
