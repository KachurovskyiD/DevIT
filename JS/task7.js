'use strict';

// Сделать функцию поиска значений в массиве.

let testData = [1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false];

function array_find(arr, compair) {
  let res = [];
  arr.forEach((element, i) => {
    if (element === compair) {
      res = arr.slice(i, i + 1);
    }
  });
  return res;
}

let result = array_find(testData, "Rafshan");

console.log(result);