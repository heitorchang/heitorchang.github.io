const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = "#fff";
ctx.fillRect(0, 0, 400, 400)

function bg(color) {
  ctx.fillStyle = color
}

function fg(color) {
  ctx.strokeStyle = color
}

function projx(x) {
  return 200 + x
}

function projy(y) {
  return 200 - y
}

function rect(px, py, w, h) {
  ctx.beginPath()
  ctx.rect(projx(px), projy(py), w, -h)
  ctx.stroke()
}

function fill() {
  ctx.fill()
}

function pt(x, y) {
  rect(x, y, 1, 1)
}

function line(x1, y1, x2, y2) {
  ctx.beginPath()
  ctx.moveTo(projx(x1), projy(y1))
  ctx.lineTo(projx(x2), projy(y2))
  ctx.stroke()
}

function circle(x, y, r) {
  ctx.beginPath()
  ctx.arc(projx(x), projy(y), r, 0, 2 * Math.PI);
  ctx.stroke()
}

/* Sample drawings
fg("red")
line(-200, -200, 200, 200)

bg("green")
for (let x = -200; x <= 200; x++) {
  pt(x, 0.01 * x * x)
}

bg("blue")
for (let x = -200; x <= 200; x++) {
  // x^2 + y^2 = 100
  // y = sqrt(...
  pt(x, Math.pow(38200 - x * x, 0.5))
  pt(x, -Math.pow(38200 - x * x, 0.5))
}
*/

// fg("purple")
// circle(0, 0, 100)

bg("#ffa")
fg("#333")

// Add event listeners to pre blocks
document.querySelectorAll("pre").forEach((p) => {
  p.addEventListener("click", () => {
    sendPre(event);
  });
});
