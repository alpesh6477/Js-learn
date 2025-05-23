let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");

const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];

    // rock paper scissors
};
const drawGame = () => {
    
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `you win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green"


    } else {

        compScore++;
        compScorePara.innerText = compScore;


        msg.innerText = `you loss ${userChoice} beats your ${compChoice}`;

        msg.style.backgroundColor = "red"

    }
}

const playGame = (userChoice) => {
    console.log("userChoice = ", userChoice);  // generate computer choice
    const compChoice = genCompChoice();
    console.log("compChoice = ", compChoice);

    if (userChoice === compChoice) {
        drawGame();

        msg.innerText = "game is drow , play again";

        msg.style.backgroundColor = "black"

        msg.style.color = "white"
        // draw game

    } else {
        let userWin = true;
        if (userChoice === "rock") {

            //scissors ,paper
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            //rock , scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            //rock , paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }

};

choices.forEach((choice) => {

    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");

        playGame(userChoice);
    });
});