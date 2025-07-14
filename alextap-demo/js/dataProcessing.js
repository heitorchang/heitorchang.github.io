"use strict";

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
    if (accounts[i][1].toUpperCase() === name.toUpperCase().trim()) {
      return true;
    }
  }

  return false;
}

function getAccount(id) {
  for (var i = 0, accountsLength = accounts.length; i < accountsLength; i++) {
    if (accounts[i][2] === id.toString()) {
      return { type: accounts[i][0], name: accounts[i][1] }
    }
  }
  return { type: "none", name: "not found" };
}

function filterTransactionsByDate(startDate, endDate) {
  var result = [];
  
  for (var i = 0, transactionsLength = transactions.length; i < transactionsLength; i++) {
    var transaction = transactions[i];
    var transactionDate = transaction[3];
    if (transactionDate >= startDate && transactionDate <= endDate) {
      result.push(transaction);
    }
  }

  result.sort(function(a, b) {
    return a[3] - b[3];
  });
  return result;
}

function earliestDate() {
  if (transactions.length === 0) {
    return today().getTime();
  }
  
  var result = Infinity;
  for (var i = 0, transactionsLength = transactions.length; i < transactionsLength; i++) {
    if (transactions[i][3] < result) {
      result = transactions[i][3];
    }
  }
  return result;
}

function accountIdsByType(type) {
  var result = [];
  for (var i = 0, accountsLength = accounts.length; i < accountsLength; i++) {
    if (accounts[i][0] === type) {
      result.push(accounts[i][2]);
    }
  }
  return result;
}

