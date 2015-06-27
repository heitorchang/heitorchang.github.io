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
