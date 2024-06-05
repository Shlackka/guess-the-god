// Global Variables

const deities = [
    { image: , mythology: , hint: ,},
    { image: , mythology: , hint: ,},
    { image: , mythology: , hint: ,},
    { image: , mythology: , hint: ,},
    { image: , mythology: , hint: ,},
    { image: , mythology: , hint: ,},
    { image: , mythology: , hint: ,},
    { image: , mythology: , hint: ,},
    { image: , mythology: , hint: ,},
    { image: , mythology: , hint: ,},
    { image: , mythology: , hint: ,},
    { image: , mythology: , hint: ,},
    { image: , mythology: , hint: ,},
    { image: , mythology: , hint: ,},
    { image: , mythology: , hint: ,},
    { image: , mythology: , hint: ,},

];

let currentDeity = 0;
let score = 0;

// Waits for the DOM to finish loading before beginning the game
// Add event listeners to the buttons 

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function(event) {
            let dataType = this.getAttribute("data-type");
            if (dataType === "start") {
                startGame();
            } else if (dataType === "instructions") {
                showInstructions();
            } else if (dataType === "hint") {
                showHint();
            } else {
                checkAnswer(dataType);
            }
        });
    }
});

/**
 * Hide main menu and instructions(if required) and makes the game area visible to the user before loading the first question
 */
function startGame() {
    document.getElementById("main-menu").classList.add("hidden");
    document.getElementById("instructions").classList.add("hidden");
    document.getElementById("game-zone").classList.remove("hidden");
    loadGod();
}

/**
 * Hide main menu and show instructions
 */
function showInstructions() {
    document.getElementById("main-menu").classList.add("hidden");
    document.getElementById("instructions").classList.remove("hidden");
}

function incrementScore() {

}

function checkAnswer (selectedMythology) {

}

function loadGod() {

}

function showHint() {

}

