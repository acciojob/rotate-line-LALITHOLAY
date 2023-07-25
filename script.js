//your JS code here. If required.
const line = document.getElementById('line');
let angle = 45; // Set the initial angle to 45 degrees.

function rotateLine() {
  angle += 1;
  line.style.transform = `rotate(${angle}deg)`;
  requestAnimationFrame(rotateLine);
}

rotateLine();
