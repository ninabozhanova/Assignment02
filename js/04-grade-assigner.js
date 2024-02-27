// DECLARING VARIABLES
let score

// COLLECT THE SCORE FROM THE USER
score = parseFloat(prompt('Please enter your score'))

// CHECK THAT THE VALID SCORE WAS ENTERED
if (score < 1 || score > 100) {
    alert('Only numbers between 1 and 100 are accepted')
} else {
    // SHOW THEIR GRADE IN THE CONSOLE WINDOW
    if (score >= 90) {
        console.log('You received an A')
    } else if (score >= 80) {
        console.log('You received a B')
    } else if (score >= 70) {
        console.log('You received a C')
    } else if (score >= 60) {
        console.log('You received a D')
    } else {
        console.log('You received an F')
    }
}
