import Dialog from './components/dialog';
import Page from './components/page';
import Sitemap from './components/sitemap';
import Pagination from './components/pagination';

// pagination
const pagination = new Pagination([], {
  onIndexChange(index) {
    console.log(index);
  }
});

// add event listener
document.querySelector('.js--action-url')
  .addEventListener('click', () => {
    const dialog = new Dialog('Enter a URL', 'Submit URL', {
      onSubmit(val,  input) {
        let newPage;
        try {
          newPage = new Page(val, {
            onRemove(_this) {
              pagination.remove(_this);
            }
          });
          pagination.add(newPage);
          dialog.destroy();
        } catch (e) {
          // there was an error while adding a page
          input.value = ''; // reset input field
        }
      }
    });
  });

document.querySelector('.js--action-sitemap')
  .addEventListener('click', () => {
    const dialog = new Dialog('Enter an url of a sitemap', 'Submit Sitemap', {
      async onSubmit(val,  input) {
        let newSitemap;
        try {
          newSitemap = new Sitemap(val, {
            onAddPage(page) {
              console.log(page);
              pagination.add(page);
            }
          });
          await newSitemap.render();
          dialog.destroy();
        } catch (e) {
          console.log(e);
          // there was an error while adding a page
          input.value = ''; // reset input field
        }
      }
    });
  });

// search
document.querySelector('.pane-sm .form-control').addEventListener('keyup', () => {
  const value = document.querySelector('.pane-sm .form-control').value;
  const items = [].slice.call(document.querySelectorAll('.list-group-item'));

  if (value !== '') {
    items.forEach((item) => {
      const itemValue = item.querySelector('strong').textContent;
      item.style.display = itemValue.includes(value)
        ? 'block'
        : 'none';
    });
  } else {
    items.forEach((item) => { item.style.display = 'block'; })
  }
});
