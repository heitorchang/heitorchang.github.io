// amount parsing
function parse_amount(amount_str) {
  amount_str = amount_str.replace(/,/g, ".");

  // separator is first character
  if (amount_str[0] === '.') {
    amount_str = "0" + amount_str;
  }
  
  // no separator
  if (amount_str.indexOf(".") === -1) {
    return parseInt(amount_str) * 100;
  }

  var parts = amount_str.split(".");
  var whole_str = parts[0];
  var cents_str = parts[1];

  if (cents_str.length > 2) {
    cents_str = cents_str.substring(0, 2);
  }

  if (cents_str.length === 1) {
    cents_str = cents_str + "0";
  }
  
  return parseInt(whole_str) * 100 + parseInt(cents_str);
}

// date parsing
function parse_dmy(dmy) {
  if (dmy.length === 0) {
    return undefined;
  }
  
  dmy = dmy.replace(/\//g, "-");
  var parts = dmy.split("-");
  var year = parseInt(parts[2]);
  if (year < 100) {
    year += 2000;
  }
  var iso_formatted = year + "-" + parts[1] + "-" + parts[0];
  var millis = new Date(iso_formatted).getTime();

  if (isNaN(millis)) {
    alert("Invalid date: " + iso_formatted + ". Using today's date.");
    return new Date().getTime();
  } else {
    return millis;
  }
}
