let CHOICES = ['rock', 'paper', 'scissors'];
let scoreArray = [0, 0];

/** Function generates a random integer smaller than max.
 * @returns {number} - random integer
 */
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
    }

/** This function returns the computer's choice of either Rock, Paper or Scissors.
 *  @returns {string} - the computer's choice
 */
function getComputerChoice() {
    return CHOICES[getRandomInt(3)]
}

function playSingleRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let playerWinString = 'You Win! ' + playerSelection + ' beats ' + computerSelection + '.';
    let computerWinString = 'You Loose! ' + computerSelection + ' beats ' + playerSelection + '.';
    let tieString = "It's a tie!";
    let winner = 0;
    let verboseString;

    if (playerSelection == 'rock') {
        if (computerSelection == 'scissors') winner = 1;
        
        else if (computerSelection == 'paper') winner = -1;
    }

    else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') winner = 1;

        else if (computerSelection == 'scissors') winner = -1;
    }

    else if (playerSelection == 'scissors') {
        if (computerSelection == 'paper') winner = 1;

        else if (computerSelection == 'rock') winner = -1;
    }
    if (winner == -1) verboseString = computerWinString;
    if (winner == 1) verboseString = playerWinString;
    if ( winner == 0) verboseString = tieString;
    updateScore(winner, verboseString);
}


function announceWinner(winner) {
    const verbose = document.querySelector('#roundOutput');
    if (winner == 1) verbose.textContent = 'You won! Select your weapon to play again!';
    if (winner == 0) verbose.textContent = 'You lost! Select your weapon to play again!';
}

function updateScore(winner, verboseString) {
    if (scoreArray[0] == 5 || scoreArray[1] == 5) scoreArray = [0, 0];           
    const score = document.querySelector('#score');
    const verbose = document.querySelector('#roundOutput');
    if (winner == 1) scoreArray[0] += 1;
    else if (winner == -1) scoreArray[1] += 1;

    score.textContent = `Score: ${scoreArray[0]} : ${scoreArray[1]}`;
    verbose.textContent = verboseString;

    if (scoreArray[0] == 5) announceWinner(1);
    if (scoreArray[1] == 5) announceWinner(0);
}

const buttons = document.querySelectorAll('button');
buttons.forEach(element => {
    element.addEventListener('click', () => playSingleRound(element.id, getComputerChoice()));
});