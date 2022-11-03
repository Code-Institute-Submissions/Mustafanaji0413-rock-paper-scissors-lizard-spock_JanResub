let userScore = 0;
let botScore = 0;
const userPoint = document.getElementById("user-point");
const botPoint = document.getElementById("bot-point");
const leaderboard = document.getElementsByClassName(".leaderboard");
const score = document.getElementsByClassName(".score > p");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");



function getbotChoice () {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices [randomNumber];
}
 
function win(userChoice, botChoice) {
    userScore++;
    userPoint.innerHTML = userScore;
    botPoint.innerHTML = botScore;
    score.innerHTML = userChoice + "Beats" + botChoice + 'You win!🔥';
    
}
function lose () {
    console.log ("You Lose!")
}
function draw () {
    console.log ("Its A Draw!")
}


function game(userChoice) {
const botChoice = getbotChoice();
if (botChoice === userChoice) {
    draw();
}
if (botChoice === "r" && userChoice === 'p'){
     win(userChoice, botChoice);
}
if (botChoice === "s" && userChoice === 'r'){
     win(userChoice, botChoice);
}
if (botChoice === "p" && userChoice === 's'){
     win(userChoice, botChoice);
}
if (botChoice === "r" && userChoice === 's'){
     lose(userChoice, botChoice);
}
if (botChoice === "p" && userChoice === 'r'){
     lose(userChoice, botChoice);
}
if (botChoice === "s" && userChoice === 'p'){
     lose(userChoice, botChoice);
}
}


function main() { 
rock.addEventListener('click', function () {
    game("r");
})

paper.addEventListener('click', function () {
    game("p");
})

scissor.addEventListener('click', function () {
    game("s");
})
}

main ();