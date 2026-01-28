import {courses , cart } from './module.js';
//Merge cart with courses to get full course info
const mergedCourses = cart.map(cartItem => {
    const course = courses.find(c => c.id === cartItem.id);
    return {
        ...cartItem,
        ...course
    };
});
console.log(mergedCourses);

//Calculate total cart amount
const cartTotal= mergedCourses.reduce((total, item) => total + item.price * item.quantity, 0);
console.log(`Total Cart Amount: $${cartTotal}`);

//Increase quantity of a course (immutably)
const increaseQuantity = cart.map(item => item.id === 101 ? {...item, quantity: item.quantity + 1} : item);
console.log(increaseQuantity);

//Remove a course from cart
const removeCourse = cart.filter(item => item.id !== 102);
console.log(removeCourse);

//Check if all cart items are paid courses
const allPaidCourses = mergedCourses.every(item => item.price > 0);
console.log("All cart items are paid courses: " + allPaidCourses);