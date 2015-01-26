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
    name: "Credit card",
    id: "credit card",
    parent: "liabilities",
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
    name: "Rent",
    id: "rent",
    parent: "expenses",
    sign: 1,
  },

  {
    name: "Utilities",
    id: "utilities",
    parent: "expenses",
    sign: 1,
  },

  {
    name: "Electricity",
    id: "electricity",
    parent: "utilities",
    sign: 1,
  },
  
  {
    name: "Water",
    id: "water",
    parent: "utilities",
    sign: 1,
  },

  {
    name: "Home",
    id: "home",
    parent: "expenses",
    sign: 1,
  },
  
  {
    name: "Gas",
    id: "gas",
    parent: "utilities",
    sign: 1,
  },

  {
    name: "Groceries",
    id: "groceries",
    parent: "expenses",
    sign: 1,
  },
  
  {
    name: "Communications",
    id: "communications",
    parent: "expenses",
    sign: 1,
  },
  
  {
    name: "Cellular phone",
    id: "cellphone",
    parent: "communications",
    sign: 1,
  },
  
  {
    name: "Post office",
    id: "post office",
    parent: "communications",
    sign: 1,
  },
  
  {
    name: "Financing",
    id: "financing",
    parent: "expenses",
    sign: 1,
  },
  
  {
    name: "Automotive",
    id: "car",
    parent: "expenses",
    sign: 1,
  },

  {
    name: "Transit",
    id: "transit",
    parent: "expenses",
    sign: 1,
  },
  
  {
    name: "Adjustments",
    id: "adjustments",
    parent: "equity",
    sign: -1,
  },

  {
    name: "Bus",
    id: "bus",
    parent: "transit",
    sign: 1,
  },

  {
    name: "Train",
    id: "train",
    parent: "transit",
    sign: 1,
  },
  

  // ASSETS

  {
    name: "Banks",
    id: "bank",
    parent: "assets",
    sign: 1,
  },
  
  {
    name: "Wallet",
    id: "wallet",
    parent: "assets",
    sign: 1,
  },

  {
    name: "Checking account",
    id: "checking",
    parent: "bank",
    sign: 1,
  },
  
  {
    name: "Savings account",
    id: "savings",
    parent: "bank",
    sign: 1,
  },

  // INCOME

  {
    name: "Salary",
    id: "salary",
    parent: "income",
    sign: -1,
  },

  {
    name: "Interest",
    id: "interest",
    parent: "income",
    sign: -1,
  },
  
  // END
  
  {
    name: "",
    id: "",
    parent: "",
    sign: 1,
  },
  
];
