// Initial data
let isLoggedIn = true;
let isProfileComplete = false;

function getUserMessage(isLoggedIn, isProfileComplete) {
//    1. If user is not logged in → show "Please login"
  if (!isLoggedIn) {
    return "Please login";
  }

//    2. If logged in but profile incomplete → show "Complete your profile"
  if (!isProfileComplete) {
    return "Complete your profile";
  }

//    3. If logged in and profile complete → show "Welcome back!"
  return "Welcome back!";
}

// 4. Store the result in message
const message = getUserMessage(isLoggedIn, isProfileComplete);

// 5. Print the message
console.log(message);
