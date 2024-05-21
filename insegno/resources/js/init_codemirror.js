const codemirrorOptions = {
  theme: "ambiance",
  lineNumbers: false,
  mode: {name: "python", version: 3, singleLineStringErrors: false},
  indentUnit: 4,
  matchBrackets: true,
  extraKeys: {
    "Shift-Enter": function(cm) {
      sendTextarea(cm.getTextArea().id, false);
    },
    "Ctrl-Enter": function(cm) {
      sendTextarea(cm.getTextArea().id, true);
    },
    "Ctrl-I": function(cm) {
      term.focus();
    },
  }
};
