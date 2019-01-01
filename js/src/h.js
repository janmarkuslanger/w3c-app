/**
 * Iterates an Objects properties executing a callback function on each item. This allows
 * for iterative breaking at anytime by returning false
 * @private
 * @param  {Object}   obj The Object to iterate over
 * @param  {Function} fn  The callback function to execute on each property
 *
 * iterate({ hello: 'world', name: 'kieran' }, (key, value, index) => console.log(key, value, index));
 *
 */
const iterate = (obj, fn) => {
  let count = 0;

  for (let key in obj) {
    const result = fn.call(obj[key], key, obj[key], count++);

    if (!result) {
      break;
    }
  }
};

/**
 * creates an html element
 * @param {String} tag
 * @param {Object | null} props
 * @param {Array} childs
 */
export const h = (tag = 'div', props = null, childs = []) => {

  // create an element
  const element = document.createElement(tag);

  // set all props on that element
  if (props) {
    iterate(props, function(key, value) {
      typeof value === 'function'
      ? element.addEventListener(key, function(e){
        value(element, e);
      })
      : element.setAttribute(key, value);
    });
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
