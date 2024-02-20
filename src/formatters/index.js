import plain from './plain.js';
import stylish from './stylish.js';

export default (diffTree, format) => {
  switch (format) {
    case 'stylish':
      return stylish(diffTree);
    case 'plain':
      return plain(diffTree);
    case 'json':
      return JSON.stringify(diffTree);
    default:
      throw new Error(`${format} do not supported!`);
  }
};
