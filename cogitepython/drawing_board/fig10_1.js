var yOffset = 10;

// queijos - cheeses

text(20, 50, "queijos");
arrow(80, 50, 125, 50);

text(140, 20, "list", "10pt");
box(140, 30, 165, 90, "#DDD");

dictionary(150, 50, [
  ['0', "'Cheddar'"],
  ['1', "'Edam'"],
  ['2', "'Gouda'"],
]);


// números - numbers
yOffset = 183;
text(12, yOffset, "números");
arrow(80, yOffset, 125, yOffset);

text(140, 150, "list", "10pt");

box(140, 160, 120, 90, "#DDD");
dictionary(149, 182, [
  ['0', '42'],
  ['1', '123'],
  ['', '5'],
], false);

// arrows
var arrowLength = 37;
var arrowXOffset = 170;
var lineHeight = 25;
arrow(arrowXOffset, yOffset, arrowXOffset + arrowLength, yOffset);
yOffset += lineHeight;
line(arrowXOffset, yOffset, arrowXOffset + arrowLength + 5, yOffset, true);
arrow(arrowXOffset, yOffset, arrowXOffset + arrowLength + 3, yOffset + lineHeight - 3);

// X
var xOffset = 205;
var wordLength = 40;
// line(xOffset, yOffset, xOffset + wordLength, yOffset + lineHeight);
line(216, 198, 246, 216);
line(216, 216, 246, 198);

// vazio - empty
yOffset = 298;
text(36, yOffset, "vazio");
arrow(80, yOffset, 125, yOffset);

text(140, 275, "list", "10pt");
box(140, 285, 30, 30, "#DDD");
