// Gilgame: the undead turtle who exponentially hoards Gil


// build account tree

var account_tree = { id: "accounts", children: [] };
var children_ids = {};

function add_to_children(tree, child) {
  if (tree.id === child.parent) {
    tree.children.push(child);
  } else {
    tree.children.forEach(function(branch) {
      add_to_children(branch, child);
    });
  }
}

function build_tree(tree) {
  accounts.forEach(function(account) {
    add_to_children(tree, account);
  });
}


function alter_balance(id, amount) {
  accounts.forEach(function(account) {
    if (account.id === id) {
      account.balance += amount;
    }
  });
}

function bubble_amount(source, amount) {
  if (source !== 'accounts') {
    accounts.forEach(function(account) {
      if (account.id === source) {
        alter_balance(source, amount);
        bubble_amount(account.parent, amount);
      }
    });
  }
}

// UNUSED
function parse_and_add_transaction(s) {
  var parts = s.split(";");
  for (var i = 0, end = parts.length; i < end; i++) {
    parts[i] = parts[i].trim();
  }
  
  add_transaction_from_string_parts(parts[1], parts[2], parts[3], parts[4], parse_dmy(parts[0]));
}

function parse_transaction(s) {
  var parts = s.split(";");
  for (var i = 0, end = parts.length; i < end; i++) {
    parts[i] = parts[i].trim();
  }
  
  return { 'millis': parse_dmy(parts[0]),
           'desc': parts[1],
           'amount': parse_amount(parts[2]),
           'debit': parts[3],
           'credit': parts[4],
           'raw_date': parts[0],
         };
}

function build_transaction_list(transaction_str_list) {
  var transactions_list = [];

  transaction_str_list.forEach(function(transaction_str) {
    transactions_list.push(parse_transaction(transaction_str));
  });

  return transactions_list;
}

// UNUSED
function add_transaction_from_string_parts(desc, amount_str, debit, credit, date_millis) {
  // accept amount as string, remove dot or comma
  // not sanitized

  if (account_exists(debit) && account_exists(credit)) {
    
    var amount = parse_amount(amount_str)

    accounts.forEach(function(account) {
      if (account.id === debit) {
        // account.balance += account.sign * amount;
        bubble_amount(account.id, account.sign * amount);
      }
      if (account.id === credit) {
        // account.balance -= account.sign * amount;
        bubble_amount(account.id, account.sign * amount * (-1));
      }
    });
    
  } else {
    add_warning(desc + ": account(s) does not exist. " + debit + "/" + credit);
  }
}

function add_transaction(transaction) {
  // accept amount as string, remove dot or comma
  // not sanitized

  if (account_exists(transaction.debit) && account_exists(transaction.credit)) {
    
    var amount = transaction.amount;

    accounts.forEach(function(account) {
      if (account.id === transaction.debit) {
        // account.balance += account.sign * amount;
        bubble_amount(account.id, account.sign * amount);
      }
      if (account.id === transaction.credit) {
        // account.balance -= account.sign * amount;
        bubble_amount(account.id, account.sign * amount * (-1));
      }
    });
    
  } else {
    add_warning(transaction.desc + ": account(s) does not exist. " + transaction.debit + "/" + transaction.credit);
  }
}

function initialize_accounts(accounts) {
  accounts.forEach(function(account) {
    account.balance = 0;
    account.children = [];
    account.children_ids = [];
  });
}

function get_children_ids(root) {
  var output = root.id + ";";
  
  function traverse(node) {
    node.children.forEach(function(child) {
      output += child.id + ";";
      if (child.children.length > 0) {
        traverse(child);
      }
    });
  }

  traverse(root);
  children_ids[root.id] = output.substring(0, output.length-1).split(";");
  return children_ids[root.id];
}

function save_children_ids(node) {
  // populate the children_ids object
  get_children_ids(node);
  node.children.forEach(function(child) {
    save_children_ids(child);
  });
}

function zero_accounts(accounts) {
  accounts.forEach(function(account) {
    account.balance = 0;
  });
}
  
function log_tree() {
  console.log(JSON.stringify(account_tree, null, 2));
}


function htmlify_tree(node) {
  var contents = "";
  if (node.id !== "accounts") {
    contents = '<span title="' + (node.name || "Accounts") + '" onclick="set_account_and_update(\'' + (node.id || "accounts" )+ '\');">' +
      node.id + ' <span id="' + node.id + '_balance">' +
      display_balance(node.balance || 0) +
      "</span></span>" +
      "";
  } else {
    contents = '<span onclick="set_account_and_update(\'accounts\')">Accounts</span>';
  }
  
  var html_tree = "<ul><li>" + contents;

  node.children.forEach(function(child) {
    html_tree += htmlify_tree(child);
  });
  html_tree += "</li></ul>";
  return html_tree;
}

function htmlify_always_show(node) {
  // compute and freeze values for accounts that always show
  // current balances
  
  var html = "";
  if (always_show.indexOf(node.id) !== -1) {
    html += node.id + " " + display_balance(node.balance) + "<br>";
  }

  node.children.forEach(function(child) {
    html += htmlify_always_show(child);
  });

  return html;
}


function htmlify_transaction_list(focused_account, date_range, transaction_list) {
  var table_description = '<tr><td colspan="5"><b>Account:</b> ' + focused_account + ' ' + date_range + '</td></tr>';
  
  var table_header = "<tr><td>Date</td><td>debit</td><td>credit</td><td>Description</td><td>Amount</td></tr>";

  var table_rows = "";

  var total_debits = 0;

  transaction_list.forEach(function(transaction) {

    // add to total debits if transaction is child of focused_account
    if (children_ids[focused_account].indexOf(transaction.debit) !== -1) {
      total_debits += transaction.amount;
    }
    
    if (transaction.debit === focused_account) {
      transaction.debit = "<b>" + transaction.debit + "</b>";
    }
    if (transaction.credit === focused_account) {
      transaction.credit = "<b>" + transaction.credit + "</b>";
    }
    
    table_rows += "<tr><td>" +
      transaction.raw_date +
      "</td><td>" +
      transaction.debit +
      "</td><td>" +
      transaction.credit +
      "</td><td>" +
      transaction.desc +
      "</td><td>" +
      display_balance(transaction.amount) +
      "</td></tr>";
  });

  var total_debits_row = '<tr><td colspan="5"><b>Total debits:</b> ' + display_balance(total_debits) + "</td></tr>";

  return table_description + total_debits_row + table_header + table_rows;
}

function apply_transaction_filter(transactions, filter) {
  var filtered = [];
  transactions.forEach(function(transaction) {
    if (filter(transaction)) {
      filtered.push(transaction);
    }
  });
  return filtered;
}

console.log("Ready");

// interactions
document.getElementById("update_button").addEventListener('click', function(event) {
  update_from_form();
});

document.getElementById("update_search").addEventListener('click', function(event) {
  update_from_form();
});

document.getElementById("clear_dates").addEventListener('click', function(event) {
  document.getElementById("start_date").value = "";
  document.getElementById("end_date").value = "";
  update_from_form();
});

document.getElementById("clear_search_desc").addEventListener('click', function(event) {
  document.getElementById("search_desc").value = "";
  update_from_form();
});

function update_from_form() {
  var focused_account = document.getElementById("focused_account").value;
  var start_date = document.getElementById("start_date").value;
  var end_date = document.getElementById("end_date").value;
  update_page(transactions, focused_account, start_date, end_date);
}

function set_account_and_update(account) {
  document.getElementById("focused_account").value = account;
  update_from_form();
}

function update_page(transactions, focused_account, start_date, end_date) {
  warnings = "";
  
  focused_account = focused_account || "accounts";

  // save date strings to include in table header
  var original_start_date = start_date || "start";
  var original_end_date = end_date || "end";
  
  if (start_date) {
    start_date = parse_dmy(start_date);
  } else {
    start_date = -Infinity;
  }

  if (end_date) {
    end_date = parse_dmy(end_date);
  } else {
    end_date = Infinity;
  }

  zero_accounts(accounts);
  
  var transactions_list = build_transaction_list(transactions);
  
  var transactions_in_time_period = apply_transaction_filter(transactions_list, function(transaction) {
    return transaction.millis >= start_date && transaction.millis <= end_date; });

  transactions_in_time_period.forEach(function(transaction) {
    add_transaction(transaction);
  });

  var transactions_for_account_and_desc_in_time_period = apply_transaction_filter(transactions_in_time_period, function(transaction) {
    return transaction.desc.indexOf(document.getElementById("search_desc").value.trim()) !== -1 &&
      (children_ids[focused_account].indexOf(transaction.debit) !== -1 ||
       children_ids[focused_account].indexOf(transaction.credit) !== -1);
  });

  document.getElementById("tree_display").innerHTML = htmlify_tree(account_tree);

  document.getElementById("warnings").innerHTML = warnings;
  
  document.getElementById("list_table").innerHTML = htmlify_transaction_list(focused_account, "<b>from</b> " + original_start_date + " to " + original_end_date, transactions_for_account_and_desc_in_time_period);
}

function initialize_account_tree() {
  initialize_accounts(accounts);
  build_tree(account_tree);
  save_children_ids(account_tree);
}

function init() {
  initialize_account_tree();
  update_page(transactions);
  document.getElementById("balances").innerHTML = "<b>~Gilgame<br>Selected balances</b><br><br>" + htmlify_always_show(account_tree);
}

init();
