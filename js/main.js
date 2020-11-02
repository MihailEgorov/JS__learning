"use strict";

/*функция проверки на введение числа */
let isNumber = function(n){
  return !isNaN(parseFloat(n)) && isFinite(n);
};


let wraper = function(){

  let iter,
      num,
      tmp = 1;

/*Рандомим от 1 до 100 */
  let getRandomInteger = function(){
      return Math.floor( Math.random() * 100 + 1);
  };
  let randomInteger = getRandomInteger();
  console.log('randomInteger: ', randomInteger);

  let start = function(){

    alert("Давай сыграем в игру");
      do {
        iter = prompt("Сколько ты хочешь попыток?");
      } while (!isNumber(iter));

      iter = Number(iter);
      return iter;
  };
  start();

  let getNum = function(){

    num = prompt("Угадай число от 1 до 100");
    if (!isNumber(num) && num !== null) {
      alert("Введи число");
    }
  };


  let startGame = function(){

    getNum();
      
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
         break; 
      
      default: alert("Что то пошло не так(");
        break;
    }

    if (tmp !== iter) {
      tmp++;
      return startGame();
    }
    else{
      return alert("Вы исчерпали свои попытки");
    }
  };

  return startGame();
};

wraper();

