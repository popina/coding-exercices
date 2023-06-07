import { transactions } from "./data-set";
import { groupTransactions } from ".";

/**
 * Write a unit test for the groupTransactions function.
 */

test('groupTransactions function correctly groups debit transactions', () => {
    const result = groupTransactions(transactions)

    expect(result.length).toBe(3);

    expect(result[0]).toBeDefined
    expect(result[0].month).toBe("May")
    expect(result[0].totalExpenditure).toBe(100)
    expect(result[1]).toBeDefined
    expect(result[1].month).toBe("June")
    expect(result[1].totalExpenditure).toBe(300)
    expect(result[2]).toBeDefined
    expect(result[2].month).toBe("July")
    expect(result[2].totalExpenditure).toBe(1100)
});