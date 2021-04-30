'use strict';

// Сделать функцию которая обрезает массив до указанного значения.

let testData = [1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false];

function array_skip_until(arr, compair) {
  let res = [];
  arr.forEach((element, i) => {
    if (element === compair) {
      res = arr.slice(i);
    }
  });
  return res;
}

let result = array_skip_until(testData, 2)

console.log(result);