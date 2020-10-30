"use strict";

let isNumber = function(n){

    return !isNaN(parseFloat(n)) && isFinite(n);
};

let money;

let start = function(){

  do {
      money = prompt("Ваш месячный доход?");
  } while (!isNumber(money));
};

start();


let appData = {

  income: {},/*доп доходы */
  addIncome: [],/*дополнительные доходы  */
  expenses: {},/* дополнительные расходы*/
  addExpenses: [],/*массив с вохможными расходами */
  deposit: false,
  mission: 100000,
  period: 12,
  budgetDay: 0,/*бюджет на день */
  budgetMonth: 0, /*бюджет на месяц */
  expensesMonth: 0,/*расходы за месяц */
  expensesAmount: 0,
  tmpAnswer: [],
  tmpMoney: [],

  asking: function(){

    let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
        appData.addExpenses = addExpenses.toLowerCase().split(", ");
        appData.deposit = confirm("Есть ли у вас депозит в банке?");

    let tmp = "";
        
    /*Опрасили пользователя и занесли его ответы в массивы */
    for (let i = 0; i < 2; i++) {
          
      appData.tmpAnswer[i] = prompt("Введите обязательную статью расходов?");
           
      while (!isNumber(tmp)) {
        tmp =  prompt("Во сколько это обойдется?");
      }

      appData.tmpMoney[i] = tmp;
      tmp = "";
    }

    /*Берем значения из массива и делаем их свойствами обьекта */
    for (let i = 0; i < 2; i++) {
          
      appData.expenses[appData.tmpAnswer[i]] = appData.tmpMoney[i];
    }

  },

  getExpensesMonth: function(){

    for (const key in appData.expenses) {
      appData.expensesMonth += Number(appData.expenses[key]);  
    }
    
    return appData.expensesMonth;
  },

  getBudget: function() {
     appData.budgetMonth = money - appData.expensesAmount;
     appData.budgetDay = Math.floor( appData.budgetMonth / 30 );

     return appData.budgetMonth,
            appData.budgetDay;
  },
 
  getTargetMonth: function() {
    return Math.ceil(appData.mission / appData.budgetMonth);
  },

  getStatusIncome: function(budgetDay) {
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
  }

};

appData.asking();
appData.expensesAmount = appData.getExpensesMonth();
appData.getBudget(); 


const showMessege = function(){

    console.log("Месячные расходы составляют" + " " + appData.expensesMonth + " " + "рублей");
    
    if (appData.getTargetMonth(appData.budgetMonth) < 0) {
      console.log('Цель не будет достигнута');
    }else
    {
      console.log('Цель будет достигнута через:' + " " + appData.getTargetMonth() + " " + "месяцев");
    }

    console.log(appData.getStatusIncome( appData.budgetDay ));

    for (const key in appData) {
      console.log("Наша программа включает в себя данные:" + " " + key + " " + "и их значения" + " " + appData[key]);
    }
};


showMessege();
