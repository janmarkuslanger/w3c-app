import { h } from 'create-element-lib';

class Dialog {
  constructor(title, buttonText, callbacks = {}) {

    if (!title || !buttonText) {
      console.error('Cannot create Dialog');
      return;
    }

    this.title = title;
    this.buttonText = buttonText;
    this.callbacks = callbacks;
    this.template = null;
    this.render();
  }

  createTemplate() {
    this.template = h('div', {class: 'js--dialog'}, [
      h('div', {class: 'shadow'}),
      h('div', {class: 'inner'}, [
        h('div', {class: 'close', click: () => {
          this.destroy();
        }}, [ h('span', {class: 'icon icon-cancel'}) ]),
        h('div', {class: 'form padded-more'}, [
          h('div', {class: 'form-group'}, [
            h('input', {type: 'text', class: 'form-control', placeholder: this.title})
          ]),
          h('div', {class: 'form-group'}, [
            h('button', {class: 'btn btn-positive', click: (el) => {
              const value = el.parentElement.previousElementSibling.firstChild.value;
              if (this.callbacks.onSubmit) {
                this.callbacks.onSubmit(value);
              }
            }}, [this.buttonText]),
            h('button', {class: 'btn btn-negative', click: () => {
              this.destroy();
            }}, ['Cancel'])
          ])
        ])
      ])
    ]);

    return this.template;
  }

  render() {
    if (this.template) {
      return;
    }

    const template = this.createTemplate();
    document.querySelector('body').appendChild(template);
  }

  destroy() {
    if (!this.template) {
      return;
    }

    this.template.parentElement.removeChild(this.template);
  }

};

export default Dialog;
