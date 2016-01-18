var xOffset = 120;
var yOffset = 10;
var textYOffset = 20;

var colOffset = 170;

var boxWidth = 88;
var boxHeight = 42;

var nXOffset = 182;
var arrowXOffset = 199;
var iXOffset = 236;
var arrowLength = 30;

text(80, yOffset + textYOffset, "__main__");
box(colOffset, yOffset, boxWidth, boxHeight, "#DDD");

// programming, m---r
for (var i = 3; i >= 0; i--) {
  yOffset += 55;

  text(0, yOffset + textYOffset, "contagem_regressiva");
  box(colOffset, yOffset, boxWidth, boxHeight, "#DDD");
  text(nXOffset, yOffset + textYOffset, "n");
  arrow(arrowXOffset, yOffset + textYOffset, arrowXOffset + arrowLength, yOffset + textYOffset);
  text(iXOffset, yOffset + textYOffset, i);
}
