function validateTransaction() {
  if (selectedValue("toAccount") !== 'none' &&
      selectedValue("toAccount") !== 'newAccount' &&
      selectedValue("fromAccount") !== 'none' &&
      selectedValue("fromAccount") !== 'newAccount' &&
      selectedValue("amountInput").trim() !== '') {
    addTransaction.disabled = false;
  } else {
    addTransaction.disabled = true;
  }
}
