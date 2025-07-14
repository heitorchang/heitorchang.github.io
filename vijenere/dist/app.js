function handleEncrypt() {
  var input = document.getElementById("plaintext").value.trim();

  var key = document.getElementById("key").value;
  document.getElementById("key").value = key;

  document.getElementById("ciphertext").value = vijenere.core.encrypt(input, key);
}

function handleDecrypt() {
  var input = document.getElementById("ciphertext").value.trim();
  var key = document.getElementById("key").value;
  document.getElementById("key").value = key;

  document.getElementById("plaintext").value = vijenere.core.decrypt(input, key);
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

document.getElementById("copyPlain").onclick = function() {
  document.getElementById("plaintext").select();
  document.execCommand("copy");

  document.getElementById("plaintext").value = "";
  document.getElementById("ciphertext").value = "";
  document.getElementById("key").value = "";
}

document.getElementById("copyResult").onclick = function() {
  document.getElementById("ciphertext").select();
  document.execCommand("copy");

  document.getElementById("plaintext").value = "";
  document.getElementById("ciphertext").value = "";
  document.getElementById("key").value = "";
}
