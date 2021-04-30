'use strict';

// Сделать функцию которая возвращает уникальные элементы массива.

let testData = [1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false];
let testData2 = [1, 2, 1990, 85, 24, 5, 7, 8.1];

function array_unique(arr1, arr2) {
  let unique = [...new Set(arr1), ...new Set(arr2)];
  return unique;
}

let result = array_unique(testData.concat(testData2));
console.log(result);