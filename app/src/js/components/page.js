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

};

export default Page;
