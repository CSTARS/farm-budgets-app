'use strict';

module.exports = function(units) {
  if( units === undefined ) {
    return '1';
  }
  return units.replace(/(us)?\$/g, '1');
};
