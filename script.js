// selecting buttons
const pickRock = document.querySelector('.rock');
const pickPaper = document.querySelector('.paper');
const pickScissors = document.querySelector('.scissors');

// selecting paragraphs
const computerScore = document.querySelector('#computer-score');
const playerScore = document.querySelector('#player-score');
const drawNumber = document.querySelector('#draw');

// saving scores
let draw = 0;
let player = 0;
let computer = 0;


function getComputerChoice() {
    let rng = Math.floor(Math.random() * 3) + 1;
    let computerChoice;
    if (rng == 1) {
        computerChoice = 'rock';
    } else {
        if (rng == 2) {
            computerChoice = 'paper';
        } else {
            computerChoice = 'scissors';
        }
    }
    return computerChoice
}

function getPlayerChoice(playerChoice) {
    return playRound(getComputerChoice, playerChoice);
}

function playRound(getComputerChoice, playrChoice) {
    switch (playrChoice) {
        case 'rock':
            switch (getComputerChoice()) {
                case 'rock':
                    draw += 1;
                    return 'DRAW';
                    break;
                case 'paper':
                    computer += 1;
                    return 'COMPUTER';
                    break;
                case 'scissors':
                    player += 1;
                    return 'PLAYER';
                    break;
                default:
                    return 'input?';
            }
            break;
        case 'paper':
            switch (getComputerChoice()) {
                case 'rock':
                    player += 1;
                    return 'PLAYER';
                    break;
                case 'paper':
                    draw += 1;
                    return 'DRAW';
                    break;
                case 'scissors':
                    computer += 1;
                    return 'COMPUTER';
                    break;
                default:
                    return 'input?';
            }
            break;
        case 'scissors':
            switch (getComputerChoice()) {
                case 'rock':
                    computer += 1;
                    return 'COMPUTER';
                    break;
                case 'paper':
                    player += 1;
                    return 'PLAYER';
                    break;
                case 'scissors':
                    draw += 1;
                    return 'DRAW';
                    break;
                default:
                    return 'input?';
            }
            break;
        default:
            console.log('YOU SHOULD NOT SEE THIS. There is invalid player input for some reason')
            return 'input?';
    }
}

// buttons events
pickRock.addEventListener("click", () => {
    getPlayerChoice('rock');
    scoreUpdate();
});

pickPaper.addEventListener("click", () => {
    getPlayerChoice('paper');
    scoreUpdate();
});

pickScissors.addEventListener("click", () => {
    getPlayerChoice('scissors');
    scoreUpdate();
});

// Function to update score in paragraphs is called in buttons events
function scoreUpdate() {
    computerScore.textContent = `Computer Score: ${computer}.`;
    playerScore.textContent = `Player Score: ${player}.`;
    drawNumber.textContent = `Draw Number: ${draw}.`;
}
