import { addTask, getAllTasks, completeTask } from './task.js';

// 1. Add some tasks
const task1 = addTask("Buy groceries", "medium", "2027-12-01");
const task2 = addTask("Do", "high", "2024-11-01");  // Invalid title
const task3 = addTask("Clean house", "urgent", "2024-10-01");  // Invalid priority      
const task4 = addTask("Pay bills", "low", "2022-01-01");  // Invalid due date   
console.log(task1); // Should indicate success
console.log(task2); // Should indicate invalid title
console.log(task3); // Should indicate invalid priority
console.log(task4); // Should indicate invalid due date

// 2. Display all tasks
console.log("All Tasks:", getAllTasks());   
// 3. Complete a task
console.log(completeTask(1)); // Assuming task with ID 1 exists
// 4. Display all tasks again
console.log("All Tasks after completion:", getAllTasks());