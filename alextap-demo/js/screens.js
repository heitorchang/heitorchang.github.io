"use strict";

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

  //******************
  // Set date to today
  dateInput.valueAsDate = today();

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
  if (today().getTime() !== lastVisit.getTime()) {
    setEndDatesToToday();
    lastVisit = today();
  }

  accountSummaryId = accountId;
  setHtml("accountSummaryName", getAccount(accountId).name);

  prepareAccountSummaryTable();
  
  show("showAccountSummaryDiv");
}

function prepareAccountSummaryTable() {
  // account balance
  var fromMinusTo = 0;

  removeRows("accountSummaryTable");

  var transactionsWithinDates = filterTransactionsByDate(dateMillis(new Date(accountSummaryStartDate.value)), dateMillis(new Date(accountSummaryEndDate.value)));

  function addRowToAccountSummary(transaction, type) {
    var otherAccount;
    if (type === 'from') {
      otherAccount = getAccount(transaction[1]);
    } else {
      otherAccount = getAccount(transaction[0]);
    }
      
    addRow("accountSummaryTable", [parseMillis(transaction[3]),
                                   displayBalance(transaction[2]),
                                   type + " " + otherAccount.name],
           "Description: " + transaction[4] + " (" + displayBalance(transaction[2]) + ")");
  }
  
  for (var i = 0, transactionsLength = transactionsWithinDates.length; i < transactionsLength; i++) {
    // transaction's "to" account matches
    var transaction = transactionsWithinDates[i];
    if (transaction[0] === accountSummaryId) {
      addRowToAccountSummary(transaction, "from");
      fromMinusTo += transaction[2];
    } else if (transaction[1] === accountSummaryId) {
      // transaction's "from" account matches
      addRowToAccountSummary(transaction, "to");
      fromMinusTo -= transaction[2];
    }
  }

  // update account balance (from minus to) 
  setHtml("accountSummaryBalance", "Balance ('From' minus 'To') " + displayBalance(fromMinusTo));
}

function showBalances() {
  if (today().getTime() !== lastVisit.getTime()) {
    setEndDatesToToday();
    lastVisit = today();
  }
  
  prepareBalances();
  show("showBalancesDiv");  
}

function prepareBalances() {
  removeRows("balancesTable");
  
  var accountIds = accountIdsByType(selectedValue("selectBalancesType"));

  var balances = {};
  var typeBalance = 0;
  
  for (var i = 0, accountsLength = accountIds.length; i < accountsLength; i++) {
    balances[accountIds[i]] = 0;
  }

  var filteredTransactions = filterTransactionsByDate(dateMillis(new Date(balancesStartDate.value)), dateMillis(new Date(balancesEndDate.value)));

  for (var i = 0, transactionsLength = filteredTransactions.length; i < transactionsLength; i++) {
    var transaction = filteredTransactions[i];
    balances[transaction[0]] += transaction[2];
    balances[transaction[1]] -= transaction[2];
  }

  for (var i = 0, accountsLength = accountIds.length; i < accountsLength; i++) {
    addRowClickFn("balancesTable", [getAccount(accountIds[i]).name, displayBalance(balances[accountIds[i]])], (function(accountId) {
      return function() {
        previousDivId.push("showBalancesDiv");
        showAccountSummary(accountId);
      };
    })(accountIds[i]));
  }

  for (var i = 0, accountsLength = accountIds.length; i < accountsLength; i++) {
    typeBalance += balances[accountIds[i]];
  }
  
  setHtml("balancesType", selectedLabel("selectBalancesType") + " " + displayBalance(typeBalance));
}
