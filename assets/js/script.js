const userScore = 0;
const botScore = 0;
const userScoreDiv = document.getElementById("user-point");
const botScoreDiv = document.getElementById("bot-point");
const leaderboard = document.getElementsByClassName(".leaderboard");
const score = document.getElementsByClassName(".score");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");

function game(userCohice) {
console.log(":poop" + userCohice);
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