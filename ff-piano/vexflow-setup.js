// SETUP
var stave_additional_length = 120;
var stave_length = 600;

var stave_y = 0;
var stave_inner_space = 110;

var line_space = 265;


function translateTrebleToBass(note) {
  var table = {
    'c/2': 'a/3',
    'd/2': 'b/3',
    'e/2': 'c/4',
    'f/2': 'd/4',
    'g/2': 'e/4',
    'a/2': 'f/4',
    'b/2': 'g/4',
    'c/3': 'a/4',
    'd/3': 'b/4',
    'e/3': 'c/5',
    'f/3': 'd/5',
    'g/3': 'e/5',
    'a/3': 'f/5',
    'b/3': 'g/5',
    'c/4': 'a/5',
    'd/4': 'b/5',
    'e/4': 'c/6',
    'f/4': 'd/6',
    'g/4': 'e/6',
    'a/4': 'f/6',
    'b/4': 'g/6',
    'c/5': 'a/6',
    'd/5': 'b/6',
    'e/5': 'c/7',
    'f/5': 'd/7',
    'g/5': 'e/7',
    'a/5': 'f/7',
    'b/5': 'g/7',

    
  };
  return table[note];
}


// do not add # marks to notes
function note(keys, duration, isBass) {
  // hack, manually translate treble location to bass location

  if (isBass) {
    var newKeys = [];
    // console.log("manually translating note " + keys[0] + " to bass clef");
    // iterate through note array to modify keys
    for (var i = 0; i < keys.length; i++) {
      newKeys.push(translateTrebleToBass(keys[i]));
    }
    keys = newKeys;
  }
  return new Vex.Flow.StaveNote({ keys: keys, duration: duration.toString() });
}
