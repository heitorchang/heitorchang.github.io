// (c) 2021 Heitor Chang. MIT License

const version = "0.1 (2021 may 29)";

/* ASCII table
!"#$%&'()*+,-./   15
0123456789:;<=>?  16
@ABCDEFGHIJKLMNO  16
PQRSTUVWXYZ[\]^_  16
`abcdefghijklmno  16
pqrstuvwxyz{|}~   15
ÇçÁáÉé             6

Total: 100
*/

/*
!"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÇçÁáÉé
*/
const charlist = "!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÇçÁáÉé";
let errors = "";

// Collect letters of string s into groups of n characters
function groupBy(s, n) {
  var result = "";
  for (var i = 0; i < s.length; i++) {
    if (i % n == 0 && i > 0) {
      result += " ";
    }
    result += s[i];
  }
  return result;
}

// Char (A..Z) to Index (1..100=0)
function ctoi(c) {
  // var i = c.toUpperCase().charCodeAt() - 64;

  if (c == " ") {
    c = "_";
  }

  if (!charlist.includes(c)) {
    errors += c;
    return 27;
  }
  
  var i = charlist.indexOf(c) + 1;

  if (i === 0) {
    return 100;
  } else {
    return i;
  }
}

// Index (1..100=0) to Char (A..Z)
function itoc(i) {
  if (i < 0) {
    i += 100;
  }
  
  if (i === 0) {
    i = 100;
  }
  // return String.fromCharCode(i + 64);
  let ch = charlist[i-1];

  return ch;
}

// Plaintext (p) to Ciphertext (c) with Key (k)
function ptoc(p, k) {
  return itoc((ctoi(p) + ctoi(k)) % 100);
}

// Ciphertext (c) to Plaintext (p) with Key (k)
function ctop(c, k) {
  return itoc((ctoi(c) - ctoi(k)) % 100);
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
function processToStr(input, key, direction) {
  let charfn = ptoc;  // encrypt
  if (direction == -1) {  // decrypt
    charfn = ctop;
    input = normalize(input);
  }
  
  var inlen = input.length;
  var keyrep = repeat(key, inlen);
  var result = "";

  for (var i = 0; i < inlen; i++) {
    result += charfn(input[i], keyrep[i]);
  }

  return result;
}

// encrypt plaintext string with key string
function encrypt(plaintext, key) {
  errors = "";
  const encrypted = groupBy(processToStr(plaintext, key, 1), 5);
  if (errors) {
    document.getElementById("messages").value = "Characters skipped: " + errors;
  }
  return encrypted;
}

// decrypt ciphertext string with key string
function decrypt(ciphertext, key) {
  return processToStr(ciphertext, key, -1);
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
    if (direction == -1) {
      input = normalize(input);
    }
    
    var inlen = input.length;
    var keyrep = repeat(key, inlen);
    var result = [];

    for (var i = 0; i < inlen; i++) {
      var ininx = ctoi(input[i]);
      var keyinx = ctoi(keyrep[i]);
      var sumdiff = ininx + direction * keyinx;
      var sumdiffmod = mod(sumdiff, 100);

      if (sumdiffmod == 0) {
        sumdiffmod = 100;
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

// normalize text
function normalize(s) {
  return s;
}

function normalizeKey(s) {
  s = s.trim();
  if (s == "") {
    return "!";
  }
  return s;
}

function handleEncrypt() {
  var direction = 1;  // encrypt
  
  var input = document.getElementById("plaintext").value.trim();

  var key = normalizeKey(document.getElementById("key").value);
  document.getElementById("key").value = key;
  
  processToArr(input, key, direction);  
  document.getElementById("ciphertext").value = encrypt(input, key);
}

function handleDecrypt() {
  var direction = -1;  // decrypt
  
  var input = document.getElementById("ciphertext").value.trim().replace(/ /g, "");
  var key = normalizeKey(document.getElementById("key").value);
  document.getElementById("key").value = key;

  processToArr(input, key, direction);
  document.getElementById("plaintext").value = decrypt(input, key);
}

document.getElementById("clearInputs").onclick = function() {
  document.getElementById("plaintext").value = "";
  document.getElementById("ciphertext").value = "";
  document.getElementById("key").value = "";
};

document.getElementById("encryptBtn").onclick = function() {
  handleEncrypt();
  handleDecrypt();  // will clear skipped characters
}

document.getElementById("decryptBtn").onclick = function() {
  handleDecrypt();
}

document.getElementById("copyResult").onclick = function() {
  document.getElementById("ciphertext").select();
  document.execCommand("copy");
}
