// Assignment 2: Exam Result Summary
// ---------------------------------
// Scenario : Marks are stored subject-wise for a student.

// Test data:
const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};

// Tasks:
// 1. Calculate total marks
const totalMarks = Object.values(marks).reduce((sum, mark) => sum + mark, 0);
console.log("Total Marks:", totalMarks);

// 2. Calculate average marks
const averageMarks = totalMarks / Object.keys(marks).length;
console.log("Average Marks:", averageMarks);

// 3. Find the highest scoring subject
const highestSubject = Object.entries(marks).reduce((max, [subject, mark]) => 
    mark > max.mark ? { subject, mark } : max
);
console.log("Highest Scoring Subject:", highestSubject.subject, "-", highestSubject.mark);

// 4. Add a new subject computer: 90
marks.computer = 90;
console.log("Updated Marks:", marks);