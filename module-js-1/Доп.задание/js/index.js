"use strict";

const sharm = 15;
const hurgada = 25;
const taba = 6;

const error = "ошибка ввода";
const seatsError = "Желаемого вами количества мест нет в наличии";

const weAreSorry = "Нам очень жаль, приходите еще";
let destination = prompt(
  "Выберите направление, куда бы вы хотели полетель и введите номер курорта Шарм-Аль-Шейх - 1 Хургада - 2 Таба - 3"
);

if (Number.parseInt(destination) === 1) {
  const seats = prompt("Вы летите в Шарм. Введите количество необходимых мест");
  if (Number.isNaN(seats) === true) {
    alert(error);
  } else if (seats === null) {
    alert(weAreSorry);
  } else if (seats > 0 && seats <= 15) {
    const shopping = confirm(
      "Выбранное кол-во мест есть в наличии. Подтвердите покупку билетов"
    );
    if (shopping === true) {
      alert("Приятного путешествия в Шарм-Аль-Шейх");
    } else {
      alert(weAreSorry);
    }
  } else if (seats <= 0 || seats > sharm) {
    alert(seatsError);
  }
} else if (Number.parseInt(destination) === 2) {
  const seats = prompt(
    "Вы летите в Хургаду. Введите количество необходимых мест"
  );
  if (Number.isNaN(seats) === true) {
    alert(error);
  } else if (seats === null) {
    alert(weAreSorry);
  } else if (seats > 0 && seats <= hurgada) {
    const shopping = confirm(
      "Выбранное кол-во мест есть в наличии. Подтвердите покупку билетов"
    );
    if (shopping === true) {
      alert("Приятного путешествия в Хургаду");
    } else {
      alert(weAreSorry);
    }
  } else if (seats <= 0 || seats > hurgada) {
    alert(seatsError);
  }
} else if (Number.parseInt(destination) === 3) {
  const seats = prompt("Вы летите в Табу. Введите количество необходимых мест");
  if (Number.isNaN(seats) === true) {
    alert(error);
  } else if (seats === null) {
    alert(weAreSorry);
  } else if (seats > 0 && seats <= taba) {
    const shopping = confirm(
      "Выбранное кол-во мест есть в наличии. Подтвердите покупку билетов"
    );
    if (shopping === true) {
      alert("Приятного путешествия в Табу");
    } else {
      alert(weAreSorry);
    }
  } else if (seats <= 0 || seats > taba) {
    alert(seatsError);
  }
} else if (
  Number.parseInt(destination) < 1 ||
  Number.parseInt(destination) > 3
) {
  alert("Выбранного вами направления нет в наличии! Вернитесь к списку!");} else if (destination === null) {
  alert(weAreSorry);
}
