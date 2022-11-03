const userScore = 0;
const botScore = 0;
const userScoreDiv = document.getElementById("user-point");
const botScoreDiv = document.getElementById("bot-point");
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
 
function game(userChoice) {
const BotChoice = getBotChoice();
if (BotChoice === userChoice) {
    result = "It's A Draw!"
}
if (BotChoice === "r" && userChoice === 'p'){
    console.log ("You Win!")
}
if (BotChoice === "s" && userChoice === 'r'){
    console.log ("You Win!")
}
if (BotChoice === "p" && userChoice === 's'){
    console.log ("You Win!")
}
if (BotChoice === "r" && userChoice === 's'){
    console.log ("You Lost!")
}
if (BotChoice === "p" && userChoice === 'r'){
    console.log ("You Lost!")
}
if (BotChoice === "s" && userChoice === 'p'){
    console.log ("You Lost!")
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