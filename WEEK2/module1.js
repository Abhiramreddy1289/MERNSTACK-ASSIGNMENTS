import {users} from "./module.js";
console.log("Users Data:", users);
//get all active users
for(let user of users){
  if(user.active===true){
    console.log("Active Users:", user.name);
  }
}
//checking for admin users
for(let user of users){
  if(user.role==="admin"){
    console.log("Admin Users:", user.name);
  }
}
//find user by id and update status to inactive
for(let user of users){
  if(user.id==1 && user.active===true){
    user.active=false;
    console.log("Updated User Status:", user);
  }
else if(user.id==2 && user.active===true){
    user.active=false;
    console.log("Updated User Status:", user);
  } 
  else if(user.id==3 && user.active===true){
    user.active=false;
    console.log("Updated User Status:", user);
  }
}































//for(let user of users){
//if(users.status==="active"){
  //console.log("Active Users:", users.name);
//}
//if(users.role==="admin"){
  //console.log("Admin Users:", users.name);
  //if(user.id==1 && user.active==="true"){
    //users.active="false";
    //console.log("Updated User Status:", users);
  //}
  ///else if(user.id==2 && user.active==="true"){
    //users.active="false";
    //console.log("Updated User Status:", users);
  //}
  //else if(user.id==3 && user.active==="true"){
    //users.active="false";
    //console.log("Updated User Status:", users);
  //}
//}
//}
