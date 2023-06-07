import { products } from './data-set';
import type { Product } from './data-set';

/**
 * Write a function that transforms the products array into an array of strings,
 * where each string is a formatted description of a product.
 * 
 * Example output: ["Product 1: 'Awesome Product' is available for only $49.99", "Product 2: 'Great Product' is available for only $29.99", ...]
 */

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

function formatProductDescriptions(products: Product[]) {
    return products.map((product, index) => {
        return `Product ${index}: ${product.name} is available for only ${formatter.format(product.price)}`
    })
}

console.log('Exercise 2 - Transform Data\n');
// Uncomment the line below to test your function
console.log(formatProductDescriptions(products));