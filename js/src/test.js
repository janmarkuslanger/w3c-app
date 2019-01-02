import { Page } from './page';
import { Sitemap } from './sitemap';
import { listGroup } from './dom-constants';

(function(){
  return;
  const url = 'https://www.neuland-agentur.com/start.html';
  const page = new Page(url);
  const item = page.renderListItem();
  listGroup.appendChild(item);
  page.renderData();
}());

(async function(){

  const test = new Sitemap('https://www.neuland-agentur.com/share/sitemap-neuland-de.xml');
  const data = await test.extractUrls();
  console.log(data)
  if (data) {
    console.log(data.data)
  }

}());
