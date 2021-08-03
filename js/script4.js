'use strict';

// Создайте функцию, которая принимает 1 аргумент (название произвольное)
// — Если в качестве аргумента передана не строка - функция оповещает об этом пользователя
// — В полученной (как аргумент) строке функция должна убрать все пробелы в начале и в конце
// — Если строка более 30 знаков - то после 30го символа часть текста скрывается и вместо них
// появляются три точки (...)

function normalizeString(str){
  if (typeof(str) !== 'string') {
   return `Это не строка, это: ${typeof(str)}`;
  }

  str = str.trim();

  if (str.length > 30) {
    return str.slice(0, 30).padEnd(33, '...');
  } else {
    return str;
  }
}

console.log(normalizeString('1234567890'.repeat(10)));
console.log(normalizeString('1234567890'.repeat(2)));
console.log(normalizeString(1234567890));
