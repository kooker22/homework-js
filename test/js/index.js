'use strict'
let min = 1;
let max = 4;
for(let i = 0;i < Infinity; i++ ) {
    let userInput = Number(prompt( 'Давай сыграем в интересную игру \'камень-ножницы-бумага\'. Введи номер инструмента : Камень - 1, Ножницы - 2, Бумага - 3. Поехали...'));
    let compChoise = Math.floor(Math.random() * (max - min)) + min;
     if (userInput === 0) {
        break;
    }
     else if( userInput !== 1 && userInput !== 2  && userInput !== 3) {
        alert('Введите число от 1 до 3');
        continue;
    } 
    else if (userInput === compChoise) {
        alert('Ничья! Давай заново!');
    }
    else if (userInput === 1 && compChoise === 2) {
        alert('Вы победили. Ножницы затупились об камень!');
        continue;
    }
    else if (userInput === 1 && compChoise === 3) {
        alert('Вы проиграли! Бумага обворачивает камень!');
        continue;
    }
    else if (userInput === 2 && compChoise === 1) {
        alert('Вы проиграли! Ножиницы затупились об камень!');
        continue;
    }
    else if (userInput === 2 && compChoise === 3) {
        alert('Вы победили! Ножницы разрезали бумагу!');
        continue;
    }
    else if (userInput === 3 && compChoise === 1) {
        alert('Вы победили! Бумага обворачивает камень!');
        continue;
    }
    else if (userInput === 3 && compChoise === 2) {
        alert('Вы проиграли! Ножницы разрезали бумагу!');
        continue;
    }
}
