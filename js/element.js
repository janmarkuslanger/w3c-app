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
var iterate = function iterateObject (obj, fn) {
    var count = 0;

    for (var key in obj) {
        var result = fn.call(obj[key], key, obj[key], count++);

        if (result === false) {
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
var h = function createElement(tag, props, childs) {
    // better implementations but in this case strong enough to handle defaults
    var _tag = tag || 'div';
    var _props = props || null;
    var _childs = childs || [];
    var i = 0;

    // create an element
    var element = document.createElement(_tag);

    // set all props on that element
    if (_props) {
        iterate(_props, function(key, value) {
            typeof value === 'function'
                ? element.addEventListener(key, function(e){
                  value(element, e);
                })
                : element.setAttribute(key, value);
        });
    }

    if (_childs.length > 0) {

        for(i = 0; i < _childs.length; i++) {

            if (_childs[i] === null) {
                continue;
            }

            typeof _childs[i] === 'string'
                ? element.appendChild(document.createTextNode(_childs[i]))
                : element.appendChild(_childs[i]);
        }

    }

    return element;
};
