"use strict";

/////////////////////////
// test for localStorage

try {
  localStorage.setItem('none', 'none');
  localStorage.removeItem('none');
} catch (exception) {
  document.getElementById("banner").innerHTML = "Error: cannot save to localStorage";
}
