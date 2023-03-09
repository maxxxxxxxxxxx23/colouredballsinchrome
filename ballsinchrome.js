function createBall() {
  let ball = document.createElement("div");
  ball.style.position = "absolute";
  ball.style.width = "50px";
  ball.style.height = "50px";
  ball.style.borderRadius = "50%";

  // Generate a random color
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  ball.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

  document.body.appendChild(ball);

  let speedX = Math.random() * 10 - 5;
  let speedY = Math.random() * 10 - 5;

  let x = Math.random() * (window.innerWidth - ball.offsetWidth);
  let y = Math.random() * (window.innerHeight - ball.offsetHeight);
  ball.style.left = x + "px";
  ball.style.top = y + "px";

  function animate() {
    x += speedX;
    y += speedY;

    if (x + speedX > window.innerWidth - ball.offsetWidth || x + speedX < 0) {
      speedX = -speedX;
    }
    if (y + speedY > window.innerHeight - ball.offsetHeight || y + speedY < 0) {
      speedY = -speedY;
    }

    ball.style.left = x + "px";
    ball.style.top = y + "px";

    requestAnimationFrame(animate);
  }

  animate();
}

for (let i = 0; i < 10; i++) {
  createBall();
}

// number of balls ^
