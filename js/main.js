"use strict";


let income = "нет",
    mission = 100000;

let money = prompt("Ваш месячный доход?"),
    addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую"),
    deposit = confirm("Есть ли у вас депозит в банке?");

let expenses1 = prompt("Введите обязательную статью расходов?"),
    amount1 = prompt("Во сколько это обойдется?"),
    expenses2 = prompt("Введите обязательную статью расходов?"),
    amount2 = prompt("Во сколько это обойдется?");


function getExpensesMonth(amount1, amount2) {

    return  Number(amount1) + Number(amount2);
 
}

function getAccumulatedMonth() {

    return money - ( Number(amount1)  + Number(amount2) );
   
}

function getTargetMonth( accumulatedMonth) {
    
    return Math.ceil(mission / accumulatedMonth); 
    
}

const getStatusIncome = function(budgetDay){

    switch (true) {
        case budgetDay > 1200:
            return("У вас высокий уровень дохода");
        case ( 600 <= budgetDay ) && ( budgetDay <= 1200 ):
            return("У вас средний уровень дохода");
        case ( 0 < budgetDay ) && ( budgetDay < 600):
            return("К сожалению у вас уровень дохода ниже среднего");
        case budgetDay < 0:
            return("Что то пошло не так");
        case budgetDay === 0:
            return("Трудись и у тебя все получится))");
    }

};

const showTypeOf = function( budgetDay, getExpensesMonth, accumulatedMonth, getTargetMonth, getStatusIncome){

    console.log( money, typeof( money ) );
    console.log( income, typeof( income ) );
    console.log( deposit, typeof( deposit ) );
    console.log(  income.length  );

    console.log("Месячные расходы составляют" + " " + getExpensesMonth(amount1, amount2) + " " + "рублей");
    console.log('Возможные расходы за рассчитываемый период: ', addExpenses.split(", "));
    console.log("Месячные накопления составляют" + " " + accumulatedMonth + " " + "рублей");
    console.log('Цель будет достигнута через:' + " " + getTargetMonth(mission, accumulatedMonth) + " " + "месяцев");
    console.log('Бюджеть на день: ', budgetDay);
    console.log(getStatusIncome( budgetDay ));
};

getExpensesMonth(amount1, amount2);
const accumulatedMonth = getAccumulatedMonth(money, amount1, amount2);
getTargetMonth(mission, accumulatedMonth);

let budgetDay = Math.floor( accumulatedMonth / 30 );

showTypeOf( budgetDay, getExpensesMonth, accumulatedMonth, getTargetMonth, getStatusIncome);