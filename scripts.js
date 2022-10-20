// create Calculator class 
class Calculator {
    constructor(prevOperandText, currentOperandText) {
        this.prevOperandText = prevOperandText;
        this.currentOperandText = currentOperandText;
        this.clear();
    };

    //clear the screen
    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    };

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) {
            return 
        };
        this.currentOperand = this.currentOperand.toString() + number.toString();
    };

    chooseOperation(operation) {
        if (this.currentOperand === '') return;
        if (this.previousOperand !== '') {
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    };

    // define Operator function
    compute() {
        let computation;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        if (isNaN(prev) || isNaN(current)) return;
        // Define basic mathematical functions
        switch (this.operation) {
            case '+':
                computation = prev + current;
                break;
            case '−':
                computation = prev - current;
                break;
            case '×':
                computation = prev * current;
                break;
            case '÷':
                computation = prev / current;
                break;
            case '^':
                computation = prev**current;
                break;
            case '√':
                // x root y where x = prev; y = current
                // x^x = root x
                let rootprev = Math.sqrt(prev*prev);
                // sqrt y
                let rootcurrent = Math.sqrt(current);
                // root x * root y = answer
                computation = rootprev*rootcurrent
                break;
            default:
                return;
        }
        this.previousOperand = '';
        this.operation = undefined;
        
        let stringComp = computation.toString();
        if (stringComp.includes('.')) {
            this.currentOperand = computation.toFixed(2);
        } else {
            this.currentOperand = computation;
        }
    };

    getDisplayNumber(number) {
        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split('.')[0]);
        const decimalDigits = stringNumber.split('.')[1];
        let integerDisplay;
        if (isNaN(integerDigits)) {
            integerDisplay = '';
        } else {
            integerDisplay = integerDigits.toLocaleString('en', {maximumFractionDigits: 0});
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`;
        } else {
            return integerDisplay;
        }
    };
    
    updateDisplay() {
        this.currentOperandText.innerText = this.getDisplayNumber(this.currentOperand);
        if (this.operation != null) {
            this.prevOperandText.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
        } else {
            this.prevOperandText.innerText = this.previousOperand;
        };
    };   
};



// DOMContentLoaded
document.addEventListener('DOMContentLoaded', (event) => {
    // track variables
    const numberButtons = document.querySelectorAll('[data-number]');
    const operationButtons = document.querySelectorAll('[data-operation]');
    const equalsButton = document.querySelector('[data-equals]');
    const clearButton = document.querySelector('[data-clear]');
    const prevOperandText = document.querySelector('[data-previous-operand]');
    const currentOperandText = document.querySelector('[data-current-operand]');

    const calculator = new Calculator(prevOperandText, currentOperandText);
    

    // add event listeners to each button
    numberButtons.forEach(button => {
        button.addEventListener('click', () => {
            calculator.appendNumber(button.innerText);
            calculator.updateDisplay();
        })
    });

    operationButtons.forEach(button => {
        button.addEventListener('click', () => {
            calculator.chooseOperation(button.innerText);
            calculator.updateDisplay();
        })
    });

    equalsButton.addEventListener('click', button => {
        calculator.compute();
        calculator.updateDisplay();
    });

    clearButton.addEventListener('click', button => {
        calculator.clear();
        calculator.updateDisplay();
    });


    
  });
 




