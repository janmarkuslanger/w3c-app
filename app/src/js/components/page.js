import { h } from 'create-element-lib';
import isUrl from '../utils/is-url';
import removeElements from '../utils/remove-elements';
import { init as UiPreloaderInit } from 'ui-preloader';
const axios = require('axios');

class Page {
  constructor(url, callbacks = {}) {
    if (!isUrl(url)) {
      const noUrl = new Notification('No valid URL', {
        body: 'Please enter a valid URL with http or https'
      });
      noUrl.onshow = () => {
        throw new Error('Cannot create Page');
      }
      return;
    }

    this.url = url;
    this.callbacks = callbacks;
    this.data = null;
    this.messages = [];
    this.listItemTemplate = null;
  }

  async fetchData() {
    this.data = await axios.get(`https://validator.nu/?doc=${this.url}&out=json`);
    this.messages = this.data.data.messages;
    return this.data;
  }

  createListItem() {
    this.listItemTemplate = h('li', {class: 'list-group-item'}, [
      h('div', {class: 'action-bar'}, [
        h('div', {class: 'js--close', click: () => {
          this.remove();
        }}, [
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

    return this.listItemTemplate;
  }

  async renderResults() {
    removeElements(document.querySelector('.js--result'));
    const loader = UiPreloaderInit();
    loader.render();
    try {
      await this.fetchData();
      this.renderHeaderItem();
      this.messages.forEach((message) => {
        this.renderMessageItem(message);
      });
    } catch (e) {
      new Notification('Unexpected error', {
        body: 'An error occured while fetching the data via api'
      });
    }

    loader.destroy();
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

  remove() {
    clearResults();

    if (this.listItemTemplate) {
      this.listItemTemplate.parentElement.removeChild(this.listItemTemplate);
    }

    if (this.callbacks.onRemove) {
      this.callbacks.onRemove(this);
    }

  }

};

export default Page;
