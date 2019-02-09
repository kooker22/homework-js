'use strict'

class Hamburger {
  /**
   *Creates an instance of Hamburger.
   * @param {string} size
   * @param {string} stuffing
   * @memberof Hamburger
   */
  constructor (size, stuffing) {
    this._size = size;
    this._stuffing = stuffing;
    this._toppings = [];
  }

  static get SIZE_SMALL() {
    return 'SIZE_SMALL';
  }
  static get SIZE_LARGE() {
    return 'SIZE_LARGE';
  }
  static get SIZES() {
    return {
        [Hamburger.SIZE_SMALL]: {
            price: 30,
            calories: 50
        },
        [Hamburger.SIZE_LARGE]: {
            price: 50,
            calories: 100
        }
    };
}
  static get STUFFING_CHEESE() {
    return 'STUFFING_CHEESE';
  }
  static get STUFFING_SALAD() {
    return 'STUFFING_SALAD';
  }
  static get STUFFING_MEAT() {
    return 'STUFFING_MEAT';
  }
  static get STUFFINGS() {
    return {
        [Hamburger.STUFFING_CHEESE]: {
            price: 15,
            calories: 20
        },
        [Hamburger.STUFFING_SALAD]: {
            price: 20,
            calories: 5
        },
        [Hamburger.STUFFING_MEAT]: {
            price: 35,
            calories: 15
        }
    };
}
  static get TOPPING_SPICE () {
   return 'TOPPING_SPICE';
  }
  static get TOPPING_SAUCE () {
    return 'TOPPING_SAUCE';
  }
  static get TOPPINGS() {
    return {
        [Hamburger.TOPPING_SPICE]: {
            price: 10,
            calories: 0
        },
        [Hamburger.TOPPING_SAUCE]: {
            price: 15,
            calories: 5
        }
    };
}

  /**
   *
   *
   * @param {string} topping
   * @memberof Hamburger
   */
  addTopping(topping) {
    if (!this._toppings.includes(topping)) {
        this._toppings.push(topping);
    }
}
  /**
   *
   *
   * @param {string} topping
   * @memberof Hamburger
   */
  removeTopping(topping) {
      if (this._toppings.includes(topping)) {
          this._toppings = this._toppings.filter(el => el !== topping);
      }
  }

  get toppings() {
      return this._toppings ;
  }

  get size() {
      return this._size;
  }

  get stuffing() {
      return this._stuffing;
  }

  get price() {
      return Hamburger.SIZES[this.size].price + 
      this.toppings.reduce((acc,el) => acc + Hamburger.TOPPINGS[el].price,0) +
      Hamburger.STUFFINGS[this.stuffing].price;
}

  get calories() {
       return Hamburger.SIZES[this.size].calories
       + this.toppings.reduce((acc,el) => acc + Hamburger.TOPPINGS[el].calories,0) + 
       Hamburger.STUFFINGS[this.stuffing].calories;
  }
}

// Маленький гамбургер с начинкой из сыра
const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// Добавка из приправы
hamburger.addTopping(Hamburger.TOPPING_SPICE);

// Спросим сколько там калорий
console.log("Calories: ", hamburger.calories);

// Сколько стоит?
console.log("Price: ", hamburger.price);

// Я тут передумал и решил добавить еще соус
hamburger.addTopping(Hamburger.TOPPING_SAUCE);

// А сколько теперь стоит?
console.log("Price with sauce: ", hamburger.price);

// Проверить, большой ли гамбургер?
console.log("Is hamburger large: ", hamburger.size === Hamburger.SIZE_LARGE); // -> false

// Убрать добавку
hamburger.removeTopping(Hamburger.TOPPING_SPICE);

// Смотрим сколько добавок
console.log("Hamburger has %d toppings", hamburger.toppings.length); // 1