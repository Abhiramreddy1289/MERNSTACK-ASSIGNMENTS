let dob = new Date(2000,5,15);
let today = new Date();
let age = today.getFullYear() - dob.getFullYear();
console.log("Age is:", age);