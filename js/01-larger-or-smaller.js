// DECLARING VARIABLES
let num1
let num2
let numToDisplay

// ASKING FOR THE INPUT NUMBERS
num1 = parseInt(prompt('Please enter an integer'))
num2 = parseInt(prompt('Please enter anohter integer'))

// FIND THE LARGER OF THE TWO 
if (num1 >= num2) { // WHILE NO SPECIFIC INSTRUCTIONS ARE GIVEN FOR THE CASE WHEN THE NUMBERS ARE EQUAL, I DECIDED TO DISPLAY THE NUMBER IN THIS CASE AS WELL
    numToDisplay = num1 
} else {
    numToDisplay = num2
}

// DISPLAY WITHIN THE BROWSER WINDOW
window.document.write(`<b>${numToDisplay}</b>`)