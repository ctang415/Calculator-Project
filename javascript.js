const displayContent = document.querySelector('.display');


let numberOne = '';
let numberTwo = '';
let operator = '';


const button = document.querySelectorAll('#button');
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function() {
        displayContent.textContent += this.textContent;
        numberOne = displayContent.textContent;
        });
    };

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

function clear() {

}

function operate(operator, a, b) {
    switch(operator) {
        case "+":
            return add(a, b);
            break;
        case  "-":
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