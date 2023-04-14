//console.log(eval("3 + 3"));
//Number.isInteger();  
//str.strsub( [position], str.lenght (-1));

/* 
    The code works around the eval() function, which recives as parameter a string and if in that string
    there'd be a expression (ex: "2+2") it will be returned the result as a number (4);
*/

let displayInput = document.getElementById('input');
//clear all button
let clear = document.getElementById('clear');
//delete 1 button
let erase = document.getElementById('erase');
//equal button
let equal = document.getElementById('equal');
//all other digits
let inputButtons = document.querySelectorAll('.input-button');

let equalPressed = 0;

window.onload = () => {
    displayInput.value = ""
}

inputButtons.forEach(inputButton => {
    inputButton.addEventListener('click', () => {
        if(equalPressed == 1) {
            displayInput.value = "";
            equalPressed = 0;
        }

        displayInput.value += inputButton.value
    })
})

equal.addEventListener('click', () => {
    equalPressed = 1;
    let inp_val = displayInput.value;

    try {
        let solution = eval(inp_val);
        if(Number.isInteger(solution)) {
            displayInput.value = solution;
        } else {
            displayInput.value = solution.toFixed(2);
        }
    } catch(err) {}
})

clear.addEventListener('click', () => {
    displayInput.value = "";
})

erase.addEventListener('click', () => {
    displayInput.value = displayInput.value.substr(0, displayInput.value.length - 1);
})