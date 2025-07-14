// test dictionary
box(30, 15, 270, 250, "#DDD");
dictionary(15, 35, [
  ['', ''],  // unsure why first row is offset
  ['a', 'ei'],
  ["0", "zero"],
  ["00", "double o"],
  ["10", "ten"],
  ["0", "zero"],
  ["00", "double o"],
  ["10", "ten"],
  ['John Cleese', "actor o"],
  ['a', "[ 1, 2, 3 ]"],
]);

box(370, 100, 220, 70, "#DDD");
dictionary(300, 120, [
  ['', ''],
  ['a longer key', 'value'],
  ['s', 'string'],
], false);
