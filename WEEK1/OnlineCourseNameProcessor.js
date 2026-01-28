//Scenario : You are preparing a course list for display on a website.

//Test data:
const courses = ["javascript", "react", "node", "mongodb", "express"];


// Tasks:
//     1. filter() courses with name length > 5
const longCourses = courses.filter(course => course.length > 5);

//     2. map() to convert course names to uppercase
const upperCourses = courses.map(course => course.toUpperCase());

//     3. reduce() to generate a single string:
//               "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"
const courseString = courses
    .map(course => course.toUpperCase()) // convert to uppercase
    .reduce((acc, course, index) => index === 0 ? course : acc + " | " + course, "");

//     4. find() the course "react"
const foundCourse = courses.find(course => course === "react");

//     5. findIndex() of "node"
const indexOfNode = courses.findIndex(course => course === "node");

console.log("Courses with length > 5:", longCourses);
console.log("Courses in uppercase:", upperCourses);
console.log("Course string:", courseString);
console.log("Found course:", foundCourse);
console.log("Index of 'node':", indexOfNode);

