/**
 * @method fromTemplate
 * @description
 * Converts an HTML element string to a DOM object
 *
 * @param {String} templateString String representation of a DOM element (e.g. '<div>content</div>')
 *
 * @returns {Node}
 */
export function fromTemplate(templateString){
  var el = document.createElement('div');
  el.innerHTML = templateString;
  return el.firstChild;
 }
 /**
  * @method prerender
  * @description
  * Mixes a template String with the given data and returns the resulting String
  * The template String has the required markup and the dynamic elements are represented in the way of {{element}}
  * @param {String} template The String representation of a DOM element
  * @param {Object} data An Object containing the data to fill the template
  * @return {String} An String representation of a DOM element with the data passed replacing the correspondant variables
  */
 export function prerender(template, data) {
  return Object.keys(data).reduce(function(prev, item) {
  var regex = new RegExp('{{' + item + '}}', 'g');
  prev = prev.replace(regex, data[item] || '');
  return prev;
  }, template.trim());
 }
 /**
  * @method renderTemplate
  * @description
  * Combines prerender and fromTemplate functions to return a new HTML node with the provided data
  * @param {String} templateString A String representation of an HTML node with optional variable names
  * @param {Object} data An Object with the variables that will be replaced in the templateString
  * @return {HTMLNode} The rendered template as an HTML node.
  */
 export function renderTemplate(templateString, data) {
  return fromTemplate(prerender(templateString, data));
 }