var operand1 = "", operand2 = "", operator;
var firstOperandIsEmpty = true;
var calcScreen = document.getElementById("screen");
var btns = document.querySelectorAll('.btn');

for(var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function(event){
        startCalculationProcess(event.target);
    })
    btns[i].style.width = '55px';
}

function startCalculationProcess(target) {
    calcScreen.innerText = calcScreen.innerText === '0'? target.value : calcScreen.innerText+target.value;
            
    let numberWasClicked = target.classList.contains('number');
    let decimalWasClicked = target.classList.contains('decimal');
    let operatorWasClicked = target.classList.contains('operator');
    let clearButtonWasClicked = target.classList.contains('clear');
    let resultButtonWasClicked = target.classList.contains('result');

    if(numberWasClicked) {
        if(firstOperandIsEmpty) {
            operand1 += String(target.value);
        } else{
            operand2 += String(target.value);
        }
    }
    
    let Operand1DoesNotContainsDecimal = !Array(operand1)[0].includes('.');
    let Operand2DoesNotContainsDecimal = !Array(operand2)[0].includes('.');

    if(decimalWasClicked && firstOperandIsEmpty) {
        if(Operand1DoesNotContainsDecimal)
            operand1 += String(target.value);

    } else if(decimalWasClicked && !firstOperandIsEmpty) {
        if(Operand2DoesNotContainsDecimal)
            operand2 += String(target.value);
    }

    if(operatorWasClicked) {
        firstOperandIsEmpty = false;
        operator = target.value;
        document.getElementById("operation").innerText = operator;
        calcScreen.innerText = "0"; // clear screen before getting 2nd operand
    }

    if(resultButtonWasClicked) {
        let result = calculateValues(operand1, operand2, operator);
        // make result as operand1 and empty operand2 for further calculations
        operand1 = String(result), operand2 = "";
        document.getElementById("screen").innerText = result;
    }

    if(clearButtonWasClicked) {
        clearScreenAndEmptyOperands();
    }
}

function calculateValues(operand1, operand2, operator) {
    operand1 = Number(operand1);
    operand2 = Number(operand2);

    switch(operator) {
        case 'x':
            return operand1 * operand2;
        case '/':
            return operand1 / operand2;
        case '+':
            return operand1 + operand2
        case '-':
            return operand1 - operand2;
    }
}

function clearScreenAndEmptyOperands() {
    operand1 = "", operand2 = "", firstOperandIsEmpty = true;
    calcScreen.innerText = "0";
    document.getElementById("operation").innerText = "";
}