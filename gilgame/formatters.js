function display_balance(amount) {
  // save sign
  var sign = amount < 0 ? "-" : "";

  var output = amount.toString();
  
  if (sign === "-") {
    output = output.slice(1);
  }
  
  if (output.length < 2) {
    output = "0" + output;
  }
  
  if (output.length < 3) {
    output = "0" + output;
  }  

  var digits = output.length;
  return sign + output.slice(0, digits-2) + "." + output.slice(digits-2);
}
