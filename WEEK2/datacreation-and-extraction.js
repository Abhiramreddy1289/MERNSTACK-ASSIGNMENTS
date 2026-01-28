let date=new Date();
console.log("Current Date & Time is:", date.toString());
console.log("Year is:", date.getFullYear());
console.log("Month is:", date.getMonth() + 1); //human readable month
console.log("Date is:", date.getDate());
console.log("Day of Week is:", date.getDay()); //0-6
console.log("Hours are:", date.getHours());
console.log("Minutes are:", date.getMinutes());
console.log("Seconds are:", date.getSeconds()); 


let date1=new Date(2025, 4, 15, 10, 30, 45); //May 15, 2025 10:30:45
console.log("Specific Date & Time is:", date1.toString());

//Display in DD-MM-YYYY HH:mm:ss format