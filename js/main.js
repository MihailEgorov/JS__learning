"use strict";

let calculate = document.getElementById("start"),/*кнопка рассчитать */
    plus1 = document.getElementsByTagName("button")[0],/*кнопка плюс */ 
    plus2 = document.getElementsByTagName("button")[1],/*2-ая кнопка плюс */ 
    checkBox = document.querySelector("#deposit-check"),/* есть ли депозит */
    additiveIncome = document.querySelectorAll("additional_income-item"),/*Дополнительный доход */
/*Правая часть */
    budgetDay = document.getElementsByClassName("budget_day-value"),/*бюджет на день */
    expensesMonth = document.getElementsByClassName("expenses_month-value"),/*расходы на месяц */
    additionalIncome = document.getElementsByClassName("additional_income-value"),/*Дополнительный доход */
    additionalExpenses = document.getElementsByClassName("additional_expenses-value"),/*дополнительные расходы */
    incomePeriod = document.getElementsByClassName("income_period-value"),/*накопления за период */
    targetMonth = document.getElementsByClassName("target_month-value"),/*срок достижения цели */
    budgetMonth = document.querySelector(".budget_month-value"),/*даход за месяц */
/*Дополнительный доход */
    incomeTitle = document.querySelector(".income-title"),/* наименование доп дохода*/
    incomeAmount = document.querySelector(".income-amount"),/*сумма доп дохода */
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
    periodSelect = document.querySelector(".period-select");