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
  addExpenses: [],/*массив с возможными расходами */
  deposit: false,
  percentDeposit: 0,
  moneDeposit: 0,
  mission: 100000,
  period: 12,
  budgetDay: 0,/*бюджет на день */
  budgetMonth: 0, /*бюджет на месяц */
  expensesMonth: 0,/*расходы за месяц */
  expensesAmount: 0,

  asking: function(){

    if ( confirm("Есть ли у Вас дополнительный источник зароботка?") ) {
      
      let itemIncome;
      do {
        itemIncome = prompt("Какой у вас есть дополнительный источник дохода");
      } while (isNumber(itemIncome));

      let cashIncome;
      do {
        cashIncome = prompt("Сколько вы на этом зарабатываете?");
      } while (!isNumber(cashIncome));
      
      appData.income[itemIncome] = cashIncome;
    }

    let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
        appData.addExpenses = addExpenses.toLowerCase().split(", ");
        appData.deposit = confirm("Есть ли у вас депозит в банке?");

    let tmp = "",
        answer;

    for (let i = 0; i < 2; i++) {
      
      do {
        answer = prompt("Введите обязательную статью расходов?");
      } while (isNumber(answer));
      

      while (!isNumber(tmp)) {
        tmp =  prompt("Во сколько это обойдется?");
      }
      
      appData.expenses[answer] = tmp;
      tmp = "";

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
  },

  getInfoDeposite: function(){
    if (appData.deposit) {

      do {
        appData.percentDeposit = prompt("Какой годовой процент?");
      } while (!isNumber(appData.percentDeposit));
      do {
        appData.moneDeposit = prompt("Какая сумма заложена?");
      } while (!isNumber(appData.moneDeposit));
      
    }
  },

  calcSavedMoney: function(){
    return +appData.budgetMonth * appData.period;
  }

};

appData.asking();
appData.expensesAmount = appData.getExpensesMonth();
appData.getBudget(); 
appData.getInfoDeposite();


appData.addExpenses = appData.addExpenses.join(", ");

let addExpensesStr = function(){

   return appData.addExpenses.replace( /(^|((,)\s))\S/g, 
   function(a) {
    return a.toUpperCase();
  }
  );
  
};



const showMessege = function(){

    console.log("Месячные расходы составляют" + " " + appData.expensesMonth + " " + "рублей");
    
    if (appData.getTargetMonth(appData.budgetMonth) < 0) {
      console.log('Цель не будет достигнута');
    }else
    {
      console.log('Цель будет достигнута через:' + " " + appData.getTargetMonth() + " " + "месяцев");
    }

    console.log(appData.getStatusIncome( appData.budgetDay ));
    console.log(appData.calcSavedMoney());
    console.log("Возможные расходы: ", addExpensesStr());
    
    for (const key in appData) {
      console.log("Наша программа включает в себя данные:" + " " + key + " " + "и их значения" + " " + appData[key]);
    }
};


showMessege();
