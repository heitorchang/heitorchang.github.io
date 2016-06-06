function makeSelection(id, value) {
  document.getElementById(id).value = value.toString();
}

function setAddSelectsToNow() {
  var now = new Date();
  makeSelection("year", now.getFullYear());
  makeSelection("month", now.getMonth() + 1);
  makeSelection("day", now.getDate());
  makeSelection("hours", now.getHours());
  makeSelection("minutes", now.getMinutes());
  makeSelection("seconds", now.getSeconds());
}

function setFromSelectsToStartOfMonth() {
  var now = new Date();
  makeSelection("from_year", now.getFullYear());
  makeSelection("from_month", now.getMonth() + 1);
  makeSelection("from_day", 1);
}

function setToSelectsToToday() {
  var now = new Date();
  makeSelection("to_year", now.getFullYear());
  makeSelection("to_month", now.getMonth() + 1);
  makeSelection("to_day", now.getDate());
}

function setFromSelectsToToday() {
  var now = new Date();
  makeSelection("from_year", now.getFullYear());
  makeSelection("from_month", now.getMonth() + 1);
  makeSelection("from_day", now.getDate());
}

function setToSelectsToNextMonth() {
  var now = new Date();
  makeSelection("to_year", now.getFullYear());
  makeSelection("to_month", now.getMonth() + 2);
  makeSelection("to_day", 1);
}

document.getElementById("ok").addEventListener("click", function() {
  storeEntry(document.getElementById("year").value,
             document.getElementById("month").value,
             document.getElementById("day").value,
             document.getElementById("hours").value,
             document.getElementById("minutes").value,
             document.getElementById("seconds").value,
             document.getElementById("entry").value);
  setAddSelectsToNow();
  document.getElementById("filter").click();
  document.getElementById("entry").value = "";
});

document.getElementById("filter").addEventListener("click", function() {
  var fromEpoch = YMDToEpoch(
    document.getElementById("from_year").value,
    document.getElementById("from_month").value,
    document.getElementById("from_day").value, 0, 0, 0);
  
  var toEpoch = YMDToEpoch(
    document.getElementById("to_year").value,
    document.getElementById("to_month").value,
    document.getElementById("to_day").value, 0, 0, 0);
  
  filterEntries(fromEpoch, toEpoch);
});

document.getElementById("filterToday").addEventListener("click", function() {
  setToSelectsToToday();
  setFromSelectsToToday();

  document.getElementById("filter").click();
});
