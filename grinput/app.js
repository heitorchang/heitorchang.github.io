var mainArea = document.getElementById("main");
var completionsArea = document.getElementById("completions");
var completions = "";
var completionsRow = 0;
var totalRows = 0;

function inspect() {
  var mainValue = mainArea.value;
  var lastChar = mainValue.slice(-1);
  var gr = mainValue.match(/[a-z.]+$/);
  completions = data[gr];
  if (completions) {
    completionsRow = 0;
    totalRows = Math.floor((completions.length - 1) / 10);
    formatCompletions();
  } else {
    completions = "";
    completionsArea.value = "";
  }
}

function formatCompletions() {
  var rowChars = completions.slice(10 * completionsRow, 10 * (completionsRow + 1));

  var result = ""
  for (var i = 1; i <= 9; i++) {
    if (10 * completionsRow + i <= completions.length) {
      result += "(" + i + ")" + rowChars[i-1] + " ";
    }
    if (i == 5) {
      result += "\n";
    }
  }

  if (10 * completionsRow + i <= completions.length) {
    result += "(0)" + rowChars[9];
  }
  completionsArea.value = result;
}

main.addEventListener("keydown", function (e) {
  var code = e.keyCode;
  if (code == 38 && completions != "") {
    // up
    e.preventDefault();
    if (completionsRow >= 1) {
      completionsRow -= 1;
      formatCompletions();
    }
  } else if (code == 40 && completions != "") {
    // down
    e.preventDefault();
    if (completionsRow < totalRows) {
      completionsRow += 1;
      formatCompletions();
    }
  }
});

main.addEventListener("keyup", function (e) {
  var code = e.keyCode;
  if (code != 38 && code != 40) {
    if (code == 32 && completions != "") {
      // space pressed
      idx = 0;
      // replace GR with character
      replaceGRWithChar(idx);
      
    } else if (code >= 48 && code <= 57 && completions != "") {
      var idx = 0;
      if (code == 48) {
        idx = 9;
      } else {
        idx = code - 49;
      }
      // replace GR with character
      replaceGRWithChar(idx);
    } else {
      inspect();
    }
  }
});

function replaceGRWithChar(idx) {
  var text = mainArea.value;
  console.log(completionsRow);
  var completion = completions[completionsRow * 10 + idx] || "";
  mainArea.value = text.replace(/[0-9a-z.]+\s?$/, completion);
  completions = "";
  completionsArea.value = "";
  completionsRow = 0;
}

var prevButton = document.getElementById("prevPage");
var nextButton = document.getElementById("nextPage");

prevButton.addEventListener("click", function () {
  // up
  if (completionsRow >= 1) {
    completionsRow -= 1;
    formatCompletions();
  }
});

nextButton.addEventListener("click", function () {
  // down
  if (completionsRow < totalRows) {
    completionsRow += 1;
    formatCompletions();
  }
});
