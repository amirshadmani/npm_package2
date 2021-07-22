var colors = require('colors');
// import {colors} from 'colors';

function output() {
  return 'hello from package2'.red;
}

module.exports.output = output;