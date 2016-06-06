function parseLabel(label) {
  var parts = label.split("_");
  if (parts[0] !== "LD") {
    log("Error: " + label + " is not a LocalDiary label");
    return 0;
  }
  
  return parts[1];
}


function createLabel(epoch) {
  return "LD_" + epoch;
}

function storeEntry(y, m, d, hh, mm, ss, entry) {
  if (entry === "erase all") {
    clearLDData();
  } else {
    try {
      var label = createLabel(YMDToEpoch(y, m, d, hh, mm, ss));
      localStorage[label] = localStorage[label] || "";
      localStorage[label] += entry + "|";
    } catch (e) {
      log("Error adding entry!");
      log(e);
    }
  }
}

function filterEntries(from, to) {
  var output = "";
  for (var i = localStorage.length - 1; i >= 0; i--) {
    var key = localStorage.key(i);
    if (key.substr(0, 2) === "LD") {
      var labelEpoch = parseLabel(key);
      var oneDay = 24 * 60 * 60 * 1000;
      if (from < labelEpoch && labelEpoch < to + oneDay) {
        var shortDate = epochToShort(parseInt(labelEpoch));
        var entries = localStorage.getItem(key).split("|");
        for (var e = 0, eLen = entries.length - 1; e < eLen; e++) { 
          output += '<span class="shortDate">' + shortDate + "</span> " + entries[e] + "<br>";
        }
      }
    }
  }
  // log(output);
  document.getElementById("filtered").innerHTML = output;
  // return output;
}

function clearLDData() {
  for (var i = localStorage.length - 1; i >= 0; i--) {
    var key = localStorage.key(i);
    if (key.substr(0, 2) === "LD") {
      localStorage.removeItem(key);
    }
  }
}
