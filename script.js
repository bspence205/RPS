let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getCompChoice() {
  const choices = ["r", "p", "s"];
  const randomNum = Math.floor(Math.random() * 3);
  return choices[randomNum];
}

function convertWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  if (letter === "s") return "Scissors";
}

function win(user, comp) {
  userScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  const smallWorld = "user".fontsize(3).sub();
  const smallComp = "comp".fontsize(3).sub();
  result_p.innerHTML = `${convertWord(user)}${smallWorld} beats ${convertWord(
    comp
  )}${smallComp}. You Win!`;
}

function lose(user, comp) {
  compScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  const smallWorld = "user".fontsize(3).sub();
  const smallComp = "comp".fontsize(3).sub();
  result_p.innerHTML = `${convertWord(
    user
  )}${smallWorld} loses to ${convertWord(comp)}${smallComp}. You Lost!`;
}

function draw(user, comp) {
  const smallWorld = "user".fontsize(3).sub();
  const smallComp = "comp".fontsize(3).sub();
  result_p.innerHTML = `${convertWord(user)}${smallWorld} equals ${convertWord(
    comp
  )}${smallComp}. Draw!`;
}

function game(userChoice) {
  const compChoice = getCompChoice();
  switch (userChoice + compChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, compChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, compChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, compChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", function () {
    game("r");
  });

  paper_div.addEventListener("click", function () {
    game("p");
  });

  scissors_div.addEventListener("click", function () {
    game("s");
  });
}

main();
