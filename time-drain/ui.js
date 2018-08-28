var state = loadState();

refreshScreen();

$("#resetAll").click(function() {
  resetAll();
});

var addSiteDialog = $("#dialog-add-form").dialog({
  autoOpen: false,
  modal: true,
  width: 450,
  height: 250,
  buttons: {
    "Add": addSite,
    Cancel: function() {
      addSiteDialog.dialog("close");
    }
  },
  close: function() {
    // allFields.removeClass("ui-state-error");
  }
});

// var addSiteForm = addSiteDialog.find("form").on("submit", function(e) {
// e.preventDefault();
// addSite();
// });

$("#addSite").button().on("click", function() {
  addSiteDialog.dialog("open");
});

var editSiteDialog = $("#dialog-edit-form").dialog({
  autoOpen: false,
  modal: true,
  width: 450,
  height: 250,
  buttons: {
    "Update": editSite,
    Cancel: function() {
      editSiteDialog.dialog("close");
    }
  },
  close: function() {
    //
  }
});



