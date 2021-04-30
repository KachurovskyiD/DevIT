'use strict';

// Напишите функцию cloneDeep таким образом, чтобы она была способна клонировать переданный как параметр объект.

function cloneDeep(mainObj) {
  let copyObj = {};
  let key;

  for (key in mainObj) {
    copyObj[key] = mainObj[key];
  }

  return copyObj;
}