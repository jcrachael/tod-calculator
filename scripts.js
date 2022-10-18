// Define basic mathematical functions
function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x*y;
}

function divide(x, y) {
    return x/y;
}

// define Operator function
function operate(operator, x, y) {
    if (operator === 'add') {
        return add(x, y);
    } else if (operator === 'subtract') {
        return subtract(x, y);
    } else if (operator === 'multiply') {
        return multiply(x, y);
    } else if (operator === 'divide') {
        return divide(x, y);
    } else {
        return "Error";
    }
}

// DOMContentLoaded
document.addEventListener('DOMContentLoaded', (event) => {
    // track variables
    let x = 0;
    let y = 0;
    let numArray = []
    // get screen
    let screen = document.getElementById('screen');
    // get all buttons
    let buttons = document.querySelectorAll('button');

    // loop through each button 
    for (let i = 0; i < buttons.length; i++) {
        // for each button, make a new array
        let button = buttons[i];
        

        // add event listener to each buttpn
        button.addEventListener("click", function() {
            // on click, add number to screen
            screen.innerHTML += '<p class="screentext">' + button.innerText + '</p>';
            
            // check if number class
            if (button.classList.contains('number')) {
                // if no x already, assign number to x
                x = parseInt(button.innerText);
                
                console.log(x + ' was pressed');

                // add num to array
                numArray.push(x);
                console.log(numArray);
            };
            
            // check if operator class
            if (button.classList.contains('operator')) {
                
                // check if operator is clear
                if (button.id === 'btn-clear') {
                    // clear screen
                    screen.innerHTML = '';
                    // reset vars
                    numArray = [];
                   
                } else if (button.id === 'btn-add') {
                    console.log('the addition button was pressed');
                    let xArray = numArray;
                    console.log(operate('add', x, y));
                } else if (button.id === 'btn-subtract') {
                    console.log('the subtract button was pressed');
                } else if (button.id === 'btn-multiply') {
                    console.log('the multiply button was pressed');
                } else if (button.id === 'btn-divide') {
                    console.log('the divide button was pressed');
                } else {
                    console.log('the equals button was pressed');
                }
            }; 
            
        });
        
    };
    
    

    
  });
 




