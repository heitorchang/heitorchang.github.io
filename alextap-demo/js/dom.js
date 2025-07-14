"use strict";

////////////////////
// DOM manipulation

function show(divId) {
  divIds.forEach(function(d) {
    document.getElementById(d).className = "hidden";
  });
  
  document.getElementById(divId).className = "shown";
}

function clear(divId) {
  document.getElementById(divId).innerHTML = "";
}

function removeOptions(selectId) {
  var select = document.getElementById(selectId);
  for (var i = select.options.length - 1; i >= 0; i--) {
    select.remove(i);
  }
}

function removeRows(tableId) {
  var table = document.getElementById(tableId);
  for (var i = table.rows.length - 1; i >= 0; i--) {
    table.deleteRow(i);
  }
}

//// Usage:
// createSelect("selectId", [[value0, text0], [value1, text1]]);
function createSelect(id, options) {
  var select = document.createElement("select");
  select.setAttribute("id", id);

  for (var i = 0, optionsLen = options.length; i < optionsLen; i++) {
    var option = document.createElement("option");
    option.setAttribute("value", options[i][0]);
    var optionText = document.createTextNode(options[i][1]);
    option.appendChild(optionText);

    select.appendChild(option);
  }
  return select;
}                      

//// Usage:
// addOption("mySelect", ['value1', 'label1']);
function addOption(selectId, data) {
  var select = document.getElementById(selectId);
  var option = document.createElement("option");
  option.setAttribute("value", data[0]);

  var optionText = document.createTextNode(data[1]);

  option.appendChild(optionText);
  select.appendChild(option);
}

function addParagraph(containerId, text) {
  var container = document.getElementById(containerId);
  var p = document.createElement("p");
  var pText = document.createTextNode(text);
  p.appendChild(pText);
  container.appendChild(p);
}

function addBr(containerId) {
  var container = document.getElementById(containerId);
  container.appendChild(document.createElement("br"));
}

function addElement(containerId, element) {
  var container = document.getElementById(containerId);
  container.appendChild(element);
}

function addRow(tableId, data, onClickText) {
  var table = document.getElementById(tableId);
  var tr = document.createElement("tr");

  for (var i = 0, dataLength = data.length; i < dataLength; i++) {
    var td = document.createElement("td");
    var tdText = document.createTextNode(data[i]);
    td.appendChild(tdText);

    // right-align second column
    if (i === 1) {
      td.className = "numberColumn";
    }
      
    tr.appendChild(td);
  }

  tr.addEventListener('click', function() {
    alert(onClickText);
  });
  
  table.appendChild(tr);
}

function addRowClickFn(tableId, data, onClickFn) {
  var table = document.getElementById(tableId);
  var tr = document.createElement("tr");

  for (var i = 0, dataLength = data.length; i < dataLength; i++) {
    var td = document.createElement("td");
    var tdText = document.createTextNode(data[i]);
    td.appendChild(tdText);

    // right-align second column
    if (i === 1) {
      td.className = "numberColumn";
    }
      
    tr.appendChild(td);
  }

  tr.addEventListener('click', function() {
    onClickFn();
  });
  
  table.appendChild(tr);
}
