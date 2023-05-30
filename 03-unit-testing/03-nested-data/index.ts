import { users } from "./data-set";
import type { User } from "./data-set";

export function addUserTotalOrderValue(users: User[]) {
  return users.map((user) => ({
    ...user,
    totalOrderValue: user.orders.reduce(
      (total, order) => total + order.value,
      0
    ),
  }));
}

console.log("Exercise 4 - Nested Data Manipulation\n");
console.log(addUserTotalOrderValue(users));
