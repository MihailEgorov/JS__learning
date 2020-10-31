"use strict";

/*функция проверки на введение числа */
let isNumber = function(n){

  return !isNaN(parseFloat(n)) && isFinite(n);
};


let wraper = function(){

  let max = 99,
      min = 1,
      iter,
      num;

  const getRandomInteger = function(min, max){

    let random = Math.random() * (max - min) + min;
    return Math.floor(random);
  };

  let randomInteger = getRandomInteger(min, max);
  console.log('randomInteger: ', randomInteger);

  let start = function(){

    num = prompt("Угадай число от 1 до 100");

    if (!isNumber(num) && num !== null) {
        alert("Введи число");
    }
  };


  const startGame = function(){
    
    alert("Давай сыграем в игру");

    do {
      iter = prompt("Сколько ты хочешь попыток?");
    } while (!isNumber(iter));

    for (let i = 0; i < iter; i++) {

      start();
      
      switch (true) {
        case num === null:
          alert("Игра окончена!!!");
          return;
        case num < randomInteger:
          alert("Загаданное число больше");
          break;
        case num > randomInteger:
          alert("Загаданное число меньше");
          break;
        case +num === randomInteger:
          alert("Поздравляю, Вы угадали!!!");
          return;
        case !isNumber(num) && num !== null:
          continue;
        
        default: alert("Что то пошло не так(");
          break;
      }
  
    }

    alert("Вы исчерпали свое колличество попыток");
  };


return startGame();
};


wraper();
