let repl = null;

const onBiwaError = (e) => {
  repl.displayError(e);
  throw(e)
}

window.biwascheme = new BiwaScheme.Interpreter(onBiwaError);
const bsConsole = document.getElementById("bs-console");

function biwaEval(inputValue) {
  biwascheme.evaluate(inputValue);
}

function openPopup() {
  repl = open("repl.html", "replWindow", "width=540,height=360");
}
