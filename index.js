'use strict';

module.exports = function getPathOption(options) {
  if (options === null || typeof options !== 'object') {
    throw new TypeError('getPathOptions first argument must be an object');
  }

  let outputPath = 'components';
  if (options.path || options.path === '') {
    outputPath = options.path;
  }
  return outputPath;
};
