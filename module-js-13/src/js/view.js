import {EventEmitter} from 'events';

export default class View extends EventEmitter {
    constructor() {
        super();
        this.source = document.querySelector('.template').innerHTML.trim();
        this.template = Handlebars.compile(this.source);
        this.cardList = document.querySelector('.card-list');
        this.input = document.querySelector('#input');
        this.form = document.querySelector('.form');
        this.button = document.querySelector('btn');
        this.cardList.addEventListener('click', this.handleRemove.bind(this));
        this.form.addEventListener('submit', this.handleAdd.bind(this));
        
    }

    handleAdd(e) {
        e.preventDefault();
        const {value} = this.input;
        if(value === '') return alert('Enter your link');
        this.emit('add',value);
    }

    handleRemove(e) {
        let event = e.target;
        e.preventDefault();
        if(event.classList.value === 'delete') {
            this.emit('remove', e)
        }
    }
   
    markUp(array) {
        this.cardList.innerHTML = '';
        let markUp = array.reduce((acc,link) => acc + this.template(link),'');
        this.cardList.insertAdjacentHTML('afterbegin', markUp);
        this.form.reset();
    }

    removeCard(e) {
        e.target.parentNode.remove();
    }

}