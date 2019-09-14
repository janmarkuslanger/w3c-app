import { h } from 'create-element-lib';
const axios = require('axios');

class Page {
  constructor(url) {
    this.url = url;
  }

  async fetchData() {
    return await axios.get(`https://validator.nu/?doc=${this.url}&out=json`);
  }
};

export default Page;
