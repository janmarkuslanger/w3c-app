import { h } from './h';
import { clearChilds } from './helper';
import { addPage,removePage,getActive as getActivePage,setActive as setActivePage } from './state';
const { clipboard } = require('electron');

const axios = require('axios');

const container = document.querySelector('.js--result');

export class Page {

  constructor(url) {
    this.url = url;
    addPage(this);
  }

  renderInfo(messages) {
    let warnings = 0;
    let errors = 0;

    messages.forEach((message) => {
      if (message.type === 'error') {
          errors += 1;
      }

      if (message.type === 'info') {
          warnings += 1;
      }
    });

    return h('div', {class: 'result-item'},[
      h('p', {class: 'info'}, [ `${errors.toString()} Errors | ${warnings.toString()} Warnings` ])
    ]);
  }

  async renderData() {
    setActivePage(this);
    await this.syncPageData();
    const that = this;
    const messages = this.data.data.messages;

    if (messages.length > 0) {
      container.appendChild(this.renderInfo(messages));
      messages.forEach((message) => {
        const item = that.renderResultItem(message);
        container.appendChild(item);
      });
    } else {
      container.appendChild(h('h1', {class: 'no-error'}, ['There are no errors. :)']))
    }

    new Notification('W3C-Check ready.', {
      body: `The W3C Check on page ${this.url} is ready.`
    });
  }


}
