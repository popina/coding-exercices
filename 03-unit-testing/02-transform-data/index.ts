import { products } from "./data-set";
import type { Product } from "./data-set";

export function formatProductDescriptions(products: Product[]) {
  return products.map(
    (product) =>
      `Product ${product.id}: '${
        product.name
      }' is available for only $${product.price.toFixed(2)}`
  );
}

console.log("Exercise 2 - Transform Data\n");
console.log(formatProductDescriptions(products));
