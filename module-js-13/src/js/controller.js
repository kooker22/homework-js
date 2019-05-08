export default class Controller {
    constructor(model,view) {
        this.model = model;
        this.view = view;
        this.view.on('add', this.addLink.bind(this));
        this.view.on('remove', this.removeLink.bind(this));
    }

    addLink(link) {
        const array = this.model.addCard(link);
        this.view.markUp(array);
    }

    removeLink(e) {
        this.model.removeCard(e);
        this.view.removeCard(e);
    }
    
}