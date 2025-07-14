var stateManual = { 'sites': [
  { 'name': "Facebook", 'url': "http://facebook.com", 'visits': "nnnnn", 'lastVisit': ", never" },
  { 'name': "Twitter", 'url': "http://twitter.com", 'visits': "nnnnn", 'lastVisit': ", never" },
  { 'name': "Google News", 'url': "http://news.google.com", 'visits': "nnnnn", 'lastVisit': ", never" },
]};

function saveState(state) {
  localStorage.productivityDrainState = JSON.stringify(state);
}

function loadState() {
  if (localStorage.productivityDrainState == null) {
    return stateManual;
  } else {
    return JSON.parse(localStorage.productivityDrainState);
  }
}

function buildCheckboxes(visitString, siteIndex, li) {
  for (var i = 0; i < visitString.length; i++) {
    var checkboxName = "site" + siteIndex + "__cb";
    var checkboxId = checkboxName + i;
    var checked = null;
    if (visitString[i] == "y") {
      checked = "checked";
    }
    $("<label>", { for: checkboxId }).appendTo(li);
    $("<input>", { type: 'checkbox', name: checkboxName, id: checkboxId, checked: checked}).appendTo(li);
  }
}

function nowHMM() {
  var d = new Date();
  var h = d.getHours() % 12;
  if (h == 0) {
    h = "12"
  }
  var mm = d.getMinutes();
  if (mm < 10) {
    mm = "0" + mm.toString();
  }
  return h + ":" + mm;
}

function buildBlock(site, index) {
  var id = "site" + index;
  var li = $("<li>", { id: id });
  var link = $("<a>", { href: site.url, target: '_blank', class: 'siteLink', text: site.name, id: 'link' + index });

  var visitsString = site.visits;
  if (mayVisit(visitsString) == -1) {
    link.addClass('strike');
  }

  link.appendTo(li);
  
  var lastVisit = $("<span>", { text: " (visited " + site.lastVisit + ") ", class: "small" });
  lastVisit.appendTo(li);

  // add edit/delete buttons
  var editButton = $("<button>", { class: "ui-button ui-widget ui-corner-all blueButton", id: "edit" + index, text: "edit" });  
  editButton.appendTo(li);
  editButton.click(function() {
    $("#editSiteIndex").val(index);
    var siteIndex = parseInt($("#editSiteIndex").val());
    var site = state.sites[siteIndex];
    var siteName = site.name;
    var siteURL = site.url;
    var siteTimes = site.visits.length;
    
    $("#editSiteName").val(siteName);
    $("#editSiteURL").val(siteURL);
    $("#editSiteTimes").val(siteTimes);
    editSiteDialog.dialog("open");
  });

  var deleteButton = $("<button>", { class: "ui-button ui-widget ui-corner-all redButton", id: "delete" + index, text: "remove" });  
  deleteButton.appendTo(li);
  deleteButton.click(function() {
    deleteSite(index);
  });

  var clearButton = $("<button>", { class: "ui-button ui-widget ui-corner-all grayButton", id: "clear" + index, text: "clear checkboxes" });  
  clearButton.appendTo(li);
  clearButton.click(function() {
    resetSite(index);
  });

  $("<br>").appendTo(li);
  $("<br>").appendTo(li);
  $("<span>", { text: "Visits: " }).appendTo(li);
  
  buildCheckboxes(site.visits, index, li);
  
  return li;
}

function buildList(state) {
  var sites = state.sites;
  var parent = $("#sortable");
  for (var i = 0; i < sites.length; i++) {
    var siteIndex = i;
    
    buildBlock(sites[i], siteIndex).appendTo(parent);
  }
}

function reorder() {
  var newOrder = $("#sortable").sortable("toArray");
  var newState = { 'sites': [] };
  for (var i = 0; i < newOrder.length; i++) {
    var newIndex = parseInt(newOrder[i].replace(/\D/gi, ''));
    newState.sites.push(state.sites[newIndex]);
  }
  state = newState;
  saveState(newState);
  refreshScreen();
}

function alterCheckboxState(id) {
  var parts = id.split("__");
  var siteIndex = parseInt(parts[0].replace(/\D/gi, ''));
  var checkboxIndex = parseInt(parts[1].replace(/\D/gi, ''));
  var currentString = state.sites[siteIndex].visits;
  var currentCheckboxState = currentString[checkboxIndex];
  var newCheckboxState = "";
  if (currentCheckboxState == "y") {
    newCheckboxState = "n";
  } else {
    newCheckboxState = "y";
  }
  
  state.sites[siteIndex].visits = currentString.substr(0, checkboxIndex) +
    newCheckboxState + currentString.substr(checkboxIndex+1);
  saveState(state);
  refreshScreen();
}
  
function refreshScreen() {
  $("#sortable").empty();
  buildList(state);
  $("input:checkbox").checkboxradio();
  
  $("input:checkbox").click(function() {
    alterCheckboxState($(this).attr("id"));
  });

  $("#sortable").sortable({ distance: 15, stop: function(event, ui) {
  reorder();
  }});

  $("a").click(function(e) {
    e.preventDefault();
    var index = parseInt($(this).attr("id").replace(/\D/gi, ''));
    if (index == 9999) {
      window.open($(this).attr("href"), "_blank");
    }
    
    var visitsString = state.sites[index].visits;
    if (mayVisit(visitsString) > -1) {
      addVisit(index);
      window.open($(this).attr("href"), "_blank");
    } 
  });
}

function mayVisit(visitsString) {
  // return -1 if there are no 'n's in visits String
  return visitsString.search('n');
}

function addVisit(index) {
  var visitsString = state.sites[index].visits;
  state.sites[index].visits = visitsString.replace('n', 'y');
  state.sites[index].lastVisit = nowHMM();
  saveState(state);
  refreshScreen();
}

function resetAll() {
  for (var i = 0; i < state.sites.length; i++) {
    var visitsString = state.sites[i].visits;
    var newVisits = 'n'.repeat(visitsString.length);
    state.sites[i].visits = newVisits;
  }
  saveState(state);
  refreshScreen();
}

function resetSite(index) {
  var visitsString = state.sites[index].visits;
  var newVisits = 'n'.repeat(visitsString.length);
  state.sites[index].visits = newVisits;
  saveState(state);
  refreshScreen();
}

function addSite() {
  var newSiteName = $("#addSiteName").val();
  var newSiteURL = $("#addSiteURL").val();
  if (newSiteURL.search("http") == -1) {
    newSiteURL = "http://" + newSiteURL;
  }
  var newSiteTimes = parseInt($("#addSiteTimes").val()) || 0;
  if (newSiteTimes < 1) {
    newSiteTimes = 1;
  }
  var newSite = { "name": newSiteName,
                  "url": newSiteURL,
                  "visits": 'n'.repeat(newSiteTimes),
                  "lastVisit": ", never" };

  if (newSiteName.trim() != "" && newSiteURL.trim() != "") {
    state.sites.push(newSite);
    saveState(state);
    refreshScreen();

    $("#addSiteName").val("");
    $("#addSiteURL").val("");
    $("#addSiteTimes").val("");
  }
  
  addSiteDialog.dialog("close");
}

function deleteSite(index) {
  state.sites.splice(index, 1);
  saveState(state);
  refreshScreen();
}
  
function editSite() {
  var newSiteName = $("#editSiteName").val();
  var newSiteURL = $("#editSiteURL").val();
  if (newSiteURL.search("http") == -1) {
    newSiteURL = "http://" + newSiteURL;
  }
  var newSiteTimes = parseInt($("#editSiteTimes").val()) || 0;
  if (newSiteTimes < 1) {
    newSiteTimes = 1;
  }
  var siteIndex = parseInt($("#editSiteIndex").val());
  
  if (newSiteName.trim() != "" && newSiteURL.trim() != "") {
    var site = state.sites[siteIndex];

    site.name = newSiteName;
    site.url = newSiteURL;
    site.visits = 'n'.repeat(newSiteTimes);
    
    saveState(state);
    refreshScreen();

    $("#editSiteName").val("");
    $("#editSiteURL").val("");
    $("#editSiteTimes").val("");
  }
  
  editSiteDialog.dialog("close");
}
