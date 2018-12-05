"use strict";
const adminLogin = "admin";
const adminPassword = "m4ngo1zh4ackz0r";
const cancel = "Aborted by user";
const wrongLogin = "Wrong user-name, please try again";
const wrongPassword = "Wrong password";
const correctLogin = "Enter your password";
const correctPassword = "Welcome!";
const enterLogin = prompt("Enter your login");
if (enterLogin === null) {
  alert(cancel);
} else {
  if (enterLogin === adminLogin) {
    const enterPassword = prompt("Enter your password");
    if (enterPassword === adminPassword) {
      alert(correctPassword);
    } else {
      alert(wrongPassword);
    }
  } else {
    alert(wrongLogin);
  }
}
