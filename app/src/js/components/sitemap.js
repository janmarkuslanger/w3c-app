import Page from './page';

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

  }
}
