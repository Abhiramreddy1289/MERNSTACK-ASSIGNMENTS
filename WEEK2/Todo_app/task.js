import { validateTitle,validPriorities,validateDueDate } from './validator.js';
                    
                    const tasks = [];
                    let taskId=1;
                    
                    // 1. Add new task
                    function addTask(title, priority, dueDate) {
                      if (!validateTitle(title)) {
                        return "invalid title min 3 char required";
                      }
                      if (!validPriorities.includes(priority)) {
                        return "invalid priority(low, medium, high)";
                      }
                      if (!validateDueDate(dueDate)) {
                        return "invalid due date must be future date";
                      }
                      const task = { id: taskId++, title, priority, dueDate };
                      tasks.push(task);
                      return "Task added successfully";
                    }
                    
                    // 2. Get all tasks
                    function getAllTasks() {
                      return tasks;
                      // Return all tasks
                    }
                    
                    // 3. Mark task as complete
                    function completeTask(taskId) {
                      const task = tasks.find(t => t.id === taskId);
                      if (!task) {
                        return "Task not found";
                      } 
                        task.completed = true;
                        return "Task marked as complete";
                    }

                  // Export functions
                  export { addTask, getAllTasks, completeTask };