const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

// Using a loop to attach event listeners to all buttons
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        let value = this.innerText;

        // If-else statements to handle user input
        if (value === 'C') {
            display.value = ''; // Clears the screen
        } 
        else if (value === '=') {
            try {
                // Evaluates the math expression
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Error'; // Handles bad math inputs like '++'
            }
        } 
        else {
            // Appends numbers and operators to the screen
            display.value += value;
        }
    });
}