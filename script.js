let playerWin = 0;
let playerLose = 0;

document.getElementById("rock").addEventListener('click', () => {
    const compSelect = computerSelection();
    const playerSelect = "ROCK";
    const rpsResult = checkWinner(playerSelect, compSelect);
    
    if ((checkWinner(playerSelect, compSelect) === "You win!")) {
        playerWin++;
    } else if (checkWinner(playerSelect, compSelect) === "You Lose!") {
        playerLose++;
    }
    answerMessage(rpsResult);
    winCount(playerWin);
    loseCount(playerLose);
});
document.getElementById("paper").addEventListener('click', () => {
    const compSelect = computerSelection();
    const playerSelect = "PAPER";
    const rpsResult = checkWinner(playerSelect, compSelect);
    if ((checkWinner(playerSelect, compSelect) === "You win!")) {
        playerWin++;
    } else if (checkWinner(playerSelect, compSelect) === "You Lose!") {
        playerLose++;
    }
    answerMessage(rpsResult);
    winCount(playerWin);
    loseCount(playerLose);
});
document.getElementById("scissors").addEventListener('click', () => {
    const compSelect = computerSelection();
    const playerSelect = "SCISSORS";
    const rpsResult = checkWinner(playerSelect, compSelect);
    if ((checkWinner(playerSelect, compSelect) === "You win!")) {
        playerWin++;
    } else if (checkWinner(playerSelect, compSelect) === "You Lose!") {
        playerLose++;
    }
    answerMessage(rpsResult);
    winCount(playerWin);
    loseCount(playerLose);
});

function answerMessage(result) {
    const message = document.getElementById("message-container");
    message.innerText = result;
}
function winCount(result) {
    const message = document.getElementById("win-score");
    message.innerText = result;
}
function loseCount(result) {
    const message = document.getElementById("lose-score");
    message.innerText = result;
}

function computerSelection() {
    let choices = ["ROCK", "PAPER", "SCISSORS"];
    let selection = choices[Math.floor(Math.random()*choices.length)];
    return selection;
}
function checkWinner(playerSelect, compSelect) {
    if (playerSelect === compSelect) {
        return "It's a Draw!";
    } else if (compSelect === "ROCK") {
        return (playerSelect === "PAPER") ? "You win!" : "You Lose!"
    } else if (compSelect === "PAPER") {
        return (playerSelect === "SCISSORS") ? "You win!" : "You Lose!"
    } else if (compSelect === "SCISSORS") {
        return (playerSelect === "ROCK") ? "You win!" : "You Lose!"
    }
}