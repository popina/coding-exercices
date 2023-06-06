import { users } from "./data-set";
import { addUserTotalOrderValue } from ".";

/**
 * Write a unit test for the addUserTotalOrderValue function.
 */

test('addUserTotalOrderValue function correctly reduce objects', () => {
    const result = addUserTotalOrderValue(users)

    expect(result.length).toBe(4);

    expect(result[0]).toBeDefined
    expect(result[0].name).toBe("John Doe")
    expect(result[0].totalOrderValue).toBe(300)
    expect(result[1]).toBeDefined
    expect(result[1].name).toBe("Jane Doe")
    expect(result[1].totalOrderValue).toBe(700)
});