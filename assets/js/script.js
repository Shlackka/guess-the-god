// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

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

function startGame() {
    document.getElementById("main-menu").classList.add("hidden");
    document.getElementById("instructions").classList.add("hidden");
    document.getElementById("game-zone").classList.remove("hidden");
    loadGod();
}

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

