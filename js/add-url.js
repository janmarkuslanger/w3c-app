const { dialog } = require('electron').remote
/**
 * icon
 * @type {HTML Element}
 */
const icon = document.querySelector('header .icon-window');

const listGroup = document.querySelector('.list-group');

const renderDialog = () => {
  const inputField = h('input', {type: 'text'});
  const dialog = h('div', {class: 'dialog'}, [
    inputField,
    h('button', {class: 'btn btn-positive', click: function(){
      const value = inputField.value;

      if (value === '') {
        dialog.parentElement.removeChild(dialog);
      }

      const myNotification = new Notification('New Page', {
        body: 'A new page was added to the W3C Validation'
      });

      const page = new Page(value);
      const item = page.renderListItem();
      listGroup.appendChild(item);
    }}, ['Add URL']),
    h('button', {class: 'btn btn-negative'}, ['Cancel'])
  ]);

  return dialog;
};

icon.addEventListener('click', () => {
  document.querySelector('.window').appendChild(renderDialog());
});
