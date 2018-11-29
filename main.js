const math = require('./math-module.js');
const str = require('./strings-module.js');
const random = require('./random-module.js');

const sumMath = math.sum(3,7);
const multMath = math.mult(2,3);
const divMath = math.div(6,3);
const sqMath = math.sq(3,2);

// console.log(sumMath, multMath, divMath, sqMath);
// console.log(str.fl("Rinat"), str.strSp("splitme"));

//random module test:

let obj = {
  a:"6",
  b:"4",
  c:"2",
  d:"8"
}

let arr = "erogiarjeg".split("");
console.log(random.key(obj),"here");
console.log(random.el(arr),"there");
console.log(random.num(4));
