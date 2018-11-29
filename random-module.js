module.exports = {
  // returns a random number with range
  num(max) {
    return Math.floor(Math.random()*max);
  },
  // returns a random element of array
  el(arr) {
    return arr[module.exports.num(arr.length)];
  },
  // returns a random key of an object
  key(obj) {
    let arrKeys = Object.keys(obj);
    return arrKeys[module.exports.num(arrKeys.length)];
  }
}
