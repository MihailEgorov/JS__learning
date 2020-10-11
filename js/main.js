"use strict";

let money = 10000;
console.log( typeof(money) );
let income = "нет";
console.log( typeof(income) );
let addExpenses = "Интернет, Такси, Коммуналка";
console.log( addExpenses.length );
let deposit = true;
console.log( typeof(deposit) );
let mission = 100000;
let period = 12;
console.log( "\"Период равен" + " " + period + " " + "месяцев\"" );
console.log( "Цель заработать" + " " + mission + " " + "рублей" );
console.log( addExpenses.toLocaleLowerCase() );
console.log( addExpenses.split(", ") );

let budgetDay = money / 30; 
console.log('budgetDay: ', budgetDay);


