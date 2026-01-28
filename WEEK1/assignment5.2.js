// ASSIGNMENT 2:
// -------------
// Student Performance Dashboard

// You are working on a college result analysis system.

// Test Data:
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

// Tasks:
// 1. Filter students who passed (marks ≥ 40)
const passed = students.filter(student => student.marks >= 40);

//     2. map() to add a grade field
//               ≥90 → A
//               ≥75 → B
//               ≥60 → C
//               else → D
const withGrades = passed.map(student => ({
  ...student,
  grade: student.marks >= 90 ? 'A' : student.marks >= 75 ? 'B' : student.marks >= 60 ? 'C' : 'D'
}));

//    3. reduce() to calculate average marks
const averageMarks = students.reduce((sum, student) => sum + student.marks, 0) / students.length;

//    4. find() the student who scored 92
const topScorer = students.find(student => student.marks === 92);

//    5. findIndex() of student "Kiran"
const kiranIndex = students.findIndex(student => student.name === "Kiran");

console.log("Passed Students:", passed);
console.log("With Grades:", withGrades);
console.log("Average Marks:", averageMarks);
console.log("Top Scorer:", topScorer);
console.log("Kiran's Index:", kiranIndex);






