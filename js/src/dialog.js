import { h } from './h';

export function Dialog(content, cssClass) {
  this.content = content;
  this.cssClass = cssClass;
  this.template = this.renderTemplate();
};

Dialog.prototype.renderTemplate = function () {
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
};

Dialog.prototype.destroy = function () {
  this.template.parentElement.removeChild(this.template);
};

Dialog.prototype.render = function (root) {
const that = this;

  if (Array.isArray(this.content)) {
    this.content.forEach(function(item){
      that.port.appendChild(item)
    });
  } else {
    console.log(this.content);
    this.port.appendChild(this.content);
  }

  root.appendChild(this.template);
};
