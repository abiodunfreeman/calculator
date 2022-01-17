const add = (a,b) => parseInt(a)+parseInt(b);
const subtract = (a,b) => parseInt(a)-parseInt(b);
const multiply = (a,b) => parseInt(a)*parseInt(b);
const divide = (a,b) => parseInt(a)/parseInt(b);
function operate(operator, a, b) {
    a = parseInt(a);
    b = parseInt(b);
    switch (operator) {
        case '+':
            return add(a,b);
        case '-':
            return subtract(a,b);
        case 'x':
            return multiply(a,b);
        case '/': 
            if (b === 0) return null
            return divide(a,b);
        default:
            return null
    }

} //math functions above this line
let valOnScreen = document.querySelector('h2');
let valAbove = document.querySelector('h4');
let currentVal = 0;
let pastVal = 0;

valOnScreen.textContent = currentVal;
valAbove.textContent = pastVal;

let buttons = Array.from(document.querySelectorAll('.btn'))
buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (e.target.textContent == 'CLEAR') {
            valOnScreen.textContent = 0;
            valAbove.textContent = 0;
            pastVal = 0;
            currentVal = 0;
        } else if (e.target.textContent == 'DELETE') {
                if (currentVal.length > 0 && currentVal != 0) {
                    let valArray = currentVal.split("")
                   console.log(valArray)
        } else {
            if (currentVal == 0) currentVal = '';
            currentVal += e.target.textContent
            parseInt(currentVal)
            valOnScreen.textContent = currentVal
            console.log(currentVal)
        }
    )}
})

let operatorBtns = document.querySelectorAll('.btnOp')
let currentOperation = '';
operatorBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (e.target.id === 'plus') {
            pastVal = currentVal;
            // currentVal = '';
            currentOperation = '+';
            valAbove.textContent = `${pastVal} +`
        } else if (e.target.id === 'equal') {
            pastVal = operate(currentOperation,pastVal,currentVal)
            // currentVal = 0;
            valAbove.textContent = `${pastVal} ${currentOperation}`
        } else if (e.target.id === 'subtract') {
            pastVal = currentVal;
            currentVal = '';
            currentOperation = '-';
            valAbove.textContent = `${pastVal} -`
        }
    })
})

console.log(buttons);


console.log(operate('+', 2,3))