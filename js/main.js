"use strict";


let income = "нет",
    mission = 100000,
    period = 12;

let money = prompt("Ваш месячный доход?"),
    addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую"),
    deposit = confirm("Есть ли у вас депозит в банке?");

console.log( typeof(money) );
console.log( typeof(income) );
console.log( typeof(deposit) );
console.log( addExpenses.length );

console.log( "\"Период равен" + " " + period + " " + "месяцев\"" );
console.log( "Цель заработать" + " " + mission + " " + "рублей" );
console.log( addExpenses.toLocaleLowerCase().split(", ") );


let expenses1 = prompt("Введите обязательную статью расходов?"),
    amount1 = prompt("Во сколько это обойдется?"),
    expenses2 = prompt("Введите обязательную статью расходов?"),
    amount2 = prompt("Во сколько это обойдется?");


let budgetMonth = money - ( Number(amount1)  + Number(amount2) ),
    mission1 = Math.ceil(mission / budgetMonth),
    budgetDay = Math.floor(budgetMonth / 30);


console.log( "бюджет на месяц", budgetMonth );
console.log('Цель будет достигнута через:' + " " + mission1 + " " + "месяцев");
console.log('Бюджеть на день: ', budgetDay);


switch (true) {
    case ( budgetDay >= 1200 ):
        console.log("У вас высокий уровень дохода");
        break;
    case  (600 <= budgetDay) && (budgetDay < 1200):
        console.log("У вас средний уровень дохода");
        break;
    case (0 < budgetDay) && (budgetDay < 600):
        console.log("К сожалению у вас уровень дохода ниже среднего");
        break;
    case budgetDay < 0:
        console.log("Что то пошло не так");
        break;       
    case budgetDay === 0:
        console.log("Прикладывай чуть больше усилий и у тебя все получится))");
        break;
}
