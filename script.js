document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.button');
    const clearButton = document.getElementById('clear');
    const equalsButton = document.getElementById('equals');
    
    let currentInput = '';
    let operator = '';
    let previousInput = '';
    let resultDisplayed = false;

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.getAttribute('data-value');

            if (value === '+' || value === '-' || value === '*' || value === '/') {
                if (currentInput && !resultDisplayed) {
                    previousInput = currentInput;
                    currentInput = '';
                }
                operator = value;
                display.textContent = operator;
            } else if (value) {
                if (resultDisplayed) {
                    currentInput = value;
                    resultDisplayed = false;
                } else {
                    currentInput += value;
                }
                display.textContent = currentInput;
            }
        });
    });

    clearButton.addEventListener('click', function() {
        currentInput = '';
        operator = '';
        previousInput = '';
        display.textContent = '';
    });

    equalsButton.addEventListener('click', function() {
        if (currentInput && previousInput && operator) {
            const result = eval(`${previousInput} ${operator} ${currentInput}`);
            display.textContent = result;
            previousInput = result;
            currentInput = '';
            operator = '';
            resultDisplayed = true;
        }
    });
});
