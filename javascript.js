const displayContent = document.querySelector('.displayText');
const displayOp = document.querySelector('.displayOp')


let numberOne = '';
let numberTwo = '';
let operator = '';
let total = '';

const button = document.querySelectorAll('.button');
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function() {
        if (operator === '') {
            displayContent.textContent += this.textContent;
            numberOne += this.textContent;
            console.log(numberOne)
        }
        else {
            displayContent.textContent += this.textContent;
            displayOp.textContent = '';
            numberTwo = displayContent.textContent;
            console.log(numberTwo)
        }
    });
};



const buttonOperate = document.querySelectorAll('#buttonOperate');
    for (let i = 0; i < buttonOperate.length; i++) {
        buttonOperate[i].addEventListener('click', function() {
            if (numberOne === '') {
                operator = false;
            }
            else if (numberTwo !== '') {
                total = operate(operator, numberOne, numberTwo)
                numberOne = total;
                console.log(numberOne);
                displayContent.textContent = '';
                displayOp.textContent = this.textContent;
                operator = this.textContent;
                console.log(operator);
            }
            else {
                displayContent.textContent = '';
                displayOp.textContent = this.textContent;
                operator = this.textContent;
                console.log(operator)
            }
        });
};

const buttonEqual = document.querySelector('#buttonEqual');

buttonEqual.addEventListener('click', function() {
    total = operate(operator, numberOne, numberTwo);
    displayContent.textContent = total;
    console.log(total)
})


function clearAll () {
    displayContent.textContent = '';
    numberOne = '';
    numberTwo = '';
    displayOp.textContent = '';
    operator = '';
    total = '';
}    

const buttonClear = document.querySelector('#buttonClear')
buttonClear.addEventListener('click', function() {
    clearAll();
});


function add(a, b) {
    return parseInt(a) + parseInt(b);
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b){
    return a * b;
};

function divide(a, b) {
    if (a === 0 || b === 0) {
        return 'ERROR';
    }
    else {
    return a/b;
    }
};


function operate(operator, a, b) {
    switch(operator) {
        case "+":
            return add(a, b);
            break;
        case "-":
            return subtract(a, b);
            break;
        case "*":
            return multiply(a, b);
            break;
        case "/":
            return divide(a, b);
            break;
    }
};