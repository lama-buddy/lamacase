"use strict";

const camelCase = require('camelcase');

// module.exports = {
//   convert: function(inputString) {
//     return camelCase(inputString);
//   }
// }

exports.convert = function(inputString) {
  return camelCase(inputString);
}
