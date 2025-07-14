function fibBox(x, y, n) {
  var boxWidth = 92;
  var boxHeight = 50;

  box(x, y, boxWidth, boxHeight);
  text(x + 13, y + 15, "fibonacci");
  dictionary(x, y + 32, [
    ['n', n]]);
}

fibBox(240, 1, 4);

fibBox(120, 80, 3);
fibBox(360, 80, 2);

fibBox(60, 160, 2);
fibBox(180, 160, 1);
fibBox(300, 160, 1);
fibBox(420, 160, 0);

fibBox(1, 240, 1);
fibBox(120, 240, 0);

arrow(240, 51, 213, 80);
arrow(332, 51, 359, 80);

arrow(120, 131, 93, 158);
arrow(212, 131, 239, 158);
arrow(360, 131, 333, 158);
arrow(452, 131, 479, 158);

arrow(60, 211, 33, 238);
arrow(153, 211, 180, 238);
