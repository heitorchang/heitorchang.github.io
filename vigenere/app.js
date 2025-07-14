// (c) 2016 Heitor Chang. MIT License

var version = "0.2 (2017 sep 18)";

document.getElementById("ver").innerText = version;

// Collect letters of string s into groups of n characters
function groupBy(s, n) {
  var result = "";
  for (var i = 0; i < s.length; i++) {
    if (i % n == 0 && i > 0) {
      result += "  ";
    }
    result += s[i];
  }
  return result;
}

// Char (A..Z) to Index (1..26=0)
function ctoi(c) {
  var i = c.toUpperCase().charCodeAt() - 64;
  if (i === 0) {
    return 26;
  } else {
    return i;
  }
}

// Index (1..26=0) to Char (A..Z)
function itoc(i) {
  if (i < 0) {
    i += 26;
  }
  
  if (i === 0) {
    i = 26;
  }
  return String.fromCharCode(i + 64);
}

// Plaintext (p) to Ciphertext (c) with Key (k)
function ptoc(p, k) {
  return itoc((ctoi(p) + ctoi(k)) % 26);
}

// Ciphertext (c) to Plaintext (p) with Key (k)
function ctop(c, k) {
  return itoc((ctoi(c) - ctoi(k)) % 26);
}

// repeat the key until the resulting string is n characters long
function repeat(str, n) {
  var strlen = str.length;
  var result = "";
  for (var i = 0; i < n; i++) {
    result += str[i % strlen];
  }
  return result;
}

// apply charfn to succeeding pair of characters in input and key string
function processToStr(input, key, charfn) {
  var inlen = input.length;
  var keyrep = repeat(key, inlen);
  var result = "";

  for (var i = 0; i < inlen; i++) {
    result += charfn(input[i], keyrep[i]);
  }

  return result;
}

function containsNonAlpha(s) {
  for (var i = 0; i < s.length; i++) {
    var code = s[i].toUpperCase().charCodeAt();
    if (code != 32 && code != 10 && (code < 65 || code > 90)) {
      return true;
    }
  }
  return false;
}

// encrypt plaintext string with key string
function encrypt(plaintext, key) {
  return "# " + groupBy(processToStr(plaintext, key, ptoc), 4) + " #";
}

// decrypt ciphertext string with key string
function decrypt(ciphertext, key) {
  return "# " + processToStr(ciphertext, key, ctop) + " #";
}

function mod(x, n) {
  var r = x % n;
  while (r < 0) {
    r += n;
  }
  return r;
}

// collect result in an array
// direction: 1 = encrypt, -1 = decrypt
function processToArr(input, key, direction) {
  if (direction === undefined) {
    console.log("ERROR: Direction of encryption undefined.");
  } else {
    
    var inlen = input.length;
    var keyrep = repeat(key, inlen);
    var result = [];

    for (var i = 0; i < inlen; i++) {
      var ininx = ctoi(input[i]);
      var keyinx = ctoi(keyrep[i]);
      var sumdiff = ininx + direction * keyinx;
      var sumdiffmod = mod(sumdiff, 26);

      // keep 'Z' as 26
      if (sumdiffmod == 0) {
        sumdiffmod = 26;
      }
      
      result.push({
        inchar: input[i].toUpperCase(),
        keychar: keyrep[i].toUpperCase(),
        ininx: ininx,
        keyinx: keyinx,
        direction: direction > 0 ? "+" : "-",
        sumdiff: sumdiff,
        sumdiffmod: sumdiffmod,
        outchar: itoc(sumdiffmod),
      });
    }
  }

  return result;
}

// take an element of result array and convert to be displayed suitably
function htmlifyCharCell(cell) {
  return `
    <table>
    <tr>
    <td class="char">${cell.inchar}</td>
    <td>&nbsp;</td>
    </tr>
       
    <tr>
    <td class="char">${cell.keychar}</td>
    <td>&nbsp;</td>
    </tr>

    <tr>
    <td>&nbsp;</td>
    <td>${cell.ininx}</td>
    </tr>

    <tr>
    <td>${cell.direction}</td>
    <td>${cell.keyinx}</td>
    </tr>

    <tr><td colspan="2"><hr></td></tr>
    
    <tr><td>=</td>
    <td>${cell.sumdiff}</td>
    </tr>

    <tr>
    <td>=</td>
    <td>${cell.sumdiffmod}</td>
    </tr>

    <tr>
    <td>&nbsp;</td>
    <td>${cell.outchar}</td>
    </tr>
  </table>
    `;
}

function displayCalculation(table) {
  var newNode = document.createElement('div');
  newNode.className = "calculation";
  newNode.innerHTML = table;
  document.getElementById("calculations").appendChild(newNode);
}

// normalize text
function normalize(s) {
  return s.replace(/[^a-z]/gi, '').toUpperCase();
}

// relabel form
function relabel() {
  var directionRadios = document.getElementsByName("direction");
  var inputLabel = document.getElementById("inputLabel");
  var resultLabel = document.getElementById("result");
  var convertButton = document.getElementById("convert");

  document.getElementById("inputText").value = "";

  if (directionRadios[0].checked) {
    // Encrypt
    inputLabel.innerHTML = "Message to be encrypted";
    convertButton.innerHTML = "Encrypt";
    resultLabel.innerHTML = "Scrambled Message";
  } else {
    inputLabel.innerHTML = "Scrambled Message";
    convertButton.innerHTML = "Decrypt";
    resultLabel.innerHTML = "Unscrambled Message";
  }
}

function setup() {
  var directionRadios = document.getElementsByName("direction");
  for (var i = 0, len = directionRadios.length; i < len; i++) {
    directionRadios[i].onclick = function() { relabel(); };
  }
  relabel();
}

document.getElementById("clear").onclick = function() {
  document.getElementById("inputText").value = "";
  document.getElementById("key").value = "";
};

document.getElementById("convert").onclick = function() {
  // clear previous results
  document.getElementById("calculations").innerHTML = "";
  
  var direction = document.getElementsByName('direction')[0].checked ? 1 : -1;
  if (direction === 1) {
    if (containsNonAlpha(document.getElementById("inputText").value) ||
        containsNonAlpha(document.getElementById("key").value) ||
        document.getElementById("key").value.trim() == "") {
      document.getElementById("resultText").value = "Plaintext and key must consist of only letters A-Z and spaces and be nonempty. Please correct them.";
      return false;
    }
  }
  
  var input = normalize(document.getElementById("inputText").value);
  var key = normalize(document.getElementById("key").value);

  processToArr(input, key, direction)
    .map(htmlifyCharCell).forEach(function(charTable) {
      displayCalculation(charTable);
    });

  if (direction === 1) {
    document.getElementById("resultText").value = encrypt(input, key);
  } else {
    document.getElementById("resultText").value = decrypt(input, key);
  }
}

setup();



