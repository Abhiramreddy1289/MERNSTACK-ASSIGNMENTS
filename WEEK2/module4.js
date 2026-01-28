import { roles } from './module.js';

//Get all role names
const roleNames = Object.keys(roles);
console.log('Role Names:', roleNames);

//Check if student can delete
const canStudentDelete = roles.student.includes('delete');
console.log('Can Student Delete:', canStudentDelete);

//Create a flat list of all unique permissions
const permissionsSet = [...new Set(Object.values(roles).flat())];
console.log('All Unique Permissions:', permissionsSet);

//Add new role moderator immutably
const newRoles = {
  ...roles,
  moderator: ['read', 'update', 'delete','sleep'],
};
console.log('New Roles with Moderator:', newRoles);