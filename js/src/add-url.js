import { h } from './h';
import { Dialog } from './dialog';
import { Page } from './page';
import { listGroup } from './dom-constants';

(function(){
  /**
   * icon
   * @type {HTML Element}
   */
  const icon = document.querySelector('header .js--action-url');

  icon.addEventListener('click', () => {
    const inputField = h('input', {type: 'text', class: 'form-control', placeholder: 'Enter a URL'});
    const content = [
      h('div', {class: 'form padded-more'},[
        h('div', {class: 'form-group'}, [
          inputField,
        ]),
        h('div', {class: 'form-group'}, [
          h('button', {class: 'btn btn-positive', click: function(){
            const value = inputField.value;

            if (value === '') {
              dialog.parentElement.removeChild(dialog);
              return;
            }

            if (!value.startsWith('http')) {
              alert('Please add a protocol to your url');
              return;
            }

            const page = new Page(value);
            const item = page.renderListItem();
            listGroup.appendChild(item);

            urlDialog.destroy();
          }}, ['Add URL']),
          h('button', {class: 'btn btn-negative', click: function(){
            urlDialog.destroy();
          }}, ['Cancel'])
        ])
      ])
    ];

    const urlDialog = new Dialog(content);
    urlDialog.render(document.body);
  });

}());
