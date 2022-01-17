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
        
        valueA += e.target.textContent
        displayValue.textContent = valueA;
    })
})

btnsOp.forEach( (btn) => {
    btn.addEventListener('click', (e) => {
        if (e.target.textContent === '=') {
            if (valueOp === '' || valueB === '' || valueA === '') {
                console.log(`Operation = ${valueOp} || Value A = ${valueA} || Value B = ${valueB}`)
            } else {
            console.log('EQUAL CHOSE')
            valueB = operation(valueOp, valueB, valueA)
            valueA = ''
            bValueDisplay.textContent = ''
            displayValue.textContent = valueB
            console.log(`Operation = ${valueOp} || Value A = ${valueA} || Value B = ${valueB}`)

        }
        } else if (e.target.textContent === '+') {
            valueOp = '+';
            valueB = valueA
            valueA = '';
            bValueDisplay.textContent = valueB + ' ' + valueOp;
         
        } else if (e.target.textContent === '-') {
            if (valueOp === "") {
            valueOp = '-'
            valueB = valueA
            valueA = ''
            bValueDisplay.textContent = valueB + ' ' + valueOp;
            console.log(`Operation = ${valueOp} || Value A = ${valueA} || Value B = ${valueB}`)
            } else {
                valueB = operation(valueOp, valueB, valueA)
                valueOp = '-'
                bValueDisplay.textContent = valueB + " " + valueOp;
                valueA = "" ;
            }
        } else if (e.target.textContent === 'x') {
            valueOp = 'x'
            valueB = valueA;
            valueA = '';
            bValueDisplay.textContent = valueB + ' ' + valueOp;
        } else if (e.target.textContent === '÷') {
            valueOp = '÷';
            valueB = valueA
            valueA = '';
            bValueDisplay.textContent = valueB + ' ' + valueOp;
        }
    })
})

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