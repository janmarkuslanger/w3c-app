import { h } from './h';
import { Sitemap } from './sitemap';
import { Page } from './page';
import { Dialog } from './dialog';
import { listGroup } from './dom-constants';


(function(){
  /**
   * icon
   * @type {HTML Element}
   */
  const icon = document.querySelector('header .js--action-sitemap');

  icon.addEventListener('click', () => {
    const inputField = h('input', {type: 'text', class: 'form-control', placeholder: 'Enter a Sitemap'});
    const content = [
      h('div', {class: 'form padded-more'},[
        h('div', {class: 'form-group'}, [
          inputField,
        ]),
        h('div', {class: 'form-group'}, [
          h('button', {class: 'btn btn-positive', click: async function(){
            const value = inputField.value;

            if (value === '') {
              dialog.parentElement.removeChild(dialog);
            }

            const _sitemap = new Sitemap(value);
            const urls = await _sitemap.extractUrls();

            urls.forEach((url) => {
              const page = new Page(url);
              const item = page.renderListItem();
              listGroup.appendChild(item);
            });

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
