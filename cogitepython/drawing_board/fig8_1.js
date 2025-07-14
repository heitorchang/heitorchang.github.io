box(35, 12, 270, 38, "#DDD");

text(45, 30, "fruta");

arrow(90, 30, 130, 30);

text(147, 30, "' b a n a n a '", "18pt");

text(92, 66, "índice");

for (var i = 0; i <= 6; i++) {
  var x = 149 + i * 20;
  text(x, 66, i);
  line(x+6, 12, x+6, 56, true);
}
