// Parent accounts must appear before children

var accounts = [ 
  {
    name: "Expenses",
    id: "expenses",
    parent: "accounts",
    sign: 1,
  },

  {
    name: "Assets",
    id: "assets",
    parent: "accounts",
    sign: 1,
  },
  
  {
    name: "Equity",
    id: "equity",
    parent: "accounts",
    sign: -1,
  },

  {
    name: "Liabilities",
    id: "liabilities",
    parent: "accounts",
    sign: -1,
  },

  {
    name: "Income",
    id: "income",
    parent: "accounts",
    sign: -1,
  },

  {
    name: "Opening Balance",
    id: "open",
    parent: "equity",
    sign: -1,
  },
  
  {
    name: "Communications",
    id: "comm",
    parent: "expenses",
    sign: 1,
  },
  
  {
    name: "Cellular",
    id: "cell",
    parent: "comm",
    sign: 1,
  },
  
  {
    name: "Post office",
    id: "post",
    parent: "comm",
    sign: 1,
  },
  
  {
    name: "Medical",
    id: "med",
    parent: "expenses",
    sign: 1,
  },
  
  {
    name: "Doctor's visits",
    id: "doc",
    parent: "med",
    sign: 1,
  },

  {
    name: "Medications",
    id: "meds",
    parent: "med",
    sign: 1,
  },
  
  {
    name: "Groceries",
    id: "groc",
    parent: "expenses",
    sign: 1,
  },
  
  {
    name: "Restaurants",
    id: "rest",
    parent: "expenses",
    sign: 1,
  },
  
  {
    name: "Junk food",
    id: "junk",
    parent: "rest",
    sign: 1,
  },
  
  {
    name: "Self-care",
    id: "self",
    parent: "expenses",
    sign: 1,
  },

  {
    name: "Services",
    id: "svc",
    parent: "expenses",
    sign: 1,
  },
  
  {
    name: "Transit",
    id: "tr",
    parent: "expenses",
    sign: 1,
  },
  
  {
    name: "Unaccounted expenses",
    id: "unacc",
    parent: "expenses",
    sign: 1,
  },
  
  {
    name: "Adjustments",
    id: "adj",
    parent: "equity",
    sign: -1,
  },

  // ASSETS

  {
    name: "Banks",
    id: "bank",
    parent: "assets",
    sign: 1,
  },
  
  {
    name: "Wallets",
    id: "walall",
    parent: "assets",
    sign: 1,
  },

  {
    name: "Wallet",
    id: "wal",
    parent: "walall",
    sign: 1,
  },
  
  // END
  
  {
    name: "",
    id: "",
    parent: "",
    sign: 1,
  },
  
];
