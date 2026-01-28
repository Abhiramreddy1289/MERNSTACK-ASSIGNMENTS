//Scenario : You receive marks from an exam system.

//Test data:
const marks = [78, 92, 35, 88, 40, 67];

// Tasks:
//     1. filter() marks ≥ 40 (pass marks)
const passedMarks = marks.filter(mark => mark >= 40);

//     2. map() to add 5 grace marks to each student
const marksWithGrace = marks.map(mark => mark + 5);

//     3. reduce() to find highest mark
const highestMark = marks.reduce((max, mark) => mark > max ? mark : max, marks[0]);

//     4. find() first mark below 40
const firstFailed = marks.find(mark => mark < 40);

//     5. findIndex() of mark 92
const indexOf92 = marks.findIndex(mark => mark === 92);


console.log("Passed marks:", passedMarks);
console.log("Marks with grace:", marksWithGrace);
console.log("Highest mark:", highestMark);
console.log("First mark below 40:", firstFailed);
console.log("Index of mark 92:", indexOf92);