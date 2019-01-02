(function(){

  /**
   * input element
   * @type {HTML Element}
   */
  const input = document.querySelector('.pane-sm .form-control');

  input.addEventListener('keyup', () => {

    const value = input.value;

    const items = [].slice.call(document.querySelectorAll('.list-group-item'));

    if (value !== '') {
      items.forEach((item) => {
        const itemValue = item.querySelector('strong').textContent;
        if (itemValue.includes(value)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    } else {
      items.forEach((item) => { item.style.display = 'block'; })
    }

  });

}());
