'use strict';

// 1) Выведите на страницу текущую дату и время в 2-х форматах:
// a) 'Сегодня Вторник, 4 февраля 2020 года, 21 час 5 минут 33 секунды'
function incline (quantity, one, two, five) {
  if ((quantity % 100) >= 11 && (quantity % 100) <= 14) {
    return five;
  }

  if ((quantity % 10) === 1) {
    return one;
  } else if ((quantity % 10) >= 2 && (quantity % 10) <= 4) {
    return two;
  } else {
    return five;
  }
}

let date = new Date();

let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

let dateItems = date.toLocaleDateString('ru-RU', options).split(', ');
// ["понедельник", " 9 августа 2021 г."]

// Получаем день недели с большой буквы
let normalizeWeekday = function(dateItems){
  let weekday = dateItems[0];
  return weekday.replace(weekday.charAt(0), weekday.charAt(0).toUpperCase());
};

// Получаем день и год
let normalizeYear = function(dateItems){
  let year = dateItems[1];
  return year.replace('г.', 'года');
};

let normalizeHours = function(date) {
  let hour = date.getHours();
  return `${hour} ${incline(hour, 'час', 'часа', 'часов')}`;
};

let normalizeMinutes = function(date) {
  let minutes = date.getMinutes();
  return `${minutes} ${incline(minutes, 'минута', 'минуты', 'минут')}`;
};

let normalizeSeconds = function(date) {
  let seconds = date.getSeconds();
  return `${seconds} ${incline(seconds, 'секунда', 'секунды', 'секунд')}`;
};

let str = `Cегодня ${normalizeWeekday(dateItems)}, ${normalizeYear(dateItems)}, ${normalizeHours(date)}, ${normalizeMinutes(date)}, ${normalizeSeconds(date)}`;
console.log('str :>> ', str);

//  б) '04.02.2020 - 21:05:33'
console.log(`${date.toLocaleDateString('ru-RU')} - ${date.toLocaleTimeString('ru-RU')}`);

// 2) Для вывода в формате (а) напишите функцию, которая будет менять склонение слов в зависимости от числа,
// "час, часов, часа"

// 3) Для вывода в формате (б) напишите функцию, которая будет добавлять 0 перед значениями которые состоят
// из одной цифры (из 9:5:3  1.6.2019 сделает 09:05:03 01.06.2019)

// 4) С помощью функции setInterval, реализуйте обновление даты и времени каждую секунду

let showTime = function() {

};

// повторить с интервалом 2 секунды
let timerId = setInterval(() => console.log(showTime()), 2000);

// остановить вывод через 5 секунд
setTimeout(() => { clearInterval(timerId); console.log('stop'); }, 25000);
