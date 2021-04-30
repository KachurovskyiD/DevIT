'use strict';

// Свертка. Используйте метод reduce в комбинации с concat для свёртки массива массивов в один массив, у которого есть все элементы входных массивов.

let arrays = [
  [1, 2, 3],
  [4, 5],
  [6]
];

let newArr = arrays.reduce((accumulator, current) => accumulator.concat(current));
console.log(newArr);