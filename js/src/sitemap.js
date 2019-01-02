const axios = require('axios');

export class Sitemap {
  constructor(url) {
    this.url = url;
  }

  async extractUrls() {
    const response = await axios.get(this.url);

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
