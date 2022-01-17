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
            funcOperator(e.target.textContent);
        } else if (e.target.textContent === '-') {
            funcOperator(e.target.textContent);
        } else if (e.target.textContent === 'x') {
            funcOperator(e.target.textContent);
        } else if (e.target.textContent === '÷') {
            funcOperator(e.target.textContent);
        }
    })
})

const funcOperator = function (operator) {
  
  if (valueA != '' && valueB != '') {
      valueB = operation(valueOp, valueB, valueA);
        valueOp = operator;
        valueA = ''
        displayValue.textContent = valueB + ' ' + valueOp;
        bValueDisplay.textContent = valueB;
        console.log('funcOp called, operation done then valOp assigned, valA = "" ')
  } else if (valueA == ''){
    console.log('no operator chosen')
  } else if (valueB != '') {
    valueOp = operator;
    console.log(`Operation = ${valueOp} || Value A = ${valueA} || Value B = ${valueB}`)
    valueA = '';
    displayValue.textContent = valueB + ' ' + valueOp;
    console.log('funcOp called valB remains same')
  } else {
      valueOp = operator;
      valueB = valueA;
      valueA = '';
      displayValue.textContent = valueB + ' ' + valueOp;
      console.log('funcOp called no operation done')
  }
};





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
    displayValue.textContent = valueB + ' ' + valueOp + ' ' + valueA;
    bValueDisplay.textContent = operation(valueOp, valueB, valueA);
})
btnsNum.forEach( (btn) => {
    btn.addEventListener('click', (e) => {
        if (valueB != '') {
            console.log('B not empty');
            valueA += e.target.textContent
            displayValue.textContent = valueB + ' ' + valueOp + ' ' + valueA;
            bValueDisplay.textContent = operation(valueOp, valueB, valueA);
        console.log(`Operation = ${valueOp} || Value A = ${valueA} || Value B = ${valueB}`)
        } else {
        valueA += e.target.textContent
        displayValue.textContent = valueA;
        console.log(`Operation = ${valueOp} || Value A = ${valueA} || Value B = ${valueB}`)
        }
    })
})

//console.log(operation('*', '4', '2' ))  WORKING OPERATION FUNCTIONS
const add      = (a, b) => a + b; // 4+2= 6
const subtract = (a, b) => a - b; //4-2 = 2
const multiply = (a , b) => a * b; // 4*2= 8
const divide   = (a, b) => a / b // 4/2 = 2
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
        if (valueA == '0') {
            bValueDisplay.textContent = 'Fuck you'
            return;
        } else {
           return divide(a, b)
        }
        default:
            break;
    }
}