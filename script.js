const add = (a,b) => a+b;
const subtract = (a,b) => a-b;
const multiply = (a,b) => a*b;
const divide = (a,b) => a/b;

const operate = function (operator, a, b) {
   return operator(a, b)
};

let result = document.querySelector('h1');
let result2 = document.querySelector('h2');
// result.textContent = divide(8,2)
// result2.textContent = operate(add, 5, 2);