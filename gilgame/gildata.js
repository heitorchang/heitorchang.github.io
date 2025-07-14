var my_tree = {
  "id": "accounts",
  "children": [
    {"id": "expenses",
     "children": [
       {"id": "groceries",
        "children": [],},
       {"id": "medical",
        "children": [],},
     ]
    },
  ]
};

var income_branch =
  {
    "name": "Income",
    "id": "income",
    "parent": "root",
    "sign": -1,
    "balance": 3,
    "children": [
      {
        "name": "Pontual salário",
        "id": "ptlsal",
        "parent": "income",
        "sign": -1,
        "balance": 0,
        "children": []
      },
    ],
  };

// amounts in cents

transaction_object = [
  { desc: "Opening balance",
    amount: 10000,
    debit: "assets",
    credit: "open",
    millis: 0,
  }

];

// format:
// "day-month-year; description; amount; debit; credit",
transactions = [
  "21/1/15; opening balance; 1000,00; assets; open",

  // made-up data
  "15/1/15; french fries; 12; expenses; assets",
];
