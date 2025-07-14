var canvasWidth = 200;
var canvasHeight = 170;
var TREBLE_MIN = 10;
var TREBLE_MAX = 28;

var boundaries = [82, 109, 135, 161, 187, 212, 239, 264, 291, 318, 342, 369, 395, 422, 447, 474, 499, 526, 552, 577, 604, 630, 655, 680, 707, 732, 759, 784, 811, 836, 863, 889, 915, 940, 966, 991, 1016];

var notes = ["c/2", "d/2", "e/2", "f/2", "g/2", "a/2", "b/2",
             "c/3", "d/3", "e/3", "f/3", "g/3", "a/3", "b/3",
             "c/4", "d/4", "e/4", "f/4", "g/4", "a/4", "b/4",
             "c/5", "d/5", "e/5", "f/5", "g/5", "a/5", "b/5",
             "c/6", "d/6", "e/6", "f/6", "g/6", "a/6", "b/6",
             "c/7"];

var stave_length = 600;
  
var stave_y = 35;
var stave_inner_space = 110;

var quizRnd = 14;

function getKeyIndex(x) {
  for (var idx = 0; idx < boundaries.length; idx++) {
    if (x < boundaries[idx]) {
      return idx - 1;
    }
  }
  return -1;
}

function drawNote(note, ctx, stave) {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);  
  stave.draw();

  if (note) {
    var voice = new Vex.Flow.Voice({num_beats: 1, beat_value: 4, resolution: Vex.Flow.RESOLUTION});
    var notesTreble = [
      new Vex.Flow.StaveNote({ keys: [note], duration: '4' }),
    ];
    voice.addTickables(notesTreble);
    var formatter = new Vex.Flow.Formatter();
    formatter.format([voice], stave_length);
    stave.setNoteStartX(stave.getNoteStartX());
    voice.draw(ctx, stave);
  }
}
  

function randint(prev, min, max) {
  var trial = Math.floor(Math.random() * (max - min + 1)) + min;
  if (trial == prev) {
    return randint(prev, min, max);
  }
  return trial;
}

$(document).ready(function() {
  var synth = new AudioSynth;
  var piano = synth.createInstrument('piano');
  
  $("#roland").on("click", function(event) {
    var x = event.pageX - this.offsetLeft;
    var y = event.pageY - this.offsetTop;
    console.log("X Coordinate: " + x + " Y Coordinate: " + y);

    if (y > 194 && y < 353 && x > 81 && x < 1017) {
      clickedIdx = getKeyIndex(x);
      noteStr = notes[clickedIdx];
      piano.play(noteStr[0].toUpperCase(), parseInt(noteStr[2], 10), 1.5);
      drawNote(notes[clickedIdx], clickCtx, clickStave);
      checkAns(clickedIdx);
    }
  });
  
  var quizCanvas = document.getElementById("quizNote");
  var quizRenderer = new Vex.Flow.Renderer(quizCanvas, Vex.Flow.Renderer.Backends.CANVAS);
  var quizCtx = quizRenderer.getContext();

  var quizStave = new Vex.Flow.Stave(10, stave_y, stave_length);
  quizStave.addClef("treble").setContext(quizCtx);
  drawNote(notes[quizRnd], quizCtx, quizStave);

  var clickCanvas = document.getElementById("clickNote");
  var clickRenderer = new Vex.Flow.Renderer(clickCanvas, Vex.Flow.Renderer.Backends.CANVAS);
  var clickCtx = clickRenderer.getContext();

  var clickStave = new Vex.Flow.Stave(10, stave_y, stave_length);
  clickStave.addClef("treble").setContext(clickCtx);

  drawNote("", clickCtx, clickStave);

  function checkAns(idx) {
    if (idx == quizRnd) {
      $("#message").removeClass();
      $("#message").addClass("blue");
      $("#message").text("Very good! Try the next one.");
      window.setTimeout(function () {
        quizRnd = randint(quizRnd, TREBLE_MIN, TREBLE_MAX);
        drawNote(notes[quizRnd], quizCtx, quizStave);
        drawNote("", clickCtx, clickStave);
        $("#message").text("Please click on a key");
      }, 750);
    } else {
      $("#message").removeClass();
      $("#message").addClass("red");
      $("#message").text("Try again");
    }
  }
                       

});
