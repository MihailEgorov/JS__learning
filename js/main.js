"use strict";

let expenses1, 
expenses2, 
amount1, 
amount2, 
budgetMonth, 
mission1;


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


money = prompt("Ваш месячный доход?");
console.log('money: ', money);
addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
console.log('addExpenses: ', addExpenses);
deposit = confirm("Есть ли у вас депозит в банке?");
console.log('deposit: ', deposit);




expenses1 = prompt("Введите обязательную статью расходов?");
console.log('expenses1: ', expenses1);
amount1 = prompt("Во сколько это обойдется?");
console.log('amount1: ', amount1);
expenses2 = prompt("Введите обязательную статью расходов?");
console.log('expenses2: ', expenses2);
amount2 = prompt("Во сколько это обойдется?");
console.log('amount2: ', amount2);

budgetMonth = money - ( Number(amount1)  + Number(amount2) );
console.log( "бюджет на месяц", budgetMonth );

mission1 = Math.ceil(mission / budgetMonth);
console.log('Цель будет достигнута через:' + " " + mission1 + " " + "месяцев");

budgetDay = Math.floor(budgetMonth / 30);
console.log('Бюджеть на день: ', budgetDay);

switch (true) {
    case budgetDay > 1200:
        console.log("У вас высокий уровень дохода");
        break;
    case (600 < budgetDay) && (budgetDay < 1200):
        console.log("У вас средний уровень дохода");
        break;
    case 0 < budgetDay < 600:
        console.log("К сожалению у вас уровень дохода ниже среднего");
        break;
    case budgetDay < 0:
        console.log("Что то пошло не так");
        break;
    case budgetDay === 1200:
        console.log("У вас высокий уровень дохода");
        break;    
    case budgetDay === 600:
        console.log("У вас средний уровень дохода");
        break;        
    case budgetDay === 0:
        console.log("К сожалению у вас уровень дохода ниже среднего");
        break;
}
