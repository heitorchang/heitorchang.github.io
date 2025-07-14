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
    name: "Prepaid",
    id: "prep",
    parent: "accounts",
    sign: 1,
  },
  
  {
    name: "Bilhete Unico",
    id: "bilh",
    parent: "prep",
    sign: 1,
  },
  
  {
    name: "Metro Fidelidade",
    id: "fid",
    parent: "prep",
    sign: 1,
  },
  
  {
    name: "Claro",
    id: "clar",
    parent: "prep",
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
    name: "Livrarias e bancas",
    id: "livr",
    parent: "expenses",
    sign: 1,
  },
  
  {
    name: "Tarifas de bancos",
    id: "tar",
    parent: "expenses",
    sign: 1,
  },
  
  {
    name: "Communications",
    id: "comm",
    parent: "expenses",
    sign: 1,
  },
  
  {
    name: "Celular",
    id: "cel",
    parent: "comm",
    sign: 1,
  },
  
  {
    name: "Correios",
    id: "corr",
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
    name: "Medications and Vitamins",
    id: "meds",
    parent: "med",
    sign: 1,
  },
  
  {
    name: "Psiquiatra",
    id: "psiq",
    parent: "med",
    sign: 1,
  },
  
  {
    name: "Terapia",
    id: "ter",
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
    name: "Restaurantes",
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
    name: "Foods",
    id: "foods",
    parent: "rest",
    sign: 1,
  },
  
  {
    name: "Services",
    id: "svc",
    parent: "expenses",
    sign: 1,
  },
  
  {
    name: "Valeria",
    id: "val",
    parent: "svc",
    sign: 1,
  },
  
  {
    name: "Caixinhas",
    id: "caix",
    parent: "svc",
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
    name: "Electronics",
    id: "elec",
    parent: "expenses",
    sign: 1,
  },

  {
    name: "Entertainment, shows",
    id: "ent",
    parent: "expenses",
    sign: 1,
  },

  {
    name: "Home",
    id: "home",
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
    name: "Itau",
    id: "it",
    parent: "bank",
    sign: 1,
  },
  
  {
    name: "Itau Conta Corr",
    id: "itcor",
    parent: "it",
    sign: 1,
  },
  
  {
    name: "Itau Poupanca",
    id: "itpou",
    parent: "it",
    sign: 1,
  },
  
  {
    name: "Bradesco",
    id: "br",
    parent: "bank",
    sign: 1,
  },
  
  {
    name: "Bradesco Conta Corr",
    id: "brcor",
    parent: "br",
    sign: 1,
  },
  
  {
    name: "Bradesco Poupanca",
    id: "brpou",
    parent: "br",
    sign: 1,
  },
  
  {
    name: "Bradesco Tesouro Direto",
    id: "brtes",
    parent: "br",
    sign: 1,
  },
  
  {
    name: "CGD",
    id: "cgd",
    parent: "bank",
    sign: 1,
  },
  
  {
    name: "CGD Conta Corr",
    id: "cgdcor",
    parent: "cgd",
    sign: 1,
  },
  
  {
    name: "CGD Acoes",
    id: "cgdac",
    parent: "cgd",
    sign: 1,
  },
  
  {
    name: "CGD Tesouro Direto",
    id: "cgdtes",
    parent: "cgd",
    sign: 1,
  },

  {
    name: "Cold Assets",
    id: "cold",
    parent: "assets",
    sign: 1,
  },

  {
    name: "Wallets",
    id: "walall",
    parent: "cold",
    sign: 1,
  },

  {
    name: "Wallet",
    id: "wal",
    parent: "walall",
    sign: 1,
  },
  
  {
    name: "Back Wallet",
    id: "wlbak",
    parent: "walall",
    sign: 1,
  },
  
  {
    name: "Side Wallet",
    id: "wlsid",
    parent: "walall",
    sign: 1,
  },
     
  {
    name: "Running shorts",
    id: "run",
    parent: "walall",
    sign: 1,
  },
    
  {
    name: "Storage",
    id: "stor",
    parent: "assets",
    sign: 1,
  },
  
  {
    name: "Drawer",
    id: "drw",
    parent: "stor",
    sign: 1,
  },
  
  {
    name: "Cards",
    id: "card",
    parent: "stor",
    sign: 1,
  },
  
  {
    name: "Coins and small bills",
    id: "coin",
    parent: "stor",
    sign: 1,
  },
  
  {
    name: "Back pocket",
    id: "backp",
    parent: "walall",
    sign: 1,
  },
  
  {
    name: "Porta dolar",
    id: "porta",
    parent: "walall",
    sign: 1,
  },

  {
    name: "Side drawer, Recurring",
    id: "sidedrw",
    parent: "assets",
    sign: 1,
  },
  
  {
    name: "Side drawer current month envelope",
    id: "sidecur",
    parent: "sidedrw",
    sign: 1,
  },

  {
    name: "Side drawer next month envelope",
    id: "sidenext",
    parent: "sidedrw",
    sign: 1,
  },
  
  {
    name: "Maletinha",
    id: "mala",
    parent: "assets",
    sign: 1,
  },
  
  // INCOME

  {
    name: "Salario",
    id: "sal",
    parent: "income",
    sign: -1,
  },

  {
    name: "Pontual salario",
    id: "ptlsal",
    parent: "sal",
    sign: -1,
  },

  {
    name: "Juros",
    id: "jur",
    parent: "income",
    sign: -1,
  },

  {
    name: "Itau Juros",
    id: "itjur",
    parent: "jur",
    sign: -1,
  },

  {
    name: "Bradesco Juros",
    id: "brjur",
    parent: "jur",
    sign: -1,
  },

  {
    name: "Tesouro Direto Juros",
    id: "tesjur",
    parent: "jur",
    sign: -1,
  },

  {
    name: "CGD dividendos",
    id: "cgddiv",
    parent: "jur",
    sign: -1,
  },

  {
    name: "Family",
    id: "fam",
    parent: "income",
    sign: -1,
  },

  {
    name: "Found",
    id: "found",
    parent: "income",
    sign: -1,
  },

  // END
  
  {
    name: "",
    id: "",
    parent: "",
    sign: -1,
  },

];
