'use strict';

// Создать массив week и записать в него дни недели в виде строк
// ·Вывести на экран все дни недели
// ·Каждый из них с новой строчки
// ·Выходные дни - курсивом
// ·Текущий день - жирным шрифтом(использовать объект даты)

let weekDays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

let today = new Date().getDay();

for (let i = 0; i < weekDays.length; i++) {
  if (i === today){
    document.write( '<b>' +  weekDays[i] + '</b>' + '<br />' );
  }else if (i === 5 || i === 6){
    document.write( '<i>' +  weekDays[i] + '</i>' + '<br />' );
  }else{
    document.write( weekDays[i] + '<br />' );
  }
}
