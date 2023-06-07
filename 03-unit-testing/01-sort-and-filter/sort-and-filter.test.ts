import { employees } from "./data-set";
import { filterAndSortByExperience } from "./";
import exp from "constants";

/**
 * Write a test that verifies that the filterAndSortByExperience function correctly filters and sorts employees.
 */

test('filterAndSortByExperience  correctly filters and sorts employees', () => {
    const result = filterAndSortByExperience("Sales", employees)

    expect(result.length).toBe(3);

    expect(result[0]).toBeDefined
    expect(result[0].name).toBe("Jim Brown")
    expect(result[1]).toBeDefined
    expect(result[1].name).toBe("Jake Davis")
    expect(result[2]).toBeDefined
    expect(result[2].name).toBe("John Doe")
});