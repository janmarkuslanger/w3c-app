export function Page(url) {
  this.url = url;
};

Page.prototype.renderListItem = function () {
  const template = h('li', {class: 'list-group-item'}, [
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
