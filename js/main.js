"use strict";

/*функция проверки на введение числа */
let isNumber = function(n){

  return !isNaN(parseFloat(n)) && isFinite(n);
};

let max = 99,
    min = 1,
    num;

const getRandomInteger = function(min, max){

  let random = Math.random() * (max - min) + min;
  return Math.floor(random);
};

let randomInteger = getRandomInteger(min, max);
console.log('randomInteger: ', randomInteger);


const showMessege = function(){

  alert("Давай сыграем в игру");

};

showMessege();

let start = function(){

   do {

    num = prompt("Угадай число от 1 до 100");
    
    console.log('num: ', num);

  } while (!isNumber(num));
  num = Number(num);

};



const game = function(  ){

  for (let i = 0; i < 2; i++) {
    
    start();

    console.log(typeof num);
    switch (true) {
      case num < randomInteger:
        alert("Загаданное число больше");
        break;
      case num > randomInteger:
        alert("Загаданное число меньше");
        break;
      case num === randomInteger:
        alert("Поздравляю, Вы угадали!!!");
        return;
        
    default: alert("Что то пошло не так(");
    break;
    }
    

  }

};

game();