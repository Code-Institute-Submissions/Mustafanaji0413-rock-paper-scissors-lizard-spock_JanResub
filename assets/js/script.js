let userScore = 0;
let botScore = 0;
const userPoint = document.getElementById("user-point");
const botPoint = document.getElementById("bot-point");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const lizard = document.getElementById("lizard");
const spock = document.getElementById("spock");
const myScore = document.getElementById("my-score");
const intro = document.querySelector(".intro");
const play_screen = document.querySelectorAll(".play_screen");
const button1 = document.querySelector('#button1');

// "Lets play" intro page button

button1.onclick = () => {
    intro.style.display = 'none';
    play_screen.forEach(div => div.style.display = 'block');

};

// Generate random computer choice 
function getbotChoice() {
    const choices = ['r', 'p', 's', 'l', 'k'];
    const randomNumber = Math.floor(Math.random() * 5);
    return choices[randomNumber];
}

function makeWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "s") return "Scissor";
    if (letter === "p") return "Paper";
    if (letter === "l") return "Lizard";
    if (letter === "k") return "Spock";
}

// If user wins add to the score and show a message that user won
function win(userChoice, botChoice) {
    userScore++;
    userPoint.innerHTML = userScore;
    botPoint.innerHTML = botScore;
    myScore.innerHTML = `<p> ${ makeWord(userChoice)} Beats ${makeWord (botChoice)}. You win!🔥</p>`;

}

// If user loose lost add to bot score and show a message that he/she lost
function lose(userChoice, botChoice) {
    botScore++;
    userPoint.innerHTML = userScore;
    botPoint.innerHTML = botScore;
    myScore.innerHTML = `<p> ${ makeWord(userChoice)} Loses To ${makeWord (botChoice)}. You Lost...😭 </p>`;
}
// If its a draw show message that it is a draw. 
function draw(userChoice, botChoice) {
    userPoint.innerHTML = userScore;
    botPoint.innerHTML = botScore;
    myScore.innerHTML = `<p> ${ makeWord(userChoice)} Equals ${makeWord (botChoice)}. It's A Draw.😐</p>`;
}

// Check if bot or user wins the round based on the choices they made
function game(userChoice) {
    const botChoice = getbotChoice();

    if (botChoice === userChoice) {
      draw(userChoice, botChoice);
    }
    // rock
    if (botChoice === "r" && userChoice === 'p') {
      win(userChoice, botChoice);
    }
    if (botChoice === "r" && userChoice === 's') {
      lose(userChoice, botChoice);
    }
    if (botChoice === "r" && userChoice === 'l') {
      lose(userChoice, botChoice);
    }
    if (botChoice === "r" && userChoice === 'k') {
      win(userChoice, botChoice);
    }

    // scissors
    if (botChoice === "s" && userChoice === 'p') {
      lose(userChoice, botChoice);
    }
    if (botChoice === "s" && userChoice === 'r') {
      win(userChoice, botChoice);
    }
    if (botChoice === "s" && userChoice === 'l') {
      lose(userChoice, botChoice);
    }
    if (botChoice === "s" && userChoice === 'k') {
      win(userChoice, botChoice);
    }

    // lizard
    if (botChoice === "l" && userChoice === 'p') {
      lose(userChoice, botChoice);
    }
    if (botChoice === "l" && userChoice === 'r') {
      win(userChoice, botChoice);
    }
    if (botChoice === "l" && userChoice === 's') {
      win(userChoice, botChoice);
    }
    if (botChoice === "l" && userChoice === 'k') {
      lose(userChoice, botChoice);
    }

    // spock
    if (botChoice === "k" && userChoice === 'p') {
      win(userChoice, botChoice);
    }
    if (botChoice === "k" && userChoice === 'r') {
      lose(userChoice, botChoice);
    }
    if (botChoice === "k" && userChoice === 's') {
      lose(userChoice, botChoice);
    }
    if (botChoice === "k" && userChoice === 'l') {
      win(userChoice, botChoice);
    }

    // paper
    if (botChoice === "p" && userChoice === 's') {
      win(userChoice, botChoice);
    }
    if (botChoice === "p" && userChoice === 'r') {
      lose(userChoice, botChoice);
    }
    if (botChoice === "p" && userChoice === 'l') {
      win(userChoice, botChoice);
    }
    if (botChoice === "p" && userChoice === 'k') {
      lose(userChoice, botChoice);
    }
}


// Check what choice the user made
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

    lizard.addEventListener('click', function () {
        game("l");
    });

    spock.addEventListener('click', function () {
        game("k");
    });
}

main();