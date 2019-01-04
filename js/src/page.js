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

  async syncPageData() {
    this.data = await axios.get(`https://validator.nu/?doc=${this.url}&out=json`);

    return this.data;
  }

  renderInfo(messages) {
    let warnings = 0;
    let errors = 0;

    messages.forEach((message) => {
      if (message.type === 'error') {
          errors += 1;
      }

      if (message.type === 'info') {
          errors += 1;
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

  renderResultItem (item) {

    return h('div', {class: `result-item ${item.type}`, click: function(){
      clipboard.writeText(item.extract, 'selection');
      new Notification('Copied to clipboard',{
        body: 'The message was copied succesful'
      });
    }},[
      h('p', {class: 'info'}, [
        h('strong', null, [`${item.type}: `]),
        item.message
      ]),
      h('p', {class: 'location'}, [`Found in line ${item.lastLine} and column ${item.firstColumn}`]),
      h('p', {class: 'extract'}, [item.extract])
    ]);
  }

  renderListItem () {
    const that = this;

    const template = h('li', {class: 'list-group-item'}, [
      h('div', {class: 'action-bar'},[
        h('div', {class: 'js--close', click: () => {
          template.parentElement.removeChild(template);
          removePage(that)

          if (that === getActivePage()) {
            clearChilds(container);
          }

        }}, [
          h('span', {class: 'icon icon-cancel'})
        ])
      ]),
      h('p', {class: 'padded'}, [
        h('strong', {class: 'url', click: function(){
          clearChilds(container);
          that.renderData();
        }}, [this.url])
      ])
    ]);

    return template;
  }

}
