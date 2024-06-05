// Global Variables

const gods = [
    { image: 'placeholder', mythology: 'greek', hint: 'greek 1 placeholder',},
    { image: 'placeholder', mythology: 'greek', hint: 'greek 2 placeholder',},
    { image: 'placeholder', mythology: 'greek', hint: 'greek 3 placeholder',},
    { image: 'placeholder', mythology: 'greek', hint: 'greek 4 placeholder',},
    { image: 'placeholder', mythology: 'egyptian', hint: 'egypt 1 placeholder',},
    { image: 'placeholder', mythology: 'egyptian', hint: 'egypt 2 placeholder',},
    { image: 'placeholder', mythology: 'egyptian', hint: 'egypt 3 placeholder',},
    { image: 'placeholder', mythology: 'egyptian', hint: 'egypt 4 placeholder',},
    { image: 'placeholder', mythology: 'norse', hint: 'norse 1 placeholder',},
    { image: 'placeholder', mythology: 'norse', hint: 'norse 2 placeholder',},
    { image: 'placeholder', mythology: 'norse', hint: 'norse 3 placeholder',},
    { image: 'placeholder', mythology: 'norse', hint: 'norse 4 placeholder',},
    { image: 'placeholder', mythology: 'aztec', hint: 'aztec 1 placeholder',},
    { image: 'placeholder', mythology: 'aztec', hint: 'aztec 2 placeholder',},
    { image: 'placeholder', mythology: 'aztec', hint: 'aztec 3 placeholder',},
    { image: 'placeholder', mythology: 'aztec', hint: 'aztec 4 placeholder',}

];

let currentGod = 0;
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
    setRandomGod();
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
    score += 10; 
    document.getElementById('score').textContent = score;
}

function checkAnswer (selectedMythology) {
    let god = gods[currentGod];
    if (selectedMythology === god.mythology) {
        alert(`${god.mythology} is correct!`);
        incrementScore();
    } else {
        alert(`${selectedMythology} is incorrect the correct answer is ${god.mythology}.`)
    }
    startGame();
}

function loadGod() {
    let god = gods[currentGod];
    document.getElementById('god-image').src = god.image;
}

function setRandomGod() {
    currentGod = Math.floor(Math.random() * gods.length);
}

function showHint() {

}

