import { employees } from "./data-set";

type Employee = {
  name: string;
  experience: number;
  department: string;
};

type Dept = "Sales" | "HR" | "IT";

export function filterAndSortByExperience(
  department: Dept,
  employees: Employee[]
) {
  return employees
    .filter((employee) => employee.department === department)
    .sort((a, b) => a.experience - b.experience);
}

console.log("Exercise 1 - Sort and Filter\n");
console.log(filterAndSortByExperience("Sales", employees));
