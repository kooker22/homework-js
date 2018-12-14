'use strict'
const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd']
let attempts = 3
do {
  attempts -= 1;
  let userPass = prompt('Enter your password');
  if (passwords.includes(userPass) === true) {
    alert('Добро пожаловать!');
    break;
  } else if (userPass !== passwords.includes(userPass) && attempts !== 0 && userPass !== null) {
    alert(`Неверный пароль, у вас осталось ${attempts} попыток`);
  } else if (attempts === 0) {
    alert('У вас закончились попытки, аккаунт заблокирован!');
    break;
  } else if (userPass === null) {
    alert('Ждем в другой раз');
    break;
  }
} while (attempts !== 0)
