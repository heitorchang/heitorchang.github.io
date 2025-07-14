"use strict";

/////////////////////////
// test for localStorage

try {
  localStorage.setItem('alextap_none', 'alextap_none');
  localStorage.removeItem('alextap_none');
} catch (exception) {
  document.getElementById("banner").innerHTML = "Error: cannot save to localStorage";
}
