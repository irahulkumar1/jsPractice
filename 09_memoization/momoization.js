/* memoization is a technique of optimazation that can reduse time-consuming calculation by saving previous input to chache and return the result from it */

let sum = 0;

const calc = (n) => {
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
};

const memoizationFun = (func) => {
  let cache = {};
  return function (...arg) {
    let n = arg[0];
    if (n in cache) {
      console.log("cache");
      return cache[n];
    } else {
      console.log("calculating first time");
      let result = func(n);
      cache[n] = result;
      return result;
    }
  };
};

// console.time();
// console.log(calc(5));
// console.timeEnd();
console.time();
const efficient = memoizationFun(calc);
console.log(efficient(5));
console.timeEnd();

console.time();

console.log(efficient(5));
console.timeEnd();
