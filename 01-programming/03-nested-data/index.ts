import { users } from './data-set';
import type { User } from './data-set';

/**
 * Write a function that accepts an array of users where each user has an array of orders. 
 * Each order has a value. The function should return a new array where each user object 
 * includes a new property 'totalOrderValue' which is the sum of the values of all their orders.
 * 
 * Example output: [{ id: 1, name: 'John Doe', totalOrderValue: 300 }, { id: 2, name: 'Jane Doe', totalOrderValue: 700 }, ...]
 */
function addUserTotalOrderValue(users: User[]) {
    // Implement your code here
}

console.log('Exercise 4 - Nested Data Manipulation\n');
// Uncomment the line below to test your function
// console.log(addUserTotalOrderValue(users));