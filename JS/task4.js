'use strict';

// Расширить прототип Array, добавив к нему метод добавления элемента в начало без использование unshift.

Array.prototype.append = function (param) {
  return [].concat(param, this);
}

let arr = [1, 2, 3];

console.log(arr.append(0));