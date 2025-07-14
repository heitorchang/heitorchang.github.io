// sample data

// accountType may be: bens, despesas, obrigacoes, receitas, patrimonio
var sampleAccounts = [
  {
    id: 0,
    accountType: "receitas",
    name: "Salary",
    balance: 2000.09,
  },

  {
    id: 1,
    accountType: "bens",
    name: "Conta corrente",
    balance: 565.23,
  },

  {
    id: 2,
    accountType: "bens",
    name: "Carteira",
    balance: 120.25,
  },

  {
    id: 3,
    accountType: "despesas",
    name: "Diversão",
    balance: 623.35,
  },

  {
    id: 4,
    accountType: "despesas",
    name: "Supermercado",
    balance: 540.92,
  },
  
  {
    id: 5,
    accountType: "obrigacoes",
    name: "Cartão de crédito",
    balance: 100.22,
  },
  
  {
    id: 6,
    accountType: "patrimonio",
    name: "Saldo inicial",
    balance: 1402.46,
  },
  
  {
    id: 7,
    accountType: "bens",
    name: "Poupança",
    balance: 1240.32,
  },

  {
    id: 8,
    accountType: "bens",
    name: "Investimentos",
    balance: 3212.97,
  },

  {
    id: 9,
    accountType: "despesas",
    name: "Luz, água e gás",
    balance: 192.23,
  },

  {
    id: 10,
    accountType: "despesas",
    name: "Restaurantes",
    balance: 321.81,
  },

  {
    id: 11,
    accountType: "receitas",
    name: "Juros",
    balance: 23.12,
  },

  {
    id: 12,
    accountType: "despesas",
    name: "Tarifas",
    balance: 39.03,
  },

  {
    id: 13,
    accountType: "despesas",
    name: "Roupas",
    balance: 63.34,
  },

  {
    id: 14,
    accountType: "despesas",
    name: "Cabeleireiros",
    balance: 90.29,
  },

];

var sampleTransactions = [
  {
    id: 0,
    date: "2016-03-02 12:10",
    description: "Salário de fev. 2016",
    amount: 2000.09,
    debit: 1,
    credit: 0,
  },

  {
    id: 1,
    date: "2016-03-20 19:20",
    description: "Cinema",
    amount: 25.55,
    debit: 3,
    credit: 2,
  },

  {    
    id: 2,
    date: "2016-03-30 15:30",
    description: "Juros",
    amount: 1.72,
    debit: 7,
    credit: 11,
  },

  {    
    id: 3,
    date: "2016-03-30 15:30",
    description: "Calça jeans",
    amount: 69.99,
    debit: 13,
    credit: 5,
  },

  {    
    id: 4,
    date: "2016-03-30 15:30",
    description: "Feijoada e refrigerante",
    amount: 39.29,
    debit: 4,
    credit: 2,
  },

  {    
    id: 5,
    date: "2016-03-30 15:30",
    description: "Luz março",
    amount: 55.21,
    debit: 9,
    credit: 1,
  },

  {    
    id: 6,
    date: "2016-03-30 15:30",
    description: "Água março",
    amount: 32.92,
    debit: 9,
    credit: 1,
  },

  {    
    id: 7,
    date: "2016-03-30 15:30",
    description: "Macarronada",
    amount: 16.25,
    debit: 10,
    credit: 1,
  },

  {    
    id: 8,
    date: "2016-03-30 15:30",
    description: "Tarifa conta",
    amount: 17.75,
    debit: 12,
    credit: 1,
  },

  {    
    id: 9,
    date: "2016-03-30 15:30",
    description: "Cabelo",
    amount: 25.55,
    debit: 14,
    credit: 2,
  },

];

