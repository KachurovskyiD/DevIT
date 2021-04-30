'use strict';

// Выведите все элементы массива используя рекурсию.

let arr = ['Solnce', 'vishlo', 'iz', 'za', 'tuchi'];

function recurseLog(arr) {
  if (arr.length > 0) {
    console.log(arr.shift());
    recurseLog(arr);
  }
}

recurseLog(arr);