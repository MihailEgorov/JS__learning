"use strict";

let expenses1, 
expenses2, 
amount1, 
amount2, 
moneyMonth,
targetMonth, 
mission1,
res,
budgetDay;


let money = 10000;
let income = "нет";
let addExpenses = "Интернет, Такси, Коммуналка";
let deposit = true;
let mission = 100000;
let period = 12;


money = prompt("Ваш месячный доход?");
addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
deposit = confirm("Есть ли у вас депозит в банке?");

expenses1 = prompt("Введите обязательную статью расходов?");
amount1 = prompt("Во сколько это обойдется?");
expenses2 = prompt("Введите обязательную статью расходов?");
amount2 = prompt("Во сколько это обойдется?");


function getExpensesMonth(amount1, amount2) {

    res = Number(amount1) + Number(amount2);
    return res;

}

function getAccumulatedMonth(money, amount1, amount2) {

    moneyMonth = money - ( Number(amount1)  + Number(amount2) );
    return moneyMonth;

}

function getTargetMonth(mission, accumulatedMonth) {
    
    targetMonth = mission / accumulatedMonth;
    return targetMonth;
    
}

const getStatusIncome = function(budgetDay){

    switch (true) {
        case budgetDay > 1200:
            return("У вас высокий уровень дохода");
        case (600 < budgetDay) && (budgetDay < 1200):
            return("У вас средний уровень дохода");
        case 0 < budgetDay < 600:
            return("К сожалению у вас уровень дохода ниже среднего");
        case budgetDay < 0:
            return("Что то пошло не так");
        case budgetDay === 1200:
            return("У вас высокий уровень дохода");
        case budgetDay === 600:
            return("У вас средний уровень дохода");
        case budgetDay === 0:
            return("К сожалению у вас уровень дохода ниже среднего");
    }

};

const showTypeOf = function(res, addExpenses, moneyMonth, targetMonth, budgetDay, getStatusIncome){

    console.log("Месячные расходы составляют" + " " + res + " " + "рублей");
    console.log('Возможные расходы за рассчитываемый период: ', addExpenses.split(", "));
    console.log("Месячные накопления составляют" + " " + moneyMonth + " " + "рублей");
    console.log('Цель будет достигнута через:' + " " + targetMonth + " " + "месяцев");
    console.log('Бюджеть на день: ', budgetDay);
    console.log(getStatusIncome());
};

getExpensesMonth(amount1, amount2);
const accumulatedMonth = getAccumulatedMonth(money, amount1, amount2);
getTargetMonth(mission, accumulatedMonth);

budgetDay = Math.floor(accumulatedMonth / 30);

getStatusIncome(budgetDay);
showTypeOf(res, addExpenses, moneyMonth, targetMonth, budgetDay, getStatusIncome);