import Dialog from './components/dialog';
import Page from './components/page';


// add event listener
document.querySelector('.js--action-url')
  .addEventListener('click', () => {
    new Dialog('Enter a URL', 'Submit URL', {
      onSubmit(val) {
        const newPage = new Page(val);
      }
    });
  });
