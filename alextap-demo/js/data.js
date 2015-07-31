"use strict";

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
  localStorage.alextap_accounts = JSON.stringify(accounts);
  localStorage.alextap_transactions = JSON.stringify(transactions);
}

function load() {
  if (localStorage.alextap_accounts === undefined || localStorage.alextap_transactions === undefined) {
    localStorage.alextap_accounts = "";
    localStorage.alextap_transactions = "";
  }

  if (localStorage.alextap_accounts.length > 0) {
    accounts = JSON.parse(localStorage.alextap_accounts);
  }

  if (localStorage.alextap_transactions.length > 0) {
    transactions = JSON.parse(localStorage.alextap_transactions);
  }
}
