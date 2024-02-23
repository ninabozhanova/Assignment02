// DECLARING VARIABLES
let randomNum = Math.round(Math.random())
let choice
let coinFlip

// ASKING THE PLAYER TO SELECT HEADS OR TAILS
choice = prompt('Select Heads or Tails (h/t)')

// RESULT OF THE COIN FLIP
if (randomNum > 0.5) {
    coinFlip = 't'
} else {
    coinFlip = "h"
}

// SELECT THE RESULT

if (coinFlip === "h") {
    if (choice === "h") {
        alert('The flip was heads and you chose heads...you win!')
    } else {
        alert('The flip was heads but you chose tails...you lose!')
    }
} else {
    if (choice === "h") {
        alert('The flip was tails but you chose heads...you lose!')
    } else {
        alert('The flip was tails and you chose tails...you win!')
    }
}