import { transactions } from './data-set';
import type { Transaction  } from './data-set';

/**
 * Write a function that groups transactions by month and calculates total expenditure for each month.
 * Expenditure should be total of 'debit' transactions.
 * 
 * Example output: [{ month: 'May', totalExpenditure: 100 }, { month: 'June', totalExpenditure: 300 }, { month: 'July', totalExpenditure: 500 }, ...]
 */

type TotalByMonth = { month: string, totalExpenditure: number }

function groupTransactions(transactions: Transaction[]) {
    return transactions.reduce((previous, transaction) => {
        if (transaction.type == 'debit') {
            return previous
        }

        const monthName = transaction.date.toLocaleString('en-US', { month: 'long' })

        const total = previous.filter((value) => { 
            return value.month == monthName
         }).at(0)
        
        if (total) {
            total.totalExpenditure += transaction.amount
        }
        else {
            previous.push({ month: monthName, totalExpenditure: transaction.amount })
        }
        return previous
    }, [] as TotalByMonth[])
}

console.log('Exercise 4 - Group Data\n');
// Uncomment the line below to test your function
console.log(groupTransactions(transactions));