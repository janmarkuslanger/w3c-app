/**
 * icon
 * @type {HTML Element}
 */
const icon = document.querySelector('header .icon-window');

const listGroup = document.querySelector('.list-group');

icon.addEventListener('click', () => {

  // fetch data
  const page = new Page('https://www.neuland-agentur.com/start.html');
  const item = page.renderListItem();
  listGroup.appendChild(item);

});
