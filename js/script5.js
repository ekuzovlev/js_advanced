'use strict';

// Создать массив arr = []
// — Записать в него 7 любых многозначных чисел в виде строк
// — Вывести в консоль только те, что начинаются с цифры 2 или 4 (Должны присутствовать в массиве)

let arr = [];

function getShuffleArray(array, n) {
  for (let i = 0; i < n; i++) {
      const j = Math.floor(Math.random() * (100 - 10) + 10);
      array.push('' + j);
  }
  return array;
}

function filterArray(array, n1, n2) {
  let result = '';
  array.forEach(element => {
    if (element.startsWith(n1) || element.startsWith(n2)) {
      result += element + ', ';
    }
  });
  return result.slice(0, -2);
}

let arr2 = getShuffleArray(arr, 7);

console.log('Массив:', arr2);
console.log(filterArray(arr2, 2, 4));

// Вывести в столбик все простые числа от 1 до 100 (сделать при помощи цикла)
// — Статья про простые числа - КЛИК
// — Рядом с каждым числом написать оба делителя данного числа
//   Например: “Делители этого числа: 1 и n”

let n = 100;

nextPrime:
for (let i = 2; i <= n; i++) { // Для всех i...

  for (let j = 2; j < i; j++) { // проверить, делится ли число..
    if (i % j === 0) continue nextPrime; // не подходит, берём следующее
  }

  console.log(`Простое число: ${i}. Делители этого числа: 1 и ${i}`); // простое число
}
