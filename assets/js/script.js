// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "start") {
                startGame();
            } else if (this.getAttribute("data-type") === "instructions") {
                showInstructions();
            } else {
                alert(`Unknown action`)
                throw `Unknown action. Aborting.`
            }
        });
    }
});

function startGame() {
    document.getElementById("main-menu").classList.add("hidden");
    document.getElementById("game-zone").classList.remove("hidden");
}

function instructions() {
    document.getElementById("main-menu").classList.add("hidden");
    document.getElementById("instrucions").classList.remove("hidden");
}