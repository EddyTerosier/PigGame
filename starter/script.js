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

// STARTING CONDITIONS
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

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
});

btnHold.addEventListener("click", function () {
  // 1. ADD CURRENT SCORE TO ACTIVE PLAYER'S SCORE
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];

  // 2. CHECK PLAYER'S SCORE IS >= 100
  if (scores[activePlayer >= 100]) {

  }
  // FINISH THE GAME

  // SWITCH TO THE NEXT PLAYER
  SwitchPlayer();
});
