 let enrollmentDeadline = new Date("2026-01-20");
let dateToday = new Date();

if (dateToday < enrollmentDeadline) {   
    console.log("Enrollment Open");
} else {
    console.log("Enrollment Closed");
}


//Validate user input date
let userInput = new Date(2026,2,30);
let inputDate = new Date(userInput);    
if (inputDate.getFullYear() == 2026 && (inputDate.getMonth() + 1) == 2 && inputDate.getDate() == 30) {
    console.log("Valid Date:");
} else {
    console.log("Invalid Date");
}       