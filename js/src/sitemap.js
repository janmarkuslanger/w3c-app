const axios = require('axios');
import { init as UiPreloaderInit } from 'ui-preloader';

export class Sitemap {
  constructor(url) {
    this.url = url;
  }

  async extractUrls() {
    const loader = UiPreloaderInit();
    loader.render();
    const response = await axios.get(this.url);
    loader.destroy()
    if (response.status !== 200) {
      return false;
    }

    const data = response.data;

    const urls = data.match(/<loc>(.*?)<\/loc>/g).map(function(link){
      return link.replace(/<\/?loc>/g,'');
    });

    return urls;
  }

}
