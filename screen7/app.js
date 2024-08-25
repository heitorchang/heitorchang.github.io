const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const canvasW = 360
const canvasH = 360

function bg(color) {
  ctx.fillStyle = color
}

function fg(color) {
  ctx.strokeStyle = color
}

function projx(x) {
  return (canvasW / 2) + x
}

function projy(y) {
  return (canvasH / 2) - y
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
