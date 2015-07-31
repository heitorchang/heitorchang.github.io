"use strict";

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
