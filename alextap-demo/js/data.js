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
  localStorage.accounts = JSON.stringify(accounts);
  localStorage.transactions = JSON.stringify(transactions);
}

function load() {
  if (localStorage.accounts === undefined || localStorage.accounts === "[]") {
    localStorage.accounts = '[["asset","Checking","0"],["liability","Credit Card","9"],["expense","Groceries","7"],["expense","Interest","10"],["equity","Open","1"],["expense","Rent","5"],["expense","Restaurants","8"],["income","Salary","4"],["asset","Savings","2"],["expense","Utilities","6"],["asset","Wallet","3"]]';

    
    localStorage.transactions = '[["0","1",25000,1420588800000,"Opening balance"],["2","1",140000,1420588800000,"Opening balance"],["3","1",8237,1420588800000,"Opening balance"],["0","4",125000,1422489600000,"Jan 2015 salary"],["5","0",66000,1422921600000,"Rent due"],["6","0",2350,1423267200000,"Electricity"],["7","0",1992,1423440000000,"Chicken"],["8","9",5500,1423612800000,"sushi"],["10","9",45,1424390400000,""],["9","0",1500,1424390400000,"minimum payment"],["0","4",125000,1424995200000,"Feb 2015 salary"],["5","0",66000,1425340800000,"rent due"],["8","3",1230,1425427200000,"pizza"],["6","0",2292,1425600000000,"electricity"],["7","3",620,1425686400000,"rice"],["0","2",30000,1425772800000,"transfer"]]';
  }

  if (localStorage.accounts.length > 0) {
    accounts = JSON.parse(localStorage.accounts);
  }

  if (localStorage.transactions.length > 0) {
    transactions = JSON.parse(localStorage.transactions);
  }
}
