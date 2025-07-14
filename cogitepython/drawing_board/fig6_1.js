var yOffset = 30;
var arrowLength = 25;

var boxXOffset = 82;
var boxWidth = 428;
var boxHeight = 37;

var lineHeight = 52;

var fatorialXOffset = 23;
var nXOffset = 93;
var niXOffset = 93 + arrowLength + 17;

var chamadaXOffset = niXOffset + 42;
var chamadaiXOffset = chamadaXOffset + arrowLength + 143 + 5;

var resultadoXOffset = chamadaiXOffset + 42;
var resultadoiXOffset = resultadoXOffset + arrowLength + 70 + 5;


box(boxXOffset, yOffset - boxHeight / 2, boxWidth, boxHeight, "#DDD");
text(0, yOffset, "__main__");

function drawBoxAndArc(n, recurse, result, returnVal) {
  yOffset += lineHeight;
  box(boxXOffset, yOffset - boxHeight / 2, boxWidth, boxHeight, "#DDD");

  text(fatorialXOffset, yOffset, "fatorial");

  text(nXOffset, yOffset, "n");
  arrow(nXOffset + 13, yOffset, nXOffset + 13 + arrowLength, yOffset);
  text(niXOffset, yOffset, n);

  if (recurse) {
    text(chamadaXOffset, yOffset, "chamada_recursiva");
    arrow(chamadaXOffset + 143, yOffset, chamadaXOffset + 143 + arrowLength, yOffset);
    text(chamadaiXOffset, yOffset, recurse);
  }

  if (result) {
    text(resultadoXOffset, yOffset, "resultado");
    arrow(resultadoXOffset + 70, yOffset, resultadoXOffset + 70 + arrowLength, yOffset);
    text(resultadoiXOffset, yOffset, result);
  }

  // arc
  arcArrow(boxXOffset + boxWidth, yOffset - 5, boxHeight / 2 + 3);
  text(boxXOffset + boxWidth + boxHeight, yOffset - boxHeight / 2 - 12, returnVal);
}

drawBoxAndArc(3, 2, 6, 6);
drawBoxAndArc(2, 1, 2, 2);
drawBoxAndArc(1, 1, 1, 1);
drawBoxAndArc(0, false, false, 1);
