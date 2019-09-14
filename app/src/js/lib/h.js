const isString = s => typeof s === 'string';

const h = (tag, properties = {}, childs = []) => {
  if (!isString(tag)) {
    throw new Error('No valid tag given'); // tag must be a string
  }

  // create the html node
  const element = document.createElement(tag);

  // get they object keys
  const propKeys = Object.keys(properties);

  propKeys.forEach((prop) => {
    const value = properties[prop];

    typeof value === 'function'
      ? element.addEventListener('click', (e) => {
          value(element, e); // call the given function with the element and event as parameters
        })
      : element.setAttribute(prop, value);
  });

  childs.forEach((child) => {
    isString(child)
      ? element.appendChild(document.createTextNode(child))
      : (child ? element.appendChild(child) : null);
  });

  // return the composed element
  return element;
};

module.exports = h;
