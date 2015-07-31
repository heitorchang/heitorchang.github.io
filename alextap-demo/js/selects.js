"use strict";

///////////////////////////
// Define select functions

onChange("selectAddTransactionType", function() {
  previousDivId.push("homeDiv");

  if (selectAddTransactionType.value === "customTransaction") {
    show("addCustomTransactionTypesDiv");
  } else {
    var labels = transactionAccountLabels[selectAddTransactionType.value];
    showAddTransaction(labels[0], labels[1]);
  }
});

onChange("selectBalancesType", function() {
  previousDivId.push("homeDiv");
  showBalances();
});

onChange("selectAccountSummary", function() {
  previousDivId.push("homeDiv");
  showAccountSummary(selectedValue("selectAccountSummary"));
});

onChange("selectNewAccountType", function() {
  previousDivId.push("homeDiv");
  showAddAccount(selectedValue("selectNewAccountType"));
});

onChange("selectCustomTransactionToType", function() {
  if (selectedValue("selectCustomTransactionToType") === 'none') {
    addCustomTransactionTypesNext.disabled = true;
  } else if (selectedValue("selectCustomTransactionToType") !== 'none' &&
             selectedValue("selectCustomTransactionFromType") !== 'none') {
    addCustomTransactionTypesNext.disabled = false;
  }
});

onChange("selectCustomTransactionFromType", function() {
  if (selectedValue("selectCustomTransactionFromType") === 'none') {
    addCustomTransactionTypesNext.disabled = true;
  } else if (selectedValue("selectCustomTransactionToType") !== 'none' &&
             selectedValue("selectCustomTransactionFromType") !== 'none') {
    addCustomTransactionTypesNext.disabled = false;
  }
});

//***********************
// add transaction screen

onChange("toAccount", function() {
  var toAccountId = selectedValue("toAccount");
  
  toSelected = selectedValue("toAccount");
  fromSelected = selectedValue("fromAccount");
  
  if (toAccountId === "newAccount") {
    previousDivId.push("addTransactionDiv");
    previousSelect = "toAccount";
    
    showAddAccount(toAccountType);
  }
  validateTransaction();
});

onChange("fromAccount", function() {
  var fromAccountId = selectedValue("fromAccount");
  
  toSelected = selectedValue("toAccount");
  fromSelected = selectedValue("fromAccount");
  
  if (fromAccountId === "newAccount") {
    previousDivId.push("addTransactionDiv");
    previousSelect = "fromAccount";
    
    showAddAccount(fromAccountType);
  }
  validateTransaction();
});
