# Week 2 Overview

This folder contains the complete Week 2 JavaScript assignments and projects, covering date handling, object copying, module design, a shopping cart simulation, and a task manager.

## Folder Structure

- `Assignment_1/` - Date and time practice exercises.
- `Assignment_2/` - Shallow copy and deep copy exercises.
- `Assignment_3/` - Modular data engine for users, courses, cart, and roles.
- `E-Commerce-ShoppingCart/` - E-commerce simulation with products, cart operations, and checkout.
- `Todo_app/` - Task management app with validation and task-completion logic.

## Assignment 1: Date & Time Exercises

Files:
- `age-calculator.js` - Calculates age from a hard-coded birth date.
- `datacreation-and-extraction.js` - Demonstrates creating and extracting date/time values.
- `datecomparision-and-validation.js` - Compares dates, checks deadlines, and validates date input.

Purpose:
- Learn JavaScript `Date` object creation and methods.
- Extract components such as year, month, day, and time.
- Understand date comparison and validation logic.

## Assignment 2: Copying and Mutation

Files:
- `assignment2` - Contains shallow-copy and deep-copy exercise descriptions and tasks.
- `shallowcopy.js` - Practice creating shallow copies and observing shared nested references.
- `deepcopy.js` - Practice creating deep copies so original objects remain unchanged.

Purpose:
- Understand the differences between shallow copy and deep copy.
- Learn how object mutation affects copies and original data.
- Build safer data-handling habits for JavaScript objects.

## Assignment 3: Module-Based Data Engine

Files:
- `assignment3` - Contains the assignment story, data model, and task list.
- `module.js`, `module1.js`, `module2.js`, `module3.js`, `module4.js` - Implement different areas of the data engine.

Purpose:
- Build a reusable data engine for an online learning platform.
- Work with users, courses, cart operations, and role permissions.
- Practice module organization and immutable updates.

## E-Commerce Shopping Cart

Files:
- `app.js` - Main application script demonstrating product browsing, cart operations, and checkout.
- `product.js` - Product catalog and search utilities.
- `cart.js` - Shopping cart operations including add, update, and remove.
- `payment.js` - Payment processing with discount support.
- `discount.js` - Coupon and discount logic.

Purpose:
- Simulate a small e-commerce workflow.
- Practice modular JavaScript and separation of concerns.
- Explore cart calculations, quantity updates, and checkout behavior.

## Todo App

Files:
- `app.js` - Example usage of the todo app.
- `task.js` - Task creation, retrieval, and completion logic.
- `validator.js` - Task validation rules for title, priority, and due date.

Purpose:
- Practice building a small task manager.
- Validate user input and maintain task state.
- Implement basic CRUD-style task operations.

## How to Run

From the `WEEK2` folder, use Node.js to run each script:

```bash
cd Assignment_1
node age-calculator.js
node datacreation-and-extraction.js
node datecomparision-and-validation.js

cd ../Assignment_2
node shallowcopy.js
node deepcopy.js

cd ../Assignment_3
node module.js

cd ../E-Commerce-ShoppingCart
node app.js

cd ../Todo_app
node app.js
```

## Notes

- Use Node.js 14+ or later for best compatibility.
- Many files use ES modules and modern JavaScript syntax.
- Update file names and command paths if you move code between folders.
- Refer to each subfolder for additional assignment details and supporting files.
