import { h } from 'create-element-lib';
import isUrl from '../utils/is-url';
const axios = require('axios');

class Page {
  constructor(url) {
    if (!isUrl(url)) {
      const noUrl = new Notification('No valid URL', {
        body: 'Pleae enter a valid URL with http or https'
      });
      noUrl.onshow = () => {
        throw new Error('Cannot create Page');
      }
      return;
    }

    this.url = url;
    this.data = null;
    this.messages = [];
    this.renderListItem();
  }

  async fetchData() {
    this.data = await axios.get(`https://validator.nu/?doc=${this.url}&out=json`);
    this.messages = this.data.data.messages;
    return this.data;
  }

  createListItem() {
    return h('li', {class: 'list-group-item'}, [
      h('div', {class: 'action-bar'}, [
        h('div', {class: 'js--close'}, [
          h('span', {class: 'icon icon-cancel'})
        ])
      ]),
      h('p', {class: 'padded'}, [
        h('strong', {class: 'url', click: () => {
          this.renderResults();
        }}, [
          this.url
        ])
      ])
    ]);
  }

  async renderResults() {
    await this.fetchData();
    this.renderHeaderItem();
    this.messages.forEach((message) => {
      this.renderMessageItem(message);
    });
  }

  renderListItem() {
    document.querySelector('.list-group').appendChild(this.createListItem());
  }

  createMessageItem(item) {
    return h('div', {class: `result-item ${item.type}`}, [
      h('p', {class: 'info'}, [
        h('strong', {}, [`${item.type}: `]),
        item.message
      ]),
      h('p', {class: 'location'}, [`Found in line ${item.lastLine} and column ${item.firstColumn}`]),
      h('p', {class: 'extract'}, [item.extract])
    ]);
  }

  renderMessageItem(item) {
    document.querySelector('.js--result').appendChild(this.createMessageItem(item));
  }

  createHeaderItem() {
    return h('div', {class: 'padded'}, [
      h('h2', {class: 'title'}, [this.url])
    ]);
  }

  renderHeaderItem() {
    document.querySelector('.js--result').appendChild(this.createHeaderItem());
  }

};

export default Page;
