// DECLARING VARIABLES
let num1
let num2
let numToDisplay

// ASKING FOR THE INPUT NUMBERS
num1 = parseInt(prompt('Please enter an integer'))
num2 = parseInt(prompt('Please enter anohter integer'))

// FIND THE LARGER OF THE TWO (IF THE NUMBERS ARE EQUAL, TAKE THE FIRST)
if (num1 >= num2) {
    numToDisplay = num1 
} else {
    numToDisplay = num2
}

// DISPLAY WITHIN THE BROWSER WINDOW
window.document.write(`The larger of the two inserted integers: <b>${numToDisplay}</b>`)