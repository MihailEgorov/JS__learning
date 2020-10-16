"use strict";


let moneyMonth,
    targetMonth, 
    res;
let expenses = [];

let income = "нет";
let mission = 100000;
let period = 12;


let money;

let start = function(){

   money = prompt("Ваш месячный доход?");

   while ( isNaN(parseFloat( money ))  ) {
       money = prompt("Ваш месячный доход?");
   }

};
start();    




let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую"),
    deposit = confirm("Есть ли у вас депозит в банке?");

// let expenses1 = prompt("Введите обязательную статью расходов?");
// let amount1 = prompt("Во сколько это обойдется?");
// let expenses2 = prompt("Введите обязательную статью расходов?");
// let amount2 = prompt("Во сколько это обойдется?");



function getExpensesMonth() {

    var sum = 0;

    for (let i = 0; i < 2; i++) {
        
        expenses[i] = prompt("Введите обязательную статью расходов?");
        sum += prompt("Во сколько это обойдется?");
        
    }
    //res = Number(amount1) + Number(amount2);
    return sum;

}

let expensesAmount = getExpensesMonth();

function getAccumulatedMonth() {

    return money - expensesAmount;

}

let accumulatedMonth = getAccumulatedMonth();


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
            return("Что то пошло не так");
        case budgetDay === 0:
            return("Трудись и у тебя все получится))");
    }

};

const showTypeOf = function(money, income, deposit, sum, 
                            addExpenses, moneyMonth, targetMonth,
                            budgetDay, getStatusIncome){

    console.log( money, typeof( money ) );
    console.log( income, typeof( income ) );
    console.log( deposit, typeof( deposit ) );
    console.log(  income.length  );

    console.log("Месячные расходы составляют" + " " + sum + " " + "рублей");
    console.log('Возможные расходы за рассчитываемый период: ', addExpenses.split(", "));
    console.log("Месячные накопления составляют" + " " + moneyMonth + " " + "рублей");
    console.log('Цель будет достигнута через:' + " " + targetMonth + " " + "месяцев");
    console.log('Бюджеть на день: ', budgetDay);
    console.log(getStatusIncome( budgetDay ));
};

getExpensesMonth();
getTargetMonth(mission, accumulatedMonth);

let budgetDay = Math.floor( accumulatedMonth / 30 );

showTypeOf(money, income, deposit, addExpenses, moneyMonth, targetMonth, budgetDay, getStatusIncome);