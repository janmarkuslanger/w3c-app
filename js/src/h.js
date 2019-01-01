/**
 * creates an html element
 * @param {String} tag
 * @param {Object | null} props
 * @param {Array} childs
 */
export const h = (tag = 'div', props = null, childs = []) => {
  // create an element
  const element = document.createElement(tag);

  for (let key in props) {
    const value = props[key];
    if (typeof value === 'function') {
      element.addEventListener(key, function(e){
        value(element, e);
      });
    } else {
      element.setAttribute(key, value);
    }
  }

  if (childs.length > 0) {

    for (let i = 0; i < childs.length; i++) {

      if (childs[i] === null) {
        continue;
      }

      typeof childs[i] === 'string'
        ? element.appendChild(document.createTextNode(childs[i]))
        : element.appendChild(childs[i]);
    }

  }

  return element;
};
