"use strict";

///////////
// Startup

function startup() {
  load();
  prepareAccountSummarySelect("selectAccountSummary");

  // set default dates
  balancesStartDate.valueAsDate = new Date(earliestDate());
  balancesEndDate.valueAsDate = today();;  
  
  // set default dates
  accountSummaryStartDate.valueAsDate = new Date(earliestDate());
  accountSummaryEndDate.valueAsDate = today();;  
}

startup();

