import Dialog from './components/dialog';
import Page from './components/page';


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
