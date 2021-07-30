"use strict";

// 1) Создать переменную num со значением 266219 (тип данных число)
let num = 266219;

// 2) Вывести в консоль произведение (умножение) цифр этого числа 
let digitsOfNum = String(num).split("").map((num)=>{ 
    return Number(num);
  });

let result = digitsOfNum.reduce((product, current) => product * current);
console.log(result);

// 3) Полученный результат возвести в степень 3, используя только 1 оператор
result **= 3;

// 4) Вывести в консоль первые 2 цифры полученного числа
console.log(String(result).slice(0, 2));
