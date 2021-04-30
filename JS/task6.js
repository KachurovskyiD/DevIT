'use strict';

// Написать функцию для выполнения параллельных вычислений без использования Promise.

var a = function (one, two) {
  return one + two
}
var b = function () {
  return false;
}

function paralell() {
  setTimeout(function () {
    console.log(a(1, 2));
  });
  setTimeout(function () {
    console.log(b());
  });
}

paralell();