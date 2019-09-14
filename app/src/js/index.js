import Dialog from './components/dialog';

// add event listener
document.querySelector('.js--action-url')
  .addEventListener('click', () => {
    new Dialog('Enter a URL', 'Submit URL', {
      onSubmit(val) {
        console.log(val);
      }
    });
  });
