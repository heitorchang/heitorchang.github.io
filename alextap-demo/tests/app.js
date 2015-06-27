"use strict";

// search for FIXME 

/////////////////////////
// test for localStorage

try {
  localStorage.setItem('none', 'none');
  localStorage.removeItem('none');
} catch (exception) {
  document.getElementById("banner").innerHTML = "Error: cannot save to localStorage";
}

//////////////////
// In-memory data

// Sample Account:
// [account type, name, id]
// ['asset', 'Wallet', 3]
// accounts are inserted alphabetically by name.
// ids do not match array order

// [0] type
// [1] name
// [2] id
var accounts = [];

// Sample Transaction:
// [to (debit), from (credit), amount in cents, date in millis, description]
// [3, 5, 1250, 1435337353714, 'pizza']

// [0] id to (debit)
// [1] id from (credit)
// [2] amount
// [3] date
// [4] description
var transactions = [];

//////////////////////
// Save and load data

function save() {
  localStorage.accounts = JSON.stringify(accounts);
  localStorage.transactions = JSON.stringify(transactions);
}

function load() {
  if (localStorage.accounts === undefined || localStorage.transactions === undefined) {
    localStorage.accounts = "";
    localStorage.transactions = "";
  }

  if (localStorage.accounts.length > 0) {
    accounts = JSON.parse(localStorage.accounts);
  }

  if (localStorage.transactions.length > 0) {
    transactions = JSON.parse(localStorage.transactions);
  }
}

////////////////////////////
// Accounting relationships

// define "from" which account cash flows "to" which account
var transactionAccountLabels = {
  'addExpense': ['asset', 'expense'],
  'addIncome': ['income', 'asset'],
  'incurLiability': ['liability', 'expense'],
  'payOffLiability': ['asset', 'liability'],
  'createAsset': ['equity', 'asset'],
  'transferAssets': ['asset', 'asset'],
  'customTransaction': ['account', 'account'],
};

//////////////////////////////////////
// Assign HTML elements to vars

var divs = document.getElementsByTagName('div');

var divIds = [];
for (var i = 0, divsLen = divs.length; i < divsLen; i++) {
  divIds.push(divs[i].getAttribute("id"));
}

var selectAddTransactionType = document.getElementById("selectAddTransactionType");
var selectBalancesType = document.getElementById("selectBalancesType");

var balancesType = document.getElementById("balancesType");

var addTransactionAccounts = document.getElementById("addTransactionAccounts");

var addCustomTransactionTypesNext = document.getElementById("addCustomTransactionTypesNext");

var addAccount = document.getElementById("addAccount");
var addTransaction = document.getElementById("addTransaction");

var amountInput = document.getElementById("amountInput");
var dateInput = document.getElementById("dateInput");
var descriptionInput = document.getElementById("descriptionInput");
var newAccountNameInput = document.getElementById("newAccountNameInput");

///////////////////////////////////////
// State variables, used in navigation

var previousDivId = [];
var addAccountType = "none";
var previousSelect = "";

// new transaction navigation
var toAccountType = "";
var fromAccountType = "";

var toSelected = "";
var fromSelected = "";

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

///////////////////
// Data processing

function addAccountsAsOptions(selectId, type) {
  var select = document.getElementById(selectId);
  for (var i = 0, accountsLength = accounts.length; i < accountsLength; i++) {
    if (type === 'all') {
      addOption(selectId, [accounts[i][2], accounts[i][1]]);
    } else if (accounts[i][0] === type) {
      addOption(selectId, [accounts[i][2], accounts[i][1]]);
    }
  }
}

function accountExists(type, name) {
  for (var i = 0, accountsLength = accounts.length; i < accountsLength; i++) {
    if (accounts[i][0] === type && accounts[i][1].toUpperCase() === name.toUpperCase().trim()) {
      return true;
    }
  }

  return false;
}

/////////////
// Shortcuts

function onClick(buttonId, f) {
  document.getElementById(buttonId).addEventListener("click", f);
}

function onChange(selectId, f) {
  document.getElementById(selectId).addEventListener("change", f);
}

function onKeyUp(selectId, f) {
  document.getElementById(selectId).addEventListener("keyup", f);
}

function selectedValue(selectId) {
  return document.getElementById(selectId).value;
}

function selectedLabel(selectId) {
  var select = document.getElementById(selectId);
  return select.options[select.selectedIndex].text;
}

function setHtml(id, text) {
  document.getElementById(id).innerHTML = text;
}

function setOption(selectId, optionValue) {
  var select = document.getElementById(selectId);
  select.value = optionValue;
}

function setValue(id, value) {
  document.getElementById(id).value = value;
}

///////////
// Parsing

// From Gilgame/parsers.js
function parseAmount(amount_str) {
  amount_str = amount_str.replace(/,/g, ".").trim();

  // separator is first character
  if (amount_str[0] === '.') {
    amount_str = "0" + amount_str;
  }
  
  // no separator
  if (amount_str.indexOf(".") === -1) {
    return parseInt(amount_str) * 100;
  }

  var parts = amount_str.split(".");
  var whole_str = parts[0];
  var cents_str = parts[1];

  if (cents_str.length > 2) {
    cents_str = cents_str.substring(0, 2);
  }

  if (cents_str.length === 1) {
    cents_str = cents_str + "0";
  }
  
  return parseInt(whole_str) * 100 + parseInt(cents_str);
}

function getAmountCents() {
  var amountString = amountInput.value;
  return parseAmount(amountString);
}

//////////////
// Formatting

// from Gilgame/formatters.js
function displayBalance(amount) {
  // save sign
  var sign = amount < 0 ? "-" : "";

  var output = amount.toString();
  
  if (sign === "-") {
    output = output.slice(1);
  }
  
  if (output.length < 2) {
    output = "0" + output;
  }
  
  if (output.length < 3) {
    output = "0" + output;
  }  

  var digits = output.length;
  return sign + output.slice(0, digits-2) + "." + output.slice(digits-2);
}

/////////////////
// Date and time

function dateUTC(date) {
  if (isNaN(date.getTime())) {
    date = new Date();
  }
  return date.getUTCFullYear() + "/" + (date.getUTCMonth() + 1) + "/" + date.getUTCDate();
}

function dateMillis(date) {
  var millis = date.getTime();
  if (isNaN(millis)) {
    return new Date().getTime();
  }
  return millis;
}

function parseMillis(millis) {
  var date = new Date(millis);
  if (isNaN(date.getTime())) {
    date = new Date();
  }
  return date.getUTCFullYear() + "/" + (date.getUTCMonth() + 1) + "/" + date.getUTCDate();
}


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
