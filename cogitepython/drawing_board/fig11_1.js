
text(0, 59, "hist");
arrow(30, 59, 70, 59);

text(72, 30, "dict", "10pt");
boxCorners(72, 42, 172, 185);
dictionary(70, 60, [
  ["'o'", '1'],
  ["'s'", '1'],
  ["'r'", '2'],
  ["'c'", '1'],
  ["'a'", '1'],
]);

text(212, 59, "inv");
arrow(238, 59, 281, 59);

text(283, 30, "dict", "10pt");
boxCorners(283, 42, 344, 233);
dictionary(303, 60, [
  ['1', ''],
  ['', ''],
  ['', ''],
  ['', ''], 
  ['', ''],
  ['', ''],
], false);

text(307, 216, "2");

text(380, 30, "list", "10pt");
boxCorners(380, 42, 485, 155);
dictionary(390, 60, [
  ['0', "'o'"],
  ['1', "'s'"],
  ['2', "'c'"],
  ['3', "'a'"],
]);

text(380, 190, "list", "10pt");
boxCorners(380, 202, 485, 233);
dictionary(390, 217, [
  ['0', "'r'"],
]);

// arrows
arrow(323, 59, 378, 59);
arrow(323, 216, 378, 216);
