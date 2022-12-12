"use strict";

// SELECTION DES ELEMENTS
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const currentScore0 = document.getElementById("current--0");
const currentScore1 = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// INITIALISATIONS DES VARIABLES GLOBALES
let scores;
let currentScore;
let activePlayer;
let playing;

function Init() {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    currentScore0.textContent = 0;
    currentScore1.textContent = 0;
    
    diceEl.classList.add("hidden");
    player0El.classList.remove("player--winner");
    player1El.classList.remove("player--winner");
    player0El.classList.add("player--active");
    player1El.classList.remove("player--active");
}
Init();

// FUNCTIONS
function SwitchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active"); // TOGGLE ENLEVE LA CLASS SI IL Y A ET LA METS SI YA PAS
  player1El.classList.toggle("player--active");
}


// ROLLING DICE FUNCTIONALITY
btnRoll.addEventListener("click", function () {
  if (playing) {
    // 1. GENERATE A RANDOM DICE ROLL
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. DISPLAY DICE
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;

    // 3. CHECK FOR ROLLED 1
    if (dice !== 1) {
      // ADD DICE TO CURRENT SCORE
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // SWITCH TO NEXT PLAYER
      SwitchPlayer();
    }
  }
});

// BTN HOLD
btnHold.addEventListener("click", function () {
  if (playing) {
    // 1. ADD CURRENT SCORE TO ACTIVE PLAYER'S SCORE
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. CHECK PLAYER'S SCORE IS >= 100
    if (scores[activePlayer] >= 100) {
      // FINISH THE GAME
      playing = false;
      diceEl.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      // SWITCH TO THE NEXT PLAYER
      SwitchPlayer();
    }
  }
});

// RESET BTN
btnNew.addEventListener("click", Init);
