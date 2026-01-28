// ASSIGNMENT 5: 
// -------------
// Bank Transaction Analyzer

// You are building a bank statement summary.

// Test data:
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];


// Tasks:
//     1. filter() all credit transactions
const creditTransactions = transactions.filter(t => t.type === "credit");
console.log("Credit transactions:", creditTransactions);

//     2. map() to extract only transaction amounts
const amounts = transactions.map(t => t.amount);
console.log("All amounts:", amounts);

//     3. reduce() to calculate final account balance
const balance = transactions.reduce((acc, t) => {
    return t.type === "credit" ? acc + t.amount : acc - t.amount;
}, 0);
console.log("Final balance:", balance);

//     4. find() the first debit transaction
const firstDebit = transactions.find(t => t.type === "debit");
console.log("First debit:", firstDebit);

//     5. findIndex() of transaction with amount 10000
const indexOf10000 = transactions.findIndex(t => t.amount === 10000);
console.log("Index of 10000 amount:", indexOf10000);