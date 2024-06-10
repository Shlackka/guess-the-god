// Global Variables

const gods = [
    { image: 'assets/images/placeholder.jpg', mythology: 'greek', hint: 'greek 1 placeholder',},
    { image: 'assets/images/placeholder.jpg', mythology: 'greek', hint: 'greek 2 placeholder',},
    { image: 'assets/images/placeholder.jpg', mythology: 'greek', hint: 'greek 3 placeholder',},
    { image: 'assets/images/placeholder.jpg', mythology: 'greek', hint: 'greek 4 placeholder',},
    { image: 'assets/images/placeholder.jpg', mythology: 'egyptian', hint: 'egypt 1 placeholder',},
    { image: 'assets/images/placeholder.jpg', mythology: 'egyptian', hint: 'egypt 2 placeholder',},
    { image: 'assets/images/placeholder.jpg', mythology: 'egyptian', hint: 'egypt 3 placeholder',},
    { image: 'assets/images/placeholder.jpg', mythology: 'egyptian', hint: 'egypt 4 placeholder',},
    { image: 'assets/images/placeholder.jpg', mythology: 'norse', hint: 'norse 1 placeholder',},
    { image: 'assets/images/placeholder.jpg', mythology: 'norse', hint: 'norse 2 placeholder',},
    { image: 'assets/images/placeholder.jpg', mythology: 'norse', hint: 'norse 3 placeholder',},
    { image: 'assets/images/placeholder.jpg', mythology: 'norse', hint: 'norse 4 placeholder',},
    { image: 'assets/images/placeholder.jpg', mythology: 'aztec', hint: 'aztec 1 placeholder',},
    { image: 'assets/images/placeholder.jpg', mythology: 'aztec', hint: 'aztec 2 placeholder',},
    { image: 'assets/images/placeholder.jpg', mythology: 'aztec', hint: 'aztec 3 placeholder',},
    { image: 'assets/images/placeholder.jpg', mythology: 'aztec', hint: 'aztec 4 placeholder',}

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
            } else if (dataType === "slide") {
                slide();
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

/**
 * Score is incremented and updated on the webpage for the user to see
 */
function incrementScore() {
    score += 10; 
    document.getElementById('score').textContent = score;
}

/**
 * Compares users selected answer to the current correct answer and returns a result to the user
 */
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

/**
 * Takes the currently selected god from the gods array and loads the image for that god for the user
 */
function loadGod() {
    let god = gods[currentGod];
    document.getElementById("god-image").src = god.image;
}

/**
 * Makes the selection of a god more random as opposed to simply reading from the array in an order
 */
function setRandomGod() {
    currentGod = Math.floor(Math.random() * gods.length);
}

/**
 * Shows the hint corresponding to the currently shown god in the style of an alert box to the user
 */
function showHint() {
    let god = gods[currentGod];
    alert(`Hint: ${god.hint}`);
    score -= 5;
    document.getElementById('score').textContent = score;
    scoreZero();
}

/**
 * Checks to make sure that the current score isn't less than 0 and updates the score for the user
 */
function scoreZero() {
    if (score < 0) {
        score = 0;
    }
    document.getElementById('score').textContent = score;
}

/**
 * Slides the two side images open to reveal the main menu of the game
 */
function slide() {
    let body = document.body;
    let slideButton = document.getElementById("slide-button");
    let leftBar = document.getElementById("left-bar");
    let rightBar = document.getElementById("right-bar");

    body.classList.toggle("slide-open");
    body.classList.toggle("closed");
    slideButton.classList.add("hidden");
    
    // Delay the addition of the box-shadow by 0.1 seconds (100 milliseconds)
    setTimeout(function() {
        leftBar.style.boxShadow = "5px 0 15px -5px rgba(0, 0, 0, 2), -5px 0 15px -5px rgba(0, 0, 0, 2)";
        rightBar.style.boxShadow = "-5px 0 15px -5px rgba(0, 0, 0, 2), 5px 0 15px -5px rgba(0, 0, 0, 2)";
    }, 100); // 100 milliseconds delay
    
    slideButton.style.display = "none";
}

