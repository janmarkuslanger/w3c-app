import { h } from 'create-element-lib';
import removeElements from '../utils/remove-elements';

class Pagination {
  constructor(items, callbacks) {
    this.template = null;
    this.items = items;
    this.index = 0;
    this.maxItems = 200;
    this.callbacks = callbacks;
    this.render();
    this.update();
  }

  goTo(index) {
    const activeItems = [];
    let point = this.maxItems * index;
    const itemCount = (this.items.length - point) > this.maxItems
      ? this.maxItems
      : (this.items.length - point);

    for (let i = 0; i < itemCount; i++) {
      activeItems.push(this.items[point + i]);
    }

    [].slice.call(document.querySelectorAll('.list-group-item'))
      .forEach((item) => {
        item.parentElement.removeChild(item);
      });

    activeItems.forEach((item) => {
      item.renderListItem();
    });

    this.index = index;
    this.update()
  }

  update() {
    const item = this.template;

    removeElements(this.template);

    let pages = this.items.length / this.maxItems;

    if (pages <= 1) {
      return;
    }

    pages = pages % 1 === 0 ? pages : parseInt(pages + 1);

    for (let i = 0; i < pages; i++) {
      this.template.appendChild(this.createItem(i));
    }
  }

  add(item) {
    if (this.items.length < this.maxItems) {
      item.renderListItem();
    }
    
    this.items.push(item);
    this.update();
  }


  remove(item) {
    this.items.splice(this.items.indexOf(item), 1);
    this.update();
  }

  destroy() {
    this.template.parentElement.removeChild(this.template);
  }

  render() {
    this.template = h('ul', {class: 'pagination'});
    document.querySelector('.pane-sm.sidebar').appendChild(this.template);
  }

  createItem(index) {
    return h('li', {class: `item ${this.index === index ? 'is--active' : ''}`, click: () => {
      this.goTo(index);
    }}, [(index + 1).toString()]);
  }
};

export default Pagination;
