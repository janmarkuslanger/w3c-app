import Dialog from './components/dialog';
import Page from './components/page';
import Sitemap from './components/sitemap';


// add event listener
document.querySelector('.js--action-url')
  .addEventListener('click', () => {
    const dialog = new Dialog('Enter a URL', 'Submit URL', {
      onSubmit(val,  input) {
        let newPage;
        try {
          newPage = new Page(val);
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
            newSitemap = new Sitemap(val);
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
