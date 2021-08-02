"use strict";

// Переменная lang может принимать 2 значения: 'ru' 'en'.
// Написать условия при котором в зависимости от значения lang будут выводится дни недели на русском или английском языке. Решите задачу
// через if,
let lang = 'ru';

let weekdaysRu = ['Пн', 'Вт', 'Ср', 'Чт','Пт', 'Сб','Вc'];

let weekdaysEn = ['Su', 'Mo', 'Tu', 'We','Th', 'Fr','Sa'];

if (lang === 'ru') {
  console.log(weekdaysRu);
} else {
  console.log(weekdaysEn);
}

// через switch-case
switch (lang) {
  case 'ru':
    console.log(weekdaysRu);
    break;
  default:
    console.log(weekdaysEn);
}
// через многомерный массив без ифов и switch.
let weekdaysResult = {
  ru: weekdaysRu,
  en: weekdaysEn
};

console.log(weekdaysResult[lang]);

// У нас есть переменная namePerson. Если значение этой переменной “Артем”
// то вывести в консоль “директор”, если значение “Максим” то вывести в консоль “преподаватель”,
// с любым другим значением вывести в консоль “студент”
// Решить задачу с помощью нескольких тернарных операторов, без использования if или switch
let namePerson = 'Женя';

let message = (namePerson === 'Артем') ? 'директор' :
  (namePerson === 'Максим') ? 'преподаватель' :
  'студент';

console.log(message);
