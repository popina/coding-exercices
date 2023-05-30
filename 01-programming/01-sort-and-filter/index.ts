import { employees } from './data-set';

type Employee = {
    name: string;
    experience: number;
    department: string;
}

type Dept = 'Sales' | 'HR' | 'IT'

/**
 * Write a function that filters the employees array to include only employees from the Sales department, 
 * and then sorts those employees by their experience in ascending order.
 */
function filterAndSortByExperience(department: Dept, employees: Employee[]) {
    // Implement your code here
}

console.log('Exercise 1 - Sort and Filter\n');
// Uncomment the line below to test your function
// console.log(filterAndSortByExperience('Sales', employees));