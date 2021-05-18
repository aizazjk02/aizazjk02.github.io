let choices = ["rock", "paper", "scissors"];

let random = Math.floor(Math.random() * choices.length);

console.log(random, choices[random]);

let wonMessage = "You Won!";
let lossMessage = "You Lost!";
let drawMessage = "It's a Draw!";
let winColor = "green";
let lossColor = "red";
let drawColor = "gray";

function rpsGame(choice) {
  let userChoice = choice.id;
  let botChoice = choices[random];


  console.log(botChoice);
  let score = decideWinner(userChoice, botChoice);
  console.log(score);
  let message = getMessage(score);
  let color = getColor(score);
  displayResult(userChoice,botChoice,message,color)
}

function decideWinner(userChoice, botChoice) {
  let gameDatabase = {
    rock: { rock: 0.5, paper: 0, scissors: 1 },
    paper: { rock: 1, paper: 0.5, scissors: 0 },
    scissors: { rock: 0, paper: 1, scissors: 0.5 },
  };

  return gameDatabase[userChoice][botChoice];
}

function getMessage(score) {
  if (score === 1) return wonMessage;
  else if (score == 0) return lossMessage;
  else return drawMessage;
}

function getColor(score) {
    if(score === 1) return winColor;
    else if(score === 0) return lossColor;
    else return drawColor;
}

function displayResult(uChoice, botChoice, message,color) {
  let imageDatabase = {
    rock: document.getElementById("rock").src,
    paper: document.getElementById("paper").src,
    scissors: document.getElementById("scissors").src,
  };

  //lets remove the images
  document.getElementById("rock").remove();
  document.getElementById("paper").remove();
  document.getElementById("scissors").remove();

  let userDiv = document.createElement("div");
  let botDiv = document.createElement("div");
  let messageDiv = document.createElement("div");
  messageDiv.id = "message"
  let container = document.getElementById("container");

  userDiv.innerHTML =
    "<img src='" + imageDatabase[uChoice] + "' height=150 width=150>";
  messageDiv.innerHTML = "<h2>" + message + "</h2>";
  botDiv.innerHTML =
    "<img src='" + imageDatabase[botChoice] + "' height=150 width=150>";

  messageDiv.style = "color:"+color+";";
  container.appendChild(userDiv);
  container.appendChild(messageDiv);
  container.appendChild(botDiv);
}
