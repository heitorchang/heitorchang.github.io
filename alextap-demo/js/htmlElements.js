"use strict";

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

var accountSummaryStartDate = document.getElementById("accountSummaryStartDate");
var accountSummaryEndDate = document.getElementById("accountSummaryEndDate");

var balancesStartDate = document.getElementById("balancesStartDate");
var balancesEndDate = document.getElementById("balancesEndDate");
