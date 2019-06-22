const userScore = 0;
const compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("Rock");
const paper_div = document.getElementById("Paper");
const scissors_div = document.getElementById("Scissors");


function getCompChoice() {
    const compChoice = ["Rock","Paper","Scissors"];
    const random = Math.floor(Math.random() * 3);
    return compChoice[random];
}

function win(userChoice,compChoice) {
    userScore_span.innerHTML++;
    const smallUser = "user".fontsize(3).sub();
    const smallComp = "comp".fontsize(3).sub();
    result_p.innerHTML = `${userChoice}${smallUser} beats ${compChoice}${smallComp}. You win!`;

}

function lose(userChoice, compChoice) {
    compScore_span.innerHTML++;
    const smallUser = "user".fontsize(3).sub();
    const smallComp = "comp".fontsize(3).sub();
    result_p.innerHTML = `${compChoice}${smallComp} beats ${userChoice}${smallUser}. You lose!`;
    document.getElementById(userChoice).classList.add('.glow-green');
}

function draw() {
    result_p.innerHTML = `Draw!`;
}

function game(userChoice) {
    const compChoice = getCompChoice();
    switch(userChoice + " " + compChoice) {
        case "Rock Paper":
        case "Paper Scissors":
        case "Scissors Rock":
            lose(userChoice, compChoice);
            break;
        case "Paper Rock":
        case "Scissors Paper":
        case "Rock Scissors":
            win(userChoice, compChoice);
            break;
        case "Rock Rock":
        case "Paper Paper":
        case "Scissors Scissors":
            draw();
            break;
    }
}

function main() {
    rock_div.addEventListener("click", function() {
        game("Rock");
    })
    paper_div.addEventListener("click", function() {
        game("Paper");
    })
    scissors_div.addEventListener("click", function() {
        game("Scissors");
    })
}

main();