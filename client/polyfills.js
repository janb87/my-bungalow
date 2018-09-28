/* eslint no-extend-native: 0 */
// core-js comes with Next.js. So, you can import it like below
import includes from 'core-js/library/fn/string/virtual/includes';
import repeat from 'core-js/library/fn/string/virtual/repeat';
import find from 'core-js/library/fn/array/virtual/find';
import assign from 'core-js/library/fn/object/assign';

// Add your polyfills
String.prototype.includes = String.prototype.includes || includes;
String.prototype.repeat = String.prototype.repeat || repeat;
Array.prototype.find = Array.prototype.find || find;
Object.assign = Object.assign || assign;
