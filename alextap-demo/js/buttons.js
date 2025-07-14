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
  dateInput.valueAsDate = today();
  setValue("descriptionInput", "");
  addTransaction.disabled = true;
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

    validateTransaction();
    
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

  alert("Your data has been cleared.");
  document.getElementById("clearDataDiv").className = "hidden";

  startup();
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

onClick("preClear", function() {
  document.getElementById("clearDataDiv").className = "shown";
});

onClick("resetBalancesDates", function() {
  balancesStartDate.valueAsDate = new Date(earliestDate());
  balancesEndDate.valueAsDate = today();
  prepareBalances();
});

onClick("resetAccountSummaryDates", function() {
  accountSummaryStartDate.valueAsDate = new Date(earliestDate());
  accountSummaryEndDate.valueAsDate = today();;
  prepareAccountSummaryTable();
});
