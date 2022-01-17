const add      = (a, b)    => a + b; // 4+2= 6
const subtract = (a, b)    => a - b; //4-2 = 2
const multiply = (a , b)   => a * b; // 4*2= 8
const divide   = (a, b) => {
    if (b === 0) {
        displayValue.textContent = 'Go fuck yourself';
        return;
    } else {
        return a / b ;
    }
} 

function operation (operator, a , b) {
    a = parseInt(a)
    b = parseInt(b)
    let holder = ''
    switch (operator) {
     case '+':
            holder = add(a,b)
            holder.toString();
           return holder
            
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
           displayValue.textContent = `${valueB} ${valueOp} ${valueA}`
           console.log(`Operation = ${valueOp} || Value A = ${valueA} || Value B = ${valueB} btnNum Clicked`)
       
    })
})

btnsOp.forEach( (btn) => {
    btn.addEventListener('click', (e) => {
        if (e.target.textContent === '=') {
            if (valueOp === '' || valueB === '' || valueA === '') {
                displayValue.textContent = valueB
                console.log(`Operation = ${valueOp} || Value A = ${valueA} || Value B = ${valueB} equal clicked`)
             } else {
                bValueDisplay.textContent = `${valueB} ${valueOp} ${valueA}`
            valueB = operation(valueOp, valueB, valueA)
            displayValue.textContent = valueB + ' ' + valueOp;
            valueA = ''
            console.log(`Operation = ${valueOp} || Value A = ${valueA} || Value B = ${valueB} equal clicked`)

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
    
    if (isEmpty(valueA) === false && isEmpty(valueB) === false && isEmpty(valueOp) === false) {
         valueB = operation(valueOp, valueB, valueA);
        valueB.toString();
         valueOp = operator

         displayValue.textContent = `${valueB} ${valueOp}`

         console.log(`Operation = ${valueOp} || Value A = ${valueA} || Value B = ${valueB} 111 A => "" B = ${valueB} ${valueOp} ${valueA} `)
         valueA = ''
        } else {
        valueOp = operator;
        valueB = valueA.toString();
        valueA = '';
        displayValue.textContent = `${valueB} ${valueOp}`
        console.log(`Operation = ${valueOp} || Value A = ${valueA} || Value B = ${valueB} 222 A => B`)
    }




    // if (isEmpty(valueA) === true ) { // if then statement that check if valueA is empty if it is we only update the valueOp and display
    //     assignOp(operator);
    //     displayValue.textContent = valueB + ' ' + valueOp;
    //     console.log(`Operation = ${valueOp} || Value A = ${valueA} || Value B = ${valueB}`)
    // } else if (isEmpty(valueA) === false && isEmpty(valueB) === false && isEmpty(valueOp) === false) {
    //     valueB = operation(valueOp, valueB, valueA)
    //     assignOp(operator);
    //     displayValue.textContent = valueB + ' ' + valueOp;
    //     valueA = '';
    //     console.log(`Operation = ${valueOp} || Value A = ${valueA} || Value B = ${valueB}`)
    // } else if (isEmpty(valueB) === true ) {
    //     valueB = valueA
    //     assignOp(operator);
    // valueA = ''
    // displayValue.textContent = valueB +  ' ' + valueOp;
    // console.log(`Operation = ${valueOp} || Value A = ${valueA} || Value B = ${valueB} uihuon`)
    // } else {
    //     assignOp(operator);
    // valueA = ''
    // displayValue.textContent = valueB + 'oop ' + valueOp;
    // console.log(`Operation = ${valueOp} || Value A = ${valueA} || Value B = ${valueB} ERERROE`)
    // }

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
    displayValue.textContent = `${valueB} ${valueOp} ${valueA}`
})
