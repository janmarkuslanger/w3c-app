const { shell } = require('electron');

(function(){

  // get all links with target blank
  const links = [].slice.call(document.querySelectorAll('a[target="_blank"]'));

  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      // stop the event 
      e.preventDefault();
      // get the href for the link
      const href = link.getAttribute('href');
      // open in external browser
      shell.openExternal(href);
    });
  });
}());
