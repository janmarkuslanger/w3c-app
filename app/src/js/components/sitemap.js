import Page from './page';
import isUrl from '../utils/is-url';
const axios = require('axios');
import { init as UiPreloaderInit } from 'ui-preloader';

class Sitemap {
  constructor(url) {
    if (!isUrl(url)) {
      const noUrl = new Notification('No valid URL', {
        body: 'Pleae enter a valid URL with http or https'
      });
      noUrl.onshow = () => {
        throw new Error('Cannot create Sitemap');
      }
      return;
    }

    this.url = url;
    this.urls = [];
  }

  async fetchUrls() {
    const response = await axios.get(this.url);
    this.urls = response.data
      .match(/<loc>(.*?)<\/loc>/g)
      .map((link) => link.replace(/<\/?loc>/g,''));
  }

  async render() {
    const loader = UiPreloaderInit();
    loader.render();
    try {
      await this.fetchUrls();
      this.urls.forEach((url) => {
        new Page(url);
      });
    } catch (e) { } 
    loader.destroy();
  }
}

export default Sitemap;
