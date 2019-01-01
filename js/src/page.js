import { h } from './h';
const axios = require('axios');

export function Page(url) {
  this.url = url;
};

const container = document.querySelector('.js--result');

const clearContainer = () => {
  while(container.firstChild) {
    container.removeChild(container.firstChild);
  }
};

Page.prototype.syncPageData = async function() {
  this.data = await axios.get(`https://validator.nu/?doc=${this.url}&out=json`);

  return this.data;
};

Page.prototype.renderData = async function() {
  await this.syncPageData();
  const that = this;
  const messages = this.data.data.messages;

  messages.forEach((message) => {
    const item = that.renderResultItem(message);
    container.appendChild(item);
  });
};

Page.prototype.renderResultItem = function (item) {
  return h('div', {class: 'result-item'},[
    h('p', {class: 'title'}, [
      h('strong', null, [`${item.type}: `]),
      item.message
    ]),
    h('p', {class: 'extract'}, [item.extract])
  ]);
};

Page.prototype.renderListItem = function () {

  const that = this;

  const template = h('li', {class: 'list-group-item', click: function(){
    clearContainer();
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
};
