import { products } from "./data-set";
import { formatProductDescriptions } from "./";

/**
 * Write a test that verifies that the formatProductDescriptions function correctly formats product descriptions.
 */

test('formatProductDescriptions function correctly formats product descriptions', () => {
    const result = formatProductDescriptions(products)

    expect(result.length).toBe(6);

    expect(result[0]).toBeDefined
    expect(result[0]).toBe("Product 1: 'Coca-Cola' is available for only $99.99")
    expect(result[1]).toBeDefined
    expect(result[1]).toBe("Product 2: 'Pepperoni Pizza' is available for only $50.00")
});