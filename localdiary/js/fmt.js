function pad(s) {
  if (s.length < 2) {
    return "0" + s;
  } else {
    return s;
  }
}


function log(s) {
  var newSpan = document.createElement("span");
  newSpan.innerHTML = s + "<br>";
  
  document.getElementById("console").appendChild(newSpan);
}
