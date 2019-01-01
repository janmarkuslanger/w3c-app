(function(){
  /**
   * header html element
   * @type {HTML element}
   */
  const header = document.querySelector('header');

  /**
   * online class
   * @type {String}
   */
  const onlineClass = 'btn-positive';

  /**
   * online text
   * @type {String}
   */
  const onlineText = 'Online';

  /**
   * offline class
   * @type {String}
   */
  const offlineClass = 'btn-negative';

  /**
   * offline text
   * @type {String}
   */
  const offlineText = 'Offline';


  /**
   * online button
   * @type {HTML Element}
   */
  const button = header.querySelector('.js--online');

  window.addEventListener('online', () => {
    button.textContent = onlineText;
    button.classList.add(onlineClass);
    button.classList.remove(offlineClass);
  });

  window.addEventListener('offline', () => {
    button.textContent = offlineText;
    button.classList.add(offlineClass);
    button.classList.remove(onlineClass);
  });

}());
