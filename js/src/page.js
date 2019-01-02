import { h } from './h';
import { clearChilds } from './helper';

const axios = require('axios');

const container = document.querySelector('.js--result');

export class Page {

  constructor(url) {
    this.url = url;
  }

  async syncPageData() {
    this.data = await axios.get(`https://validator.nu/?doc=${this.url}&out=json`);

    return this.data;
  }

  async renderData() {
    await this.syncPageData();
    const that = this;
    const messages = this.data.data.messages;

    if (messages.length > 0) {
      messages.forEach((message) => {
        const item = that.renderResultItem(message);
        container.appendChild(item);
      });
    } else {
      container.appendChild(h('h1', {class: 'no-error'}, ['There are no errors. :)']))
    }


  }

  renderResultItem (item) {
    return h('div', {class: 'result-item'},[
      h('p', {class: 'info'}, [
        h('strong', null, [`${item.type}: `]),
        item.message
      ]),
      h('p', {class: 'extract'}, [item.extract])
    ]);
  }

  renderListItem () {
    const that = this;

    const template = h('li', {class: 'list-group-item', click: function(){
      clearChilds(container);
      that.renderData();
    }}, [
      h('div', {class: 'action-bar'},[
        h('div', {class: 'js--close'}, [
          h('span', {class: 'icon icon-cancel'})
        ])
      ]),
      h('p', {class: 'padded'}, [
        h('strong', null, [this.url])
      ])
    ]);

    return template;
  }

}
