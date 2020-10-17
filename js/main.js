"use strict";

let isNumber = function(n){

    return !isNaN(parseFloat(n)) && isFinite(n);
};



let income = "нет",
    mission = 100000,
    money,
    expenses = [];


let start = function(){

    do {

        money = prompt("Ваш месячный доход?");

    } while (!isNumber(money));

};

start();


let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую"),
    deposit = confirm("Есть ли у вас депозит в банке?");
    


function getExpensesMonth() {

    let sum = 0;
    let tmp = "";

    for (let i = 0; i < 2; i++) {
        
        expenses[i] = prompt("Введите обязательную статью расходов?");

        while (!isNumber(tmp)) {

            tmp =  +prompt("Во сколько это обойдется?");

        }

        sum += tmp;
        tmp = "";

    }
    return sum;
}

let expensesAmount = getExpensesMonth();


function getAccumulatedMonth(money) {

    return money - expensesAmount;
   
}

function getTargetMonth(mission, accumulatedMonth) {
    
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
            return("Возможно что то пошло не так");
        case budgetDay === 0:
            return("Трудись и у тебя все получится))");
    }

};

const showTypeOf = function( budgetDay, expensesAmount, accumulatedMonth, getTargetMonth, getStatusIncome){

    console.log( money, typeof( money ) );
    console.log( income, typeof( income ) );
    console.log( deposit, typeof( deposit ) );
    console.log(  income.length  );

    console.log("Месячные расходы составляют" + " " + expensesAmount + " " + "рублей");
    console.log('Возможные расходы за рассчитываемый период: ', addExpenses.split(", "));
    console.log("Месячные накопления составляют" + " " + accumulatedMonth + " " + "рублей");

    if (getTargetMonth(mission, accumulatedMonth) < 0) {
        console.log('Цель не будет достигнута');
    }else
    {
        console.log('Цель будет достигнута через:' + " " + getTargetMonth(mission, accumulatedMonth) + " " + "месяцев");
    }
    
    console.log('Бюджеть на день: ', budgetDay);
    console.log(getStatusIncome( budgetDay ));
};


const accumulatedMonth = getAccumulatedMonth(money);
let budgetDay = Math.floor( accumulatedMonth / 30 );

showTypeOf( budgetDay, expensesAmount, accumulatedMonth, getTargetMonth, getStatusIncome);