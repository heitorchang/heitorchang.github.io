"use strict";

/////////////
// Shortcuts

function onClick(buttonId, f) {
  document.getElementById(buttonId).addEventListener("click", f);
}

function onChange(selectId, f) {
  document.getElementById(selectId).addEventListener("change", f);
}

function onKeyUp(selectId, f) {
  document.getElementById(selectId).addEventListener("keyup", f);
}

function selectedValue(selectId) {
  return document.getElementById(selectId).value;
}

function selectedLabel(selectId) {
  var select = document.getElementById(selectId);
  return select.options[select.selectedIndex].text;
}

function setHtml(id, text) {
  document.getElementById(id).innerHTML = text;
}

function setOption(selectId, optionValue) {
  var select = document.getElementById(selectId);
  select.value = optionValue;
}

function setValue(id, value) {
  document.getElementById(id).value = value;
}
