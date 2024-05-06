const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");
const startButton = document.querySelector(".start-button");
const stopButton = document.querySelector(".stopBtn");
const buttons = document.querySelector(".buttons");

const moleImg = document.createElement("img");
moleImg.src = "mole-head.png";
moleImg.classList.add("mole");

let result = 0;
let hitPosition;
let countDown = 60;
let timerId;
let countDownTimerId;

// function to generate mole at random location

function randomSquare() {
  //removes moleImg from divs
  squares.forEach((square) => {
    const existingMole = square.querySelector(".mole");
    if (existingMole) {
      existingMole.classList.toggle("mole-head-hidden");
      square.removeChild(existingMole);
    }
  });
  // adds moleImg to the random squares
  let randomSquares = squares[Math.floor(Math.random() * 9)];
  randomSquares.appendChild(moleImg);
  hitPosition = randomSquares.id;
}

// tracks mouse movements
squares.forEach((square) => {
  square.addEventListener("mousedown", () => {
    if (square.id == hitPosition) {
      result++;
      score.textContent = result;
      hitPosition = null;
    }
  });
});

//calling the function to move mole and setting it in timerId variable
function moveMole() {
  timerId = setInterval(randomSquare, 2000);
}

//function to stop the mole
function stopMole() {
  clearInterval(timerId);
  clearInterval(countDownTimerId);
  timeLeft.textContent = countDown;

  squares.forEach((square) => {
    const existingMole = square.querySelector(".moleImg");
    console.log(existingMole);
    if (existingMole) {
      square.removeChild(existingMole);
    }
  });
}

//function to stop the countdown
function countDownTimer() {
  countDown--;
  timeLeft.textContent = countDown;
  stopButton.value = "pause";
  if (countDown == 0) {
    clearInterval(countDownTimerId);
    clearInterval(timerId);
    alert("Game Over, Your score " + result);
  }
}

//function to start the countdown
function startCountDown() {
  countDownTimerId = setInterval(countDownTimer, 1000);
}
