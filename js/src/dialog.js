import { h } from './dialog';

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
  if (typeof this.content === 'Array') {
    this.content.forEach(function(item){
      this.port.appendChild(item)
    });
  } else {
    this.port.appendChild(this.content);
  }

  root.appendChild(this.template);
};
