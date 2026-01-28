import { courses } from "./module.js";
console.log("Courses Data:", courses);

//get all published courses
const publishedCourses = courses.filter(course => course.published);
publishedCourses.forEach(course =>
  console.log("Published Course:", course.title)
);
//The filter() method creates a new array with all elements that pass the test implemented by the provided function.
//In this case, we are filtering the courses array to get only the courses that are published (i.e., have the published property set to true).
//The forEach() method executes a provided function once for each array element.
//Here, we are using forEach to iterate over the filtered array of published courses and log their titles to the console.


//Sort courses by price (high → low)
const sortedCourses = [...courses].sort((a, b) => b.price - a.price);
console.log("Sorted Courses by Price (High to Low):", sortedCourses);
//sort(a,b) , where a and b are two objects from the array being compared.and a is the first object and b is the second object. The function should return a negative value if a should come before b, a positive value if a should come after b, or 0 if they are considered equal in terms of sorting order.
//In this case, we are sorting the courses based on their price in descending order (high to low) by subtracting the price of course a from the price of course b.
// const is used instead of let because we are not reassigning the sortedCourses variable after its initial assignment. The sortedCourses variable holds a reference to the sorted array of courses, and we do not intend to change that reference later in the code. Using const helps to indicate that the variable should not be reassigned, which can help prevent accidental changes and improve code readability.
// here const indicate that its temporary variable which is not going to be actually changed later in the code .


//Extract { title, price } only
const courseDetails = courses.map(({ title, price }) => ({ title, price }));
console.log("Course Details:", courseDetails);
//The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
//In this case, we are using destructuring to extract only the title and price properties from each course object and returning a new object containing just those properties. The result is an array of objects, each containing only the title and price of the courses.


//Calculate total value of published courses
const totalValue = courses
  .filter(course => course.published)
console.log("Total Value of Published Courses:", totalValue);
//here .reduce() method is used to calculate the total value of published courses by summing up their prices.
//The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
//In this case, we are using reduce to accumulate the total price of all published courses by adding the price of each course to the total.
//The initial value of total is set to 0 (the second argument to reduce), and for each published course, we add its price to the total.


//Add a new course immutably
const newCourse = {
  id: 4,
  title: "MernStack",
  price: 18000,
  published: true
};
const updatedCourses = [...courses, newCourse];
console.log("Updated Courses:", updatedCourses);//Here, we are creating a new array called updatedCourses that includes all the existing courses from the courses array, along with the newCourse object added at the end.
//The spread operator (...) is used to spread the elements of the courses array into the new array, and then we simply add the newCourse object to the end of that array.
//This approach ensures that we do not mutate the original courses array, maintaining immutability.