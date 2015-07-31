"use strict";

/////////////////
// inputs (text)

onChange("accountSummaryStartDate", function() {
  prepareAccountSummaryTable();
});

onChange("accountSummaryEndDate", function() {
  prepareAccountSummaryTable();
});

onChange("balancesStartDate", function() {
  prepareBalances();
});

onChange("balancesEndDate", function() {
  prepareBalances();
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
  validateTransaction();
});

