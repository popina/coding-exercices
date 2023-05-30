import { transactions } from "./data-set";
import type { Transaction } from "./data-set";

export function groupTransactions(transactions: Transaction[]) {
  const groupedTransactions: { month: string; totalExpenditure: number }[] = [];

  transactions.reduce((acc, transaction) => {
    if (transaction.type === "credit") {
      return acc;
    }
    const month = transaction.date.toLocaleString("default", {
      month: "long",
    });
    const existingMonth = acc.find((t) => t.month === month);
    if (existingMonth) {
      existingMonth.totalExpenditure += transaction.amount;
    } else {
      acc.push({
        month,
        totalExpenditure: transaction.amount,
      });
    }
    return acc;
  }, groupedTransactions);

  return groupedTransactions;
}

console.log("Exercise 3 - Group Data\n");
console.log(groupTransactions(transactions));
