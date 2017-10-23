export default typeof global !== 'undefined' ? global : window;

export { default as Object } from './object';
export { default as String } from './string';
export { default as Array } from './array';
export { default as Math } from './math';
