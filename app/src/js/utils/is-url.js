/**
 * validate url
 * @param {String}
 * @return {Boolean}
 */
const isUrl = s => s.startsWith('http://') || s.startsWith('https://');

export default isUrl;
