var intp = new BiwaScheme.Interpreter();

// gcd and lcm
intp.evaluate("(define (gcd a b) (if (= b 0) a (gcd b (mod a b))))");
intp.evaluate("(define (lcm a b) (/ (* a b) (gcd a b)))");

// custom print
intp.evaluate("(define (interleave-sep sep args) (if (null? args) '() (cons (car args) (cons sep (interleave-sep sep (cdr args))))))");
intp.evaluate("(define (butlast lst) (reverse (cdr (reverse lst))))");
intp.evaluate('(define (print-many . args) (apply print (butlast (interleave-sep ";" args))))');

function limitDecimals(str) {
  var indexOfPeriod = str.indexOf(".");
  if (indexOfPeriod >= 0) {
    return str.substring(0, str.indexOf(".") + 5).trim();
  } else {
    return str.trim();
  }
}

// listen for Enter on input
$("#singleLineCode").keyup(function (e) {
  if (e.keyCode == 13) {
    $("#eval").click();
  } else if (e.keyCode == 27) {
    $("#clear").click();
  }  
});

function discardLeftOfParen(str) {
  return str.substring(str.indexOf("("));
}

document.getElementById("clear").addEventListener("click", function () {
  flash("clear");
  document.getElementById("singleLineCode").value = "";
  document.getElementById("bs-console").innerHTML = "0";
  document.getElementById("singleLineCode").focus();
});

document.getElementById("eval").addEventListener("click", function () {
  flash("eval");
  var bsConsole = document.getElementById("bs-console");

  var inputElem = document.getElementById("singleLineCode");

  // inputElem.value = discardLeftOfParen(inputElem.value);
  bsConsole.innerHTML = "";
  intp.evaluate("(print-many " + inputElem.value + ')');

  if (bsConsole.innerHTML === "") {
    bsConsole.innerHTML = "Error: please revise your input";
  } else {
    var consoleText = $(bsConsole).text();
    // limit decimals
    var results = consoleText.split(";");
    var newResult = "";
    for (var i = 0, len = results.length; i < len; i++) {
      newResult += limitDecimals(results[i].trim()) + "; ";
    }

    // remove last semicolon
    bsConsole.innerHTML = newResult.substring(0, newResult.length - 2);
  }
});

document.getElementById("bksp").addEventListener("click", function () {
  flash("bksp");
  var focused = document.getElementById("singleLineCode");
  var removedSelection = removeSelection();
  var caretPos = focused.selectionStart;
  var newCaretPos = caretPos;

  if (!removedSelection) {
    var textBeforeBackspace = focused.value;
    focused.value = textBeforeBackspace.slice(0, Math.max(0, caretPos-1)) + textBeforeBackspace.slice(caretPos);
    newCaretPos = Math.max(0, caretPos - 1);
  }
  focused.setSelectionRange(newCaretPos, newCaretPos);
});

function removeSelection() {
  var answerElem = document.getElementById("singleLineCode");
  
  var selectStart = answerElem.selectionStart;
  var selectEnd = answerElem.selectionEnd

  if (selectEnd - selectStart > 0) {
    var text = answerElem.val();
    answerElem.val(text.slice(0, selectStart) + text.slice(selectEnd));
    answerElem.setSelectionRange(selectStart, selectStart);
    return true;
  }
}

function addToInput(str) {
  var focused = document.getElementById("singleLineCode");

  // remove selection, if any
  var removedSelection = removeSelection();
  var caretPos = focused.selectionStart;
  var text = focused.value;

  text = text.slice(0, caretPos) + str + text.slice(caretPos);

  focused.value = text;

  var strLen = str.length;
  // move caret position forward
  focused.setSelectionRange(caretPos + strLen, caretPos + strLen);
}

function addClickListener(id, str) {
  document.getElementById(id).addEventListener("click", function () {
    // document.getElementById("lastPressed").innerHTML = id;
    flash(id);
    addToInput(str);
  });
}

function flash(id) {
  document.getElementById(id).style.backgroundColor = "#EEF";
  setTimeout(function () {
    document.getElementById(id).style.backgroundColor = "#FFF";
  }, 70);
}

addClickListener("one", "1");
addClickListener("two", "2");
addClickListener("three", "3");
addClickListener("four", "4");
addClickListener("five", "5");
addClickListener("six", "6");
addClickListener("seven", "7");
addClickListener("eight", "8");
addClickListener("nine", "9");
addClickListener("zero", "0");
addClickListener("dot", ".");

// addClickListener("leftParen", "(");
addClickListener("rightParen", ")");
addClickListener("space", " ");

addClickListener("divide", "(/ ");
addClickListener("multiply", "(* ");
addClickListener("subtract", "(- ");
addClickListener("add", "(+ ");

addClickListener("sqrt", "(sqrt ");
addClickListener("expt", "(expt ");
addClickListener("log", "(log ");
addClickListener("exp", "(exp ");
addClickListener("lcm", "(lcm ");

function runDemo() {
  $("#singleLineCode").val("(* (- 98.6 32) (/ 5 9))");
  $("#eval").click();
}
