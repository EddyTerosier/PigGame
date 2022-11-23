'use strict';

// SELECTION DES ELEMENTS
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const currentScore0 = document.getElementById("current--0");
const currentScore1 = document.getElementById("current--1");

// STARTING CONDITIONS
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

// ROLLING DICE FUNCTIONALITY
btnRoll.addEventListener("click", function(){
    // 1. GENERATE A RANDOM DICE ROLL
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. DISPLAY DICE
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;

    // 3. CHECK FOR ROLLED 1: IF TRUE, SWITCH TO THE NEXT PLAYER
});
