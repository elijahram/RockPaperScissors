document.getElementById("rock").addEventListener('click', () => {
    const compSelect = computerSelection();
    const playerSelect = "ROCK";
    const rpsResult = checkWinner(playerSelect, compSelect);
    alert(rpsResult);
});
document.getElementById("paper").addEventListener('click', () => {
    const compSelect = computerSelection();
    const playerSelect = "PAPER";
    const rpsResult = checkWinner(playerSelect, compSelect);
    alert(rpsResult);
});
document.getElementById("scissors").addEventListener('click', () => {
    const compSelect = computerSelection();
    const playerSelect = "SCISSORS";
    const rpsResult = checkWinner(playerSelect, compSelect);
    alert(rpsResult);
});

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