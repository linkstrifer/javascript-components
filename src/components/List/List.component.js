import { renderTemplate, prerender } from '../../vendors/renderTemplate';

const ListComponent = (target) => {
  const instances = [];

  const render = (node) => {
    try {
      const parentNode = node.parentNode;
      const data = node.getAttribute('data-list').split(',');
      const listItems = data.map(item => prerender('<li>{{item}}</li>', { item })).join('');
      const list = renderTemplate('<ul>{{listItems}}</ul>', { listItems });
  
      parentNode.replaceChild(list, node);
      instances.push(list);
    } catch (error) {
      console.error('ListComponent error', error);
    }
  }

  const init = () => {
    const nodes = target.querySelectorAll('ListComponent');

    [...nodes].forEach(node => render(node));
  }

  return init(target);
}

export default {
  init: ListComponent
};
