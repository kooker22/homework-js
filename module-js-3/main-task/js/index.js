'use strict'
const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

function isLoginValid (login) {
  return login.length >= 4 && login.length <= 16;
}
function isLoginUnique (allLogins, login) {
   return allLogins.includes(login);
}

function addLogin (allLogins, login) {
  if (isLoginValid(login)) {
    if (isLoginUnique(allLogins, login)) {
      return alert('Такой логин уже используется!')
    } else {
      logins.push(login)
      return alert('Лоигин успешно добавлен')
    }
  }
  return alert('Ошибка! Логин должен быть от 4 до 16 символов')
}
addLogin(logins,'Ajax');
addLogin(logins,'robotGoogles'); 
addLogin(logins,'Zod');
addLogin(logins,'jqueryisextremelyfast');
