'use strict';

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

let getTime = function() {
  let date = new Date();
  return date;
};

let getDate = function(date){
  let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  return date.toLocaleDateString('ru-RU', options).split(', '); // ["понедельник", " 9 августа 2021 г."]
};

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

let normalizeHours = function(time) {
  let hour = time.getHours();
  return `${hour} ${incline(hour, 'час', 'часа', 'часов')}`;
};

let normalizeMinutes = function(time) {
  let minutes = time.getMinutes();
  return `${minutes} ${incline(minutes, 'минута', 'минуты', 'минут')}`;
};

let normalizeSeconds = function(time) {
  let seconds = time.getSeconds();
  return `${seconds} ${incline(seconds, 'секунда', 'секунды', 'секунд')}`;
};

let printLongTime = function(){
  return `Cегодня ${normalizeWeekday(getDate(getTime()))}, ${normalizeYear(getDate(getTime()))}, ${normalizeHours(getTime())}, ${normalizeMinutes(getTime())}, ${normalizeSeconds(getTime())}`;
};

let printShortTime = function(){
  return `${getTime().toLocaleDateString('ru-RU')} - ${getTime().toLocaleTimeString('ru-RU')}`;
};

let p1 = document.createElement('p');

let showTimeLong = function(element) {
  element.innerText = printLongTime();
  document.body.append(element);
};

let showTimeShort = function(element) {
  element.innerText = printShortTime();
  document.body.append(element);
};

setInterval(() => showTimeLong(p1), 1000);

let p2 = document.createElement('p');

setInterval(() => showTimeShort(p2), 1000);
