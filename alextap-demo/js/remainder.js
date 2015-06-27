"use strict";

///////////////////////////
// Define button functions 

onClick("addTransaction", function() {
  var toId = selectedValue("toAccount");
  var fromId = selectedValue("fromAccount");
  var amount = getAmountCents();
  var date = dateMillis(new Date(dateInput.value));
  var description = selectedValue("descriptionInput");
  
  transactions.push([toId, fromId, amount, date, description]);
  save();
  
  alert("Added transaction for " + displayBalance(amount));

  // reset fields
  setOption("toAccount", "none");
  setOption("fromAccount", "none");
  setValue("amountInput", "");
  dateInput.valueAsDate = new Date();
  setValue("descriptionInput", "");

});

onClick("addAccount", function() {
  var accountType = addAccountType;
  var accountName = selectedValue("newAccountNameInput").trim();
  var newAccount = [accountType, accountName, accounts.length.toString()];
  
  // insert in alphabetical order
  for (var i = 0, accountsLength = accounts.length; i <= accountsLength; i++) {
    if (accounts[i] === undefined) {
      accounts.push(newAccount);
    } else if (accountName.toUpperCase() <= accounts[i][1].toUpperCase()) {
      accounts.splice(i.toString(), 0, newAccount);
      break;
    }
  }
  newAccountNameInput.value = "";
  addAccount.disabled = true;
  save();

  alert("Added " + accountType  + " named " + accountName);
  prepareAccountSummarySelect("selectAccountSummary");

  // return to add transaction if coming from there
  if (previousSelect) {
    prepareAccountTypeSelect("toAccount", "To", toAccountType);
    prepareAccountTypeSelect("fromAccount", "From", fromAccountType);


    // reset to old selections
    setOption("toAccount", toSelected);
    setOption("fromAccount", fromSelected);

    // update selection to new account
    setOption(previousSelect, newAccount[2]);
              
    previousSelect = "";
    show(previousDivId.pop());
  }
});

onClick("addCustomTransactionTypesNext", function() {
  showAddTransaction(selectedValue("selectCustomTransactionFromType"), selectedValue("selectCustomTransactionToType"));

  setOption("selectCustomTransactionToType", "none");
  setOption("selectCustomTransactionFromType", "none");
  addCustomTransactionTypesNext.disabled = true;
});

onClick("clear", function() {
  accounts = [];
  transactions = [];
  save();
});

onClick("backFromAddTransaction", function() {
  selectAddTransactionType.value = "none";
  show(previousDivId.pop());
});

onClick("backFromShowBalances", function() {
  selectBalancesType.value = "none";
  show(previousDivId.pop());
});

onClick("backFromShowAccountSummary", function() {
  selectAccountSummary.value = "none";
  show(previousDivId.pop());
});

onClick("backFromAddCustomTransactionTypes", function() {
  selectAddTransactionType.value = "none";
  show(previousDivId.pop());
});

onClick("backFromAddAccount", function() {
  selectNewAccountType.value = "none";
  show(previousDivId.pop());
});

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
  balancesType.innerHTML = selectBalancesType.options[selectBalancesType.selectedIndex].text;
  previousDivId.push("homeDiv");
  show("showBalancesDiv");
});

onChange("selectAccountSummary", function() {
  previousDivId.push("homeDiv");
  showAccountSummary(selectedValue("selectAccountSummary"));
});

onChange("selectNewAccountType", function() {
  previousDivId.push("homeDiv");
  showAddAccount(selectedValue("selectNewAccountType"));
});

onKeyUp("newAccountNameInput", function() {
  if (selectedValue("newAccountNameInput").trim() !== '') {
    if (accountExists(addAccountType, selectedValue("newAccountNameInput"))) {
      addAccount.disabled = true;
    } else {
      addAccount.disabled = false;
    }
  } else {
    addAccount.disabled = true;
  }
});

onKeyUp("amountInput", function() {
  if (selectedValue("amountInput") !== '') {
    addTransaction.disabled = false;
  }
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

///////////////////
// Screen creation

function prepareAccountTypeSelect(selectId, dest, type) {
  removeOptions(selectId);

  addOption(selectId, ['none', dest + ' ' + type + ' account']);
  addOption(selectId, ['newAccount', 'Create new account']);
  addAccountsAsOptions(selectId, type);
}

function prepareAccountSummarySelect(selectId) {
  removeOptions(selectId);

  addOption(selectId, ['none', 'Select an account...']);
  addAccountsAsOptions(selectId, 'all');
}

function showAddTransaction(from, to) {
  var accountTypes = [from, to];
  toAccountType = to;
  fromAccountType = from;

  setHtml("addTransactionType", selectedLabel("selectAddTransactionType"));

  prepareAccountTypeSelect("toAccount", "To", accountTypes[1]);

  prepareAccountTypeSelect("fromAccount", "From", accountTypes[0]);
  
  onChange("toAccount", function() {
    var toAccountId = selectedValue("toAccount");

    toSelected = selectedValue("toAccount");
    fromSelected = selectedValue("fromAccount");
    
    if (toAccountId === "newAccount") {
      previousDivId.push("addTransactionDiv");
      previousSelect = "toAccount";
      
      showAddAccount(accountTypes[1]);
    }
  });

  onChange("fromAccount", function() {
    var fromAccountId = selectedValue("fromAccount");

    toSelected = selectedValue("toAccount");
    fromSelected = selectedValue("fromAccount");
    
    if (fromAccountId === "newAccount") {
      previousDivId.push("addTransactionDiv");
      previousSelect = "fromAccount";
      
      showAddAccount(accountTypes[0]);
    }
  });

  //******************
  // Set date to today
  dateInput.valueAsDate = new Date();

  //*****************************
  // clear amount and description
  amountInput.value = "";
  descriptionInput.value = "";

  //********************************
  // Display add transactions screen
  show("addTransactionDiv");
}

function showAddAccount(type) {
  addAccountType = type;
  setHtml("addAccountTypeLabel", "Add " + type + " account");
  show("addAccountDiv");
}

function showAccountSummary(accountId) {
  setHtml("accountSummaryName", accountId);
  for (var i = 0, transactionsLength = transactions.length; i < transactionsLength; i++) {
    if (transactions[i][0] === accountId || transactions[i][1] === accountId) {
      addParagraph("accountSummaryTransactions", transactions[i][2] + " " + transactions[i][4]);
    }
  }
  show("showAccountSummaryDiv");
}

///////////
// Startup

load();
prepareAccountSummarySelect("selectAccountSummary");
