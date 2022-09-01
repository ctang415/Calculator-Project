const displayContent = document.querySelector('.displayText');
const displayOp = document.querySelector('.displayOp')

let numberOne = '';
let numberTwo = '';
let operator = '';


const button = document.querySelectorAll('#button');
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
    displayContent.textContent = operate(operator, parseInt(numberOne), parseInt(numberTwo));
})


function clearAll () {
    displayContent.textContent = '';
    numberOne = '';
    numberTwo = '';
    operator = '';
}    

const buttonClear = document.querySelector('#buttonClear')
buttonClear.addEventListener('click', function() {
    clearAll();
});


function add(a, b) {
    return a + b;
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