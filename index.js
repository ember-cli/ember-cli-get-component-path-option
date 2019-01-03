'use strict';

module.exports = function getPathOption(options) {
  if (options === null || typeof options !== 'object') {
    throw new TypeError('getPathOptions first argument must be an object');
  }

  if (options.path || options.path === '') {
    return options.path;
  }

  return 'components';
};
