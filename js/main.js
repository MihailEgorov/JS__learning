"use strict";

let calculate = document.getElementById("start"),/*кнопка рассчитать */
   
    plus = document.getElementsByTagName("button"),
    incomePlus = plus[0],
    expensesPlus = plus[1],

    checkBox = document.querySelector("#deposit-check"),/* есть ли депозит */
    additiveIncome = document.querySelectorAll("additional_income-item"),/*Дополнительный доход */
/*Правая часть */
    budgetDayValue = document.getElementsByClassName("budget_day-value")[0],/*бюджет на день */
    expensesMonthValue = document.getElementsByClassName("expenses_month-value")[0],/*расходы на месяц */
    additionalIncomeValue = document.getElementsByClassName("additional_income-value")[0],/*Дополнительный доход */
    additionalExpensesValue = document.getElementsByClassName("additional_expenses-value")[0],/*дополнительные расходы */
    incomePeriodValue = document.getElementsByClassName("income_period-value")[0],/*накопления за период */
    targetMonthValue = document.getElementsByClassName("target_month-value")[0],/*срок достижения цели */
    budgetMonthValue = document.querySelector(".budget_month-value"),/*даход за месяц */
/*Дополнительный доход */
    incomeTitle = document.querySelector(".income-title"),/* наименование доп дохода*/
    expensesItems = document.querySelectorAll(".expenses-items"),
/*Месячный доход */
    salaryAmount = document.querySelector(".salary-amount"),/*сумма месячного дохода */ 
/*Обязательные расходы */
    expensesTitle = document.querySelector(".expenses-title"),/*наименование обяз расходом */
    expensesAmount = document.querySelector(".expenses-amount"),/*сумма обяз расходов */
/*Возможные расходы */
    additionalExpensesItem = document.querySelector(".additional_expenses-item"),/*название возможных расходов */
/*Цель  */
    targetAmount = document.querySelector(".target-amount"),
/*Период расчета */
    periodSelect = document.querySelector(".period-select"),

    incomeItems = document.querySelectorAll(".income-items");
   
    
let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};


let appData = {

  income: {},/*доп доходы */
  addIncome: [],/*дополнительные доходы  */
  expenses: {},/* дополнительные расходы*/
  addExpenses: [],/*массив с возможными расходами */
  deposit: false,
  percentDeposit: 0,
  incomeMonth: 0,
  moneDeposit: 0,
  budget: 0,
  budgetDay: 0,/*бюджет на день */
  budgetMonth: 0, /*бюджет на месяц */
  expensesMonth: 0,/*расходы за месяц */
  expensesAmount: 0,

  start: function(){

    if (salaryAmount.value === "") {
      alert("Ошибка, поле месячный доход должно быть заполненно!!");
      return;
    }

    appData.budget = +salaryAmount.value;

    appData.getExpenses();
    // appData.asking();
     appData.expensesAmount = appData.getExpensesMonth();
     appData.getAddExpensex();
     appData.getIncome();
     appData.getAddIncome();
     appData.getIncomeMonth();
     appData.getBudget(); 

     appData.showResult();
    // appData.getInfoDeposite();
  },

  showResult: function(){
    budgetMonthValue.value = appData.budgetMonth;
    budgetDayValue.value = appData.budgetDay;
    expensesMonthValue.value = appData.expensesMonth;
    additionalExpensesValue.value = appData.addExpenses.join(", ");
    additionalIncomeValue.value = appData.addIncome.join(", ");
    targetMonthValue.value = appData.getTargetMonth();
    incomePeriodValue.value = appData.calcSavedMoney();
    
    periodSelect.addEventListener("input", appData.showResult);
  },

  addExpensesBlock: function(){
    let cloneExensesItem = expensesItems[0].cloneNode(true);
    expensesItems[0].parentNode.insertBefore(cloneExensesItem, expensesPlus);
    expensesItems = document.querySelectorAll(".expenses-items");
    if (expensesItems.length === 3) {
      expensesPlus.style.display = "none";
    }
  },

  addIncomeBlock: function(){
    let cloneIncomeItem = incomeItems[0].cloneNode(true);
    incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
    incomeItems = document.querySelectorAll(".income-items");
    if (incomeItems.length === 3) {
      incomePlus.style.display = "none";
    }
  },

  getExpenses: function(){
  expensesItems.forEach(function(items){
    let itemExpenses = items.querySelector(".expenses-title").value,
        cashExpenses = items.querySelector(".expenses-amount").value;
        if (itemExpenses !== "" && cashExpenses !== "") {
          appData.expenses[itemExpenses] = +cashExpenses;
        }
  });
  },

  getIncome: function(){
    incomeItems.forEach(function(items){
    let itemIncome = items.querySelector(".income-title").value,
        cashIcome = items.querySelector(".income-amount").value;
        if (itemIncome !== "" && cashIcome !== "") {
          appData.income[itemIncome] = +cashIcome; 
        }
    });
  },

  getAddExpensex: function(){
    let addExpenses = additionalExpensesItem.value.split(",");
    addExpenses.forEach(function(item){
      item = item.trim();
       if (item !=="") {
         appData.addExpenses.push(item);
       }
    });
  },

  getAddIncome: function(){
    additiveIncome.forEach(function(item){
      let itemValue = item.value.trim();
      if (item.value !== "") {
        appData.addIncome.push(itemValue);
      }
    });
  },

  getExpensesMonth: function(){
    for (const key in appData.expenses) {
      appData.expensesMonth += Number(appData.expenses[key]);  
    }
    return appData.expensesMonth;
  },

  getIncomeMonth: function(){
    for (const key in appData.income) {
      appData.incomeMonth += Number(appData.income[key]);
    }
    return appData.incomeMonth;
  },

  getBudget: function() {
     appData.budgetMonth = appData.budget + appData.incomeMonth -  appData.expensesAmount;
     appData.budgetDay = Math.floor( appData.budgetMonth / 30 );

     return appData.budgetMonth,
            appData.budgetDay;
  },
 
  getTargetMonth: function() {
    return Math.ceil(targetAmount.value / appData.budgetMonth);
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
    return +appData.budgetMonth * periodSelect.value;
   
  },

  calcPeriodSelect: function(){
    document.querySelector(".period-amount").innerHTML =  periodSelect.value;
  }

};

//по нажатию на кнопочку старт программа начинает работать
calculate.addEventListener("click", appData.start);
//по нажатию на + добавляется новое поле
expensesPlus.addEventListener("click", appData.addExpensesBlock);
incomePlus.addEventListener("click", appData.addIncomeBlock);
/*периуд расчета */
periodSelect.addEventListener("input", appData.calcPeriodSelect);



let addExpensesStr = function(){

   return appData.addExpenses.replace( /(^|((,)\s))\S/g, 
   function(a) {
    return a.toUpperCase();
  }
  );
  
};






