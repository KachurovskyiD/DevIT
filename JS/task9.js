'use strict';

// Создать функцию которая нормализует данные в массиве исключая или преобразуя не подходящие.

let testData = [1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false];

function array_normalize(array, expr) {
  let newArr = [];
  array.forEach(element => {
    if (typeof element === expr) {
      newArr.push(element);
    }
  });
  return newArr;
}

let result = array_normalize(testData, 'number');
console.log(result);