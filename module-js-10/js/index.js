
 'use strict'
let getAllUsers = document.querySelector('#get-users');
let getUserById = document.querySelector('#get-user-byid');
let getUserByIdInput = document.querySelector('#get-user-byid input')
let postUser = document.querySelector('#post-user');
let postUserInput = document.querySelector('#post-user input');
let usersName = document.querySelector('.name');
let usersAge = document.querySelector('.age')
let deleteUser = document.querySelector('#delete-user');
let deleteUserInput = document.querySelector('#delete-user input');
let updateUser = document.querySelector('#update-user');
let updateUserInputId = document.querySelector('#id');
let updateUserInputName = document.querySelector('#name');
let updateUserInputAge = document.querySelector('#age');
let displayResult = document.querySelector('.display-result');

function getAll() {
 const URL = 'https://test-users-api.herokuapp.com/users/';
fetch(URL)
.then(res => res.json())
// .then(result => console.log(result.data))
  .then(result => displayGetAllUser(result.data))
}

function displayGetAllUser(array){  
   let userList = array.reduce((acc,el) => 
   acc +
  `<li>
  <p>User name: ${el.name}</p>  
   <p>Age: ${el.age}</p>
   <p>ID: ${el.id}</p>
   </li>`,''
  )
  displayResult.innerHTML = userList;
   }
 


function getUsersById(e) {
  e.preventDefault();
  const URL = `https://test-users-api.herokuapp.com/users/${getUserByIdInput.value}`;
  fetch(URL)
  .then(data => data.json())
  .then(res =>displayUserById(res.data))
  //.then(result => console.log(result))
  getUserById.reset()
}
function displayUserById(res) {
  const HTML = `
  <li>
  <p>User name: ${res.name}</p>
  <p>Age: ${res.age}</p>
  <p>ID: ${res.id}</p>
  </li>
  `;
  displayResult.innerHTML = HTML;
}

function addUser(e) {
e.preventDefault();
fetch('https://test-users-api.herokuapp.com/users', {
  method: 'POST',
  body: JSON.stringify({ name: usersName.value, age: usersAge.value}),
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }})
 .then(data => data.json())
 .then(res => displayAddUser(res.data))
 .catch(err => console.log(err));
postUser.reset();
}

function displayAddUser(res) {
  const HTML = `
  <p>User name: ${res.name}</p>
  <p>Age: ${res.age}</p>
  <p>ID: ${res._id}</p>
  `;
  displayResult.innerHTML = HTML;
}

function delUser(e) {
  e.preventDefault();
  fetch(`https://test-users-api.herokuapp.com/users/${deleteUserInput.value}`,{
    method: 'DELETE',
  })
  .then(data => data.json())
  .then(res => displayDeletedUser(res))
}

function displayDeletedUser() { 
  const delMessage = 
  `User with ID '${deleteUserInput.value}' was deleted from server succesfull`;
  displayResult.innerHTML = delMessage;
  deleteUser.reset()
}
  
function update(e) {
  e.preventDefault()
  fetch(`https://test-users-api.herokuapp.com/users/${updateUserInputId.value}`,{
    method: 'PUT',
    body: JSON.stringify({name: updateUserInputName.value ,age: updateUserInputAge.value}),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }  
  })
  .then(data => data.json())
  //.then(res => console.log(res))
  .then(res => displayUpdateUser(res.data));
  updateUser.reset()
}

function displayUpdateUser(res) {
  const HTML = `
  User with ID ${updateUserInputId.value} was updated! <br>
  New user's data:
  <p>User name: ${res.name}</p>
  <p>Age: ${res.age}</p>
  <p>ID: ${res.id}</p>
  `;
  displayResult.innerHTML = HTML;
}
getUserById.addEventListener('submit',getUsersById);
getAllUsers.addEventListener('click',getAll);
updateUser.addEventListener('submit',update);
deleteUser.addEventListener('submit', delUser);
postUser.addEventListener('submit',addUser);