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

function getPlayerChoice() {
    let playerChoice = (prompt('Type \"rock\", \"paper\" or \"scissors\":')).toLowerCase();
    return playerChoice
}

function playRound(getComputerChoice, getPlayerChoice) {
    switch (getPlayerChoice()) {
        case 'rock':
            switch (getComputerChoice()) {
                case 'rock':
                    return 'DRAW';
                    break;
                case 'paper':
                    return 'COMPUTER';
                    break;
                case 'scissors':
                    return 'PLAYER';
                    break;
                default:
                    return 'input?';
            }
            break;
        case 'paper':
            switch (getComputerChoice()) {
                case 'rock':
                    return 'PLAYER';
                    break;
                case 'paper':
                    return 'DRAW';
                    break;
                case 'scissors':
                    return 'COMPUTER';
                    break;
                default:
                    return 'input?';
            }
            break;
        case 'scissors':
            switch (getComputerChoice()) {
                case 'rock':
                    return 'COMPUTER';
                    break;
                case 'paper':
                    return 'PLAYER';
                    break;
                case 'scissors':
                    return 'DRAW';
                    break;
                default:
                    return 'input?';
            }
            break;
        default:
            return 'wrong player input';
    }
}



function game() {
    let roundWinner;
    let computerScore = 0;
    let playerScore = 0;
    let draw = 0;
    for (i = 1; i <= 5; i++) {
        roundWinner = playRound(getComputerChoice, getPlayerChoice);
        switch (roundWinner) {
            case 'DRAW':
                draw += 1;
                break;
            case 'PLAYER':
                playerScore += 1;
                break;
            case 'COMPUTER':
                computerScore += 1;
                break;
            default:
                draw += 1;
                console.log('Wrong player input');
        }
    }
    let winnerIs = getGameWinner(computerScore, playerScore, draw);
    // console.log(computerScore);
    // console.log(playerScore);
    // console.log(draw);
    return winnerIs;
}

function getGameWinner(computerScore, playerScore, draw) {
    if (draw >= 3) {
        return `You had ${draw} draws, there is no winner`;
    } else {
        if (computerScore > playerScore) {
            return `Computer score is ${computerScore}/5. The computer won.`;
        } else if (computerScore < playerScore) {
            return `Your score is ${playerScore}/5. You won.`;
        }
    }
}

console.log(game());