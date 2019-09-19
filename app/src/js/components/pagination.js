import { h } from 'create-element-lib';

class Pagination {
  constructor(items, callbacks) {
    this.template = null;
    this.items = items;
    this.index = 0;
    this.maxItems = 50;
    this.callbacks = callbacks;
    this.render();
    this.update();
  }

  goTo(index) {

  }

  update() {
    const item = this.template;

    while(item.firstChild) {
      firstChild = item.firstChild;
      firstChild.parentElement.removeChild(firstChild);
    }

    let pages = this.items.length / this.maxItems;
    console.log(pages);
    if (pages < 1) {
      return;
    }

    pages = pages % 1 === 0 ? pages : (pages + 1);

    for (let i = 0; i < pages.length; i++) {
      this.template.appendChild(this.createItem(i));
    }
  }

  add(item) {
    this.items.push(item);
    this.update();
  }


  remove(item) {
    this.items.splice(this.items.indexOf(item), 1);
    this.update();
  }

  render() {
    this.template = h('ul', {class: 'pagination'});
    document.querySelector('.pane-sm.sidebar').appendChild(this.template);
  }

  createItem(index) {
    return h('li', {class: `item ${this.index === index ? 'is--active' : ''}`, click: () => {
      this.goTo(index);
    }}, [(index + 1)])
  }
};

export default Pagination;
