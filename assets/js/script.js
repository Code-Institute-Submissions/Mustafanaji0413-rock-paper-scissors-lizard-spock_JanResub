let userScore = 0;
let botScore = 0;
const userPoint = document.getElementById("user-point");
const botPoint = document.getElementById("bot-point");
const leaderboard = document.getElementsByClassName(".leaderboard");
const score = document.getElementsByClassName(".score");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
let result


function getBotChoice () {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices [randomNumber];
}
 
function win () {
    userScore++;
    userPoint.innerHTML = userScore;
    botPoint.innerHTML = botScore;
}
function lose () {
    console.log ("You Lose!")
}
function draw () {
    console.log ("Its A Draw!")
}


function game(userChoice) {
const BotChoice = getBotChoice();
if (BotChoice === userChoice) {
    draw();
}
if (BotChoice === "r" && userChoice === 'p'){
     win();
}
if (BotChoice === "s" && userChoice === 'r'){
     win();
}
if (BotChoice === "p" && userChoice === 's'){
     win();
}
if (BotChoice === "r" && userChoice === 's'){
     lose();
}
if (BotChoice === "p" && userChoice === 'r'){
     lose();
}
if (BotChoice === "s" && userChoice === 'p'){
     lose();
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