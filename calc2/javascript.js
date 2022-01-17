const add = (a, b) => a + b; // 4+2= 6
const subtract = (a, b) => a - b; //4-2 = 2
const multiply = (a , b) => a * b; // 4*2= 8
const divide = (a, b) => a / b // 4/2 = 2
function operation (operator, a , b) {
    a = parseInt(a)
    b = parseInt(b)

    switch (operator) {
     case '+':
           return add(a,b)
            
     case '-':
           return subtract(a,b)
            
     case 'x':
           return multiply(a,b)
            
     case '÷': 
           return divide(a, b)
            
        default:
            break;
    }
}
//console.log(operation('*', '4', '2' ))  WORKING OPERATION FUNCTIONS

let btnsNum = document.querySelectorAll('.btnsNum')
let btnsOp = document.querySelectorAll('.btnOp');
let displayValue = document.querySelector('#displayValue');
let dlt = document.querySelector('#delete');
let clear = document.querySelector('#clear');
let bValueDisplay = document.querySelector("#bValue")


btnsNum = Array.from(btnsNum);
btnsOp = Array.from(btnsOp)

let valueA  = '';
let valueB  = '';
let valueOp = '';
btnsNum.forEach( (btn) => {
    btn.addEventListener('click', (e) => {
       if (isEmpty(valueOp) === false && isEmpty(valueB) === false) {
           valueA += e.target.textContent
           displayValue.textContent = `${valueB} ${valueOp} ${valueA}`
       } else {
        valueA += e.target.textContent
        displayValue.textContent = `${valueB} ${valueOp} ${valueA}`
       }
    })
})

btnsOp.forEach( (btn) => {
    btn.addEventListener('click', (e) => {
        if (e.target.textContent === '=') {
            if (valueOp === '' || valueB === '' || valueA === '') {
                displayValue.textContent = valueB
                console.log(`Operation = ${valueOp} || Value A = ${valueA} || Value B = ${valueB}`)
             } else {
                bValueDisplay.textContent = `${valueB} ${valueOp} ${valueA}`
            valueB = operation(valueOp, valueB, valueA)
            displayValue.textContent = valueB + ' ' + valueOp;
            valueA = ''
            console.log(`Operation = ${valueOp} || Value A = ${valueA} || Value B = ${valueB}`)

        }
        } else if (e.target.textContent === '+') {
            opFunc(e.target.textContent)
        } else if (e.target.textContent === '-') {
            opFunc(e.target.textContent)
        } else if (e.target.textContent === 'x') {
            opFunc(e.target.textContent)
        } else if (e.target.textContent === '÷') {
            opFunc(e.target.textContent)
        }
    })
})
const opFunc = function (operator) { //changes valueOp to selected operator , updates displayValue with new op and value B
    valueOp = operator
    if (isEmpty(valueA) === true ) { // if then statement that check if valueA is empty if it is we only update the valueOp and display
        displayValue.textContent = valueB + ' ' + valueOp;
    } else {
    valueB = valueA
    valueA = ''
    displayValue.textContent = valueB + ' ' + valueOp;
    console.log(`Operation = ${valueOp} || Value A = ${valueA} || Value B = ${valueB}`)
    }

}
const isEmpty = function (obj) { //checks to see if object is empty returns true if it is
    return Object.keys(obj).length === 0;
}
clear.addEventListener('click', (e) => {
    console.log('clear')
    valueA = ''
    valueB = '';
    valueOp = '';
    bValueDisplay.textContent = '';
    displayValue.textContent = 0;
})

dlt.addEventListener('click', (e) => {
    valueA = valueA.slice(0, -1);
    displayValue.textContent = valueA
})