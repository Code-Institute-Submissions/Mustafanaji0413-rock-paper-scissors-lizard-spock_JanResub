let userScore = 0;
let botScore = 0;
const userPoint = document.getElementById("user-point");
const botPoint = document.getElementById("bot-point");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const myScore = document.getElementById("my-score");
const intro = document.querySelector(".intro"); 
const play_screen = document.querySelectorAll(".play_screen"); //select the element
const button1 = document.querySelector('#button1');

button1.onclick = () => {
    intro.style.display = 'none';
    play_screen.forEach(div => div.style.display = 'block');
  };

function getbotChoice () {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices [randomNumber];
}

function makeWord (letter) {
    if (letter === "r") return "Rock";
    if (letter === "s") return "Scissor";
    if (letter === "p") return "Paper";
}


function win(userChoice, botChoice) {
    userScore++;
    userPoint.innerHTML = userScore;
    botPoint.innerHTML = botScore;
    myScore.innerHTML = `<p> ${ makeWord(userChoice)} Beats ${makeWord (botChoice)}. You win!🔥</p>`;

} 
function lose (userChoice, botChoice) {
    botScore++;
    userPoint.innerHTML = userScore;
    botPoint.innerHTML = botScore;
    myScore.innerHTML = `<p> ${ makeWord(userChoice)} Loses To ${makeWord (botChoice)}. You Lost...😭 </p>`;
}
function draw (userChoice, botChoice) {
    userPoint.innerHTML = userScore;
    botPoint.innerHTML = botScore;
    myScore.innerHTML = `<p> ${ makeWord(userChoice)} Equals ${makeWord (botChoice)}. It's A Draw.😐</p>`;
}

function game(userChoice) {
    const botChoice = getbotChoice();
    if (botChoice === userChoice) {
    draw(userChoice, botChoice); 
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
    });

paper.addEventListener('click', function () {
    game("p");
    });

scissor.addEventListener('click', function () {
    game("s");
    });
}

main ();

