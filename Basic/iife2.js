const BankAccount = (function() {
  let balance = 0;

  function deposit(amount) {
    balance += amount;
  }

  
  function withdraw(amount) {
    if (amount > balance) {
      console.log("Insufficient funds");
      return;
    }
    balance -= amount;
  }

  function checkBalance() {
    return balance;
  }

  return {
    deposit: deposit,
    withdraw: withdraw,
    checkBalance: checkBalance
  };
})();

BankAccount.deposit(100);
BankAccount.withdraw(30);
console.log(BankAccount.checkBalance()); // 70