import {EventEmitter} from 'events';
import {LOCALSTORAGE} from './localstorage';

export default class Model extends EventEmitter {
    constructor(linkArray = []) {
        super();
        this.linkArray = linkArray;
    }
    addCard(text) {
        if (!this.checkValue(text, this.linkArray)) {
            this.linkArray.unshift({url: text});
            LOCALSTORAGE.set('linkArray', this.linkArray);
            
        } else {
            alert('Link already exists in bookmark');
        }
        return this.linkArray;
    }

    checkValue (value, array) {
        return array.some(el => el.url === value)
      } 
    
    removeCard (e) {
        let event = e.target;
        event.parentNode.remove();
        this.linkArray = this.linkArray.filter(el => el.url !== event.previousElementSibling.innerText)
        LOCALSTORAGE.set('linkArray', this.linkArray)
      }
}