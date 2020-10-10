"use strict";

let money;
let income;
let addExpenses;
let deposit;
let mission;
let period;

alert('Немного молекулярной динамики))');

let uold = 0;
let unew;
let xold = 5;
let xnew;
let tau = 0.1;
let a = 1;
let k = 1;
let n = 2;
let t = 0;
let iter = 144;

let arrU = [];
let arrX = [];
let arrT = [];


let x = 150;
let y = 75;

function calck() {
  
  for (let i = 0; i < iter; i++) {

    unew =
      Math.round(
        (((a * a) / Math.pow(xold, n) - Math.pow(k, 2) * xold) * tau + uold) *
          1000
      ) / 1000;

    xnew = Math.round((uold * tau + xold) * 1000) / 1000;

    t = t + tau;

    uold = unew;
    xold = xnew;

    arrU[i] = uold;
    arrX[i] = xold;
    arrT[i] = t;

    console.log( `U= ${arrU[i]}`, `X= ${arrX[i]}`, `time= ${arrT[i]}` );
  }

  return arrX;
}



calck();

