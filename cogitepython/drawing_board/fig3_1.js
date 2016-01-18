var xOffset = 95;
var yOffset = 15;

box(xOffset + 90, 0, 280, 53, "#DDD");

text(xOffset + 102, yOffset, "linha1");
arrow(xOffset + 150, yOffset, xOffset + 185, yOffset);
text(xOffset + 190, yOffset, "'Bim tidde '");

yOffset += 22;

text(xOffset + 102, yOffset, "linha2");
arrow(xOffset + 150, yOffset, xOffset + 185, yOffset);
text(xOffset + 190, yOffset, "'tidde bam.'");

yOffset += 30;

box(xOffset + 90, yOffset, 280, 75, "#DDD");

yOffset += 15;

text(xOffset + 102, yOffset, "parte1");
arrow(xOffset + 150, yOffset, xOffset + 185, yOffset);
text(xOffset + 190, yOffset, "'Bim tidde '");

yOffset += 22;

text(xOffset + 102, yOffset, "parte2");
arrow(xOffset + 150, yOffset, xOffset + 185, yOffset);
text(xOffset + 190, yOffset, "'tidde bam.'");

yOffset += 22;

text(xOffset + 98, yOffset, "concat");
arrow(xOffset + 150, yOffset, xOffset + 185, yOffset);
text(xOffset + 190, yOffset, "'Bim tidde tidde bam.'");

yOffset += 30;

box(xOffset + 90, yOffset, 280, 30, "#DDD");

yOffset += 15;

text(xOffset + 105, yOffset, "bruce");
arrow(xOffset + 150, yOffset, xOffset + 185, yOffset);
text(xOffset + 190, yOffset, "'Bim tidde tidde bam.'");

text(97, 30, "__main__");
text(0, 105, "concatene_duas_vezes");
text(17, 171, "imprima_duas_vezes");
