import { h } from './h';

export class Dialog {

  constructor(content, cssClass) {
    this.content = content;
    this.cssClass = cssClass;
    this.template = this.renderTemplate();
  }

  renderTemplate() {
    const that = this;

    this.port = h('div', {class: `content ${this.cssClass}`});

    return h('div', {class: 'js--dialog'}, [
      h('div', {class: 'shadow'}),
      h('div', {class: 'inner'}, [
        h('div', {class: 'close', click: function(){
          that.destroy();
        }}, [h('span', {class: 'icon icon-cancel'})]),
        this.port
      ])
    ]);
  }

  destroy() {
    this.template.parentElement.removeChild(this.template);
  }

  render(root) {
    const that = this;

    if (Array.isArray(this.content)) {
      this.content.forEach(function(item){
        that.port.appendChild(item)
      });
    } else {
      this.port.appendChild(this.content);
    }

    root.appendChild(this.template);
  }

};
