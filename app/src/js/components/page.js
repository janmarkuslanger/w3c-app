import { h } from 'create-element-lib';
const axios = require('axios');

class Page {
  constructor(url) {
    this.url = url;
    this.messages = [];
    this.renderListItem();
  }

  async fetchData() {
    return await axios.get(`https://validator.nu/?doc=${this.url}&out=json`);
  }

  createListItem() {
    return h('li', {class: 'list-group-item'}, [
      h('div', {class: 'action-bar'}, [
        h('div', {class: 'js--close'}, [
          h('span', {class: 'icon icon-cancel'})
        ])
      ]),
      h('p', {class: 'padded'}, [
        h('strong', {class: 'url'}, [
          this.url
        ])
      ])
    ]);
  }

  renderListItem() {
    document.querySelector('.list-group').appendChild(this.createListItem());
  }

  createMessageItem(item) {
    return h('div', {class: `result-item ${item.type}`}, [
      h('p', {class: 'info'}, [
        h('strong', null, [`${item.type}: `]),
        item.message
      ]),
      h('p', {class: 'location'}, [`Found in line ${item.lastLine} and column ${item.firstColumn}`]),
      h('p', {class: 'extract'}, [item.extract])
    ]);
  }

  renderMessageItem(item) {
    document.querySelector('.js--result').appendChild(this.createMessageItem(item));
  }

};

export default Page;
