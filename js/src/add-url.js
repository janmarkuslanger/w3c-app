import { h } from './h';
import { Dialog } from './dialog';

(function(){
  /**
   * icon
   * @type {HTML Element}
   */
  const icon = document.querySelector('header .icon-window');

  icon.addEventListener('click', () => {
    const inputField = h('input', {type: 'text'});
    const content = [
      inputField,
      h('button', {class: 'btn btn-positive', click: function(){
        const value = inputField.value;

        if (value === '') {
          dialog.parentElement.removeChild(dialog);
        }

        const page = new Page(value);
        const item = page.renderListItem();
        listGroup.appendChild(item);
      }}, ['Add URL']),
      h('button', {class: 'btn btn-negative'}, ['Cancel'])
    ];

    const urlDialog = new Dialog(content);
    urlDialog.render(document.body);
  });

}());
