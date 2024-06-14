// Global Variables

const gods = [
    { image: 'assets/images/gods/zeus.webp', alt: 'this is a picture of a greek god', mythology: 'Greek', hint: 'King of the gods and ruler of Mount Olympus',
        name: 'Zeus', power: 'god of the sky, lightning, and thunder.',
    },
    { image: 'assets/images/gods/poseidon.webp', alt: 'this is a picture of a greek god', mythology: 'Greek', hint: 'God of the sea, often depicted with a trident',
        name: 'Poseidon', power: 'god of the sea, earthquakes, and storms.',
    },
    { image: 'assets/images/gods/athena.webp', alt: 'this is a picture of a greek god', mythology: 'Greek', hint: 'Goddess of wisdom and war, often associated with an owl',
        name: 'Athena', power: 'goddess of wisdom, courage, and war.',
    },
    { image: 'assets/images/gods/hades.webp', alt: 'this is a picture of a greek god', mythology: 'Greek', hint: 'Ruler of the underworld and the dead',
        name: 'Hades', power: 'god of the underworld and the dead.',
    },
    { image: 'assets/images/gods/ra.webp', alt: 'this is a picture of a egyptian god', mythology: 'Egyptian', hint: 'Sun god and ruler of the sky, often depicted with a sun disk',
        name: 'Ra', power: 'god of the sun and order.',
    },
    { image: 'assets/images/gods/osiris.webp', alt: 'this is a picture of a egyptian god', mythology: 'Egyptian', hint: 'God of the afterlife and resurrection, often depicted in mummy wrappings',
        name: 'Osiris', power: 'god of the afterlife and resurrection.',
    },
    { image: 'assets/images/gods/anubis.webp', alt: 'this is a picture of a egyptian god', mythology: 'Egyptian', hint: 'God of mummification and the afterlife, often shown with a jackal head',
        name: 'Anubis', power: 'god of mummification and the afterlife.',
    },
    { image: 'assets/images/gods/horus.webp', alt: 'this is a picture of a egyptian god', mythology: 'Egyptian', hint: 'Sky god, often depicted with a falcon head',
        name: 'Horus', power: 'god of the sky and kingship.',
    },
    { image: 'assets/images/gods/odin.webp', alt: 'this is a picture of a norse god', mythology: 'Norse', hint: 'Allfather and god of wisdom, often depicted with one eye and ravens',
        name: 'Odin', power: 'god of wisdom, poetry, and death.',
    },
    { image: 'assets/images/gods/thor.webp', alt: 'this is a picture of a norse god', mythology: 'Norse', hint: 'God of thunder, lightning, and storms, known for his hammer Mjolnir',
        name: 'Thor', power: 'god of thunder, lightning, and storms.',
    },
    { image: 'assets/images/gods/loki.webp', alt: 'this is a picture of a norse god', mythology: 'Norse', hint: 'Trickster god known for his mischief and shapeshifting abilities',
        name: 'Loki', power: 'god of mischief and trickery.',
    },
    { image: 'assets/images/gods/freyja.webp', alt: 'this is a picture of a norse god', mythology: 'Norse', hint: 'Goddess of love, beauty, and fertility, often associated with cats and a chariot',
        name: 'Freyja', power: 'goddess of love, beauty, and fertility.',
    },
    { image: 'assets/images/gods/huitzilopochtli.webp', alt: 'this is a picture of a aztec god', mythology: 'Aztec', hint: 'God of war and the sun, patron of Tenochtitlan',
        name: 'Huitzilopochtli', power: 'god of war and the sun.',
    },
    { image: 'assets/images/gods/quetzalcoatl.webp', alt: 'this is a picture of a aztec god', mythology: 'Aztec', hint: 'Feathered serpent god of wind and learning',
        name: 'Quetzalcoatl', power: 'god of wind and learning.',
    },
    { image: 'assets/images/gods/tezcatlipoca.webp', alt: 'this is a picture of a aztec god', mythology: 'Aztec', hint: 'God of the night sky and ancestral memory, associated with the Great Bear constellation',
        name: 'Tezcatlipoca', power: 'god of the night sky and ancestral memory.',
    },
    { image: 'assets/images/gods/tlaloc.webp', alt: 'this is a picture of a aztec god', mythology: 'Aztec', hint: 'God of rain, water, and fertility, considered the chief deity in his pantheon',
        name: 'Tlaloc', power: 'god of rain, water, and fertility.',
    },
    { image: 'assets/images/gods/ares.webp', alt: 'this is a picture of a greek god', mythology: 'Greek', hint: 'This god is often depicted with a spear and helmet, symbolizing his role in battles and conflicts',
        name: 'Ares', power: 'god of war, representing the brutal and violent aspects of warfare.',
    },
    { image: 'assets/images/gods/tawaret.webp', alt: 'this is a picture of a egyptian god', mythology: 'Egyptian', hint: 'This deity is depicted with a combination of a hippopotamus, lion, and crocodile features in a mythology known for its ancient hieroglyphs',
        name: 'Tawaret', power: 'goddess of childbirth and fertility, protecting mothers and infants.',
    },
    { image: 'assets/images/gods/dionysus.webp', alt: 'this is a picture of a greek god', mythology: 'Greek', hint: 'Celebrated with festivals and plays, known for his association with grapes and revelry',
        name: 'Dionysus', power: 'god of wine, fertility, and theater, bringing joy and divine ecstasy.',
    },
    { image: 'assets/images/gods/ehecatl.webp', alt: 'this is a picture of a aztec god', mythology: 'Aztec', hint: 'Linked to the feathered serpent in the mythology of an ancient civilization with a famous calendar',
        name: 'Ehecatl', power: 'god of wind, associated with the movement and creation of the air.',
    },

];

let currentGod = 0;
let score = 0;
let playedGods = [];
let hintsUsed = [];

// Waits for the DOM to finish loading before beginning the game
// Add event listeners to the buttons 

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", buttonClick); 
    }
});
        
            
function buttonClick () {
    let dataType = this.getAttribute("data-type");

        switch (dataType) {
             case "start":
                startGame();
                break;
             case "instructions":
                showInstructions();
                break;
             case "hint":
                showHint();
                break;
             case "slide":
                slide();
                break;
             case "end-game":
                endGame();
                break;
            case "play-again":
                playAgain();
                break;
            default:
                checkAnswer(dataType);
                break;
            }
        }

document.getElementById("button-close").addEventListener("click", hideMessageBox);

/**
 * Hide main menu and instructions(if required) and makes the game area visible to the user before loading the first question
 */
function startGame() {
    let closeButton = document.getElementById("button-close");

    document.getElementById("main-menu").classList.add("hidden");
    document.getElementById("instructions").classList.add("hidden");
    document.getElementById("game-zone").classList.remove("hidden");
    document.getElementById("hero-image").style.display = "none";
    closeButton.style.visibility = "visible";



    if (score >= 100 && playedGods.length === 10) {
        document.getElementById("play-again").classList.remove("hidden");
        document.getElementById("end-game").classList.remove("hidden");
        closeButton.style.visibility = "hidden"; // Added to avoid users breaking out and continuing the game after an end game state
        showMessage("Congratulations, you have achieved a perfect score!<br>Would you like to play again?");
    } else if (score >= 100 && playedGods.length > 10) {
        document.getElementById("play-again").classList.remove("hidden");
        document.getElementById("end-game").classList.remove("hidden");
        closeButton.style.visibility = "hidden"; // Added to avoid users breaking out and continuing the game after an end game state
        showMessage(`Well done, you scored ${score} but it took you guessing ${playedGods.length} gods to get there, why not try again for a perfect score?`);
    } else if (score < 100 && playedGods.length < 20) {
        setRandomGod();
        while (playedGods.includes(currentGod)) {
            setRandomGod();
        }
        loadGod();
    } else if (playedGods.length === 20) {
        document.getElementById("play-again").classList.remove("hidden");
        document.getElementById("end-game").classList.remove("hidden");
        closeButton.style.visibility = "hidden"; // Added to avoid users breaking out and continuing the game after an end game state
        showMessage("You have run out of gods to guess<br> would you like to play again?");
    }
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
        showMessage(`${god.mythology} is correct!<br><br>That was ${god.name}, ${god.power}`);
        incrementScore();
    } else {
        showMessage(`${selectedMythology} is incorrect, the correct answer is ${god.mythology}.
            <br><br> That was ${god.name}, ${god.power}`);
    }
    startGame();
}

/**
 * Takes the currently selected god from the gods array and loads the image for that god for the user, then removes that god from the gods array
 */
function loadGod() {
    let god = gods[currentGod];
    document.getElementById("god-image").src = god.image;
    document.getElementById("god-image").alt = god.alt;
    playedGods.push(currentGod);
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

    if (hintsUsed.includes(god.hint)) {
        showMessage(`Hint: ${god.hint}`);
    } else {
        showMessage(`Hint: ${god.hint}`);
        score -= 5;
        document.getElementById('score').textContent = score;
        hintsUsed.push(god.hint);
    }
    
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
}

/**
 * Slides the left and right image back over the game zone whilst resetting the gamezone for if the player decides to play again from the main menu
 */
function endGame() {
    let body = document.body;
    let leftBar = document.getElementById("left-bar");
    let rightBar = document.getElementById("right-bar");

    score = 0;
    playedGods = [];
    hintsUsed = [];

    hideMessageBox();

    body.classList.toggle("slide-open");
    body.classList.toggle("closed");

    leftBar.style.boxShadow = "-5px 0 15px -5px rgba(0, 0, 0, 2)";
    rightBar.style.boxShadow = "5px 0 15px -5px rgba(0, 0, 0, 2)";

    document.getElementById('score').textContent = score;
    document.getElementById("main-menu").classList.remove("hidden");
    document.getElementById("game-zone").classList.add("hidden");
    document.getElementById("hero-image").style.display = "flex";
    document.getElementById("play-again").classList.add("hidden");
    document.getElementById("end-game").classList.add("hidden");

    setTimeout(function() {
        document.getElementById("slide-button").classList.remove("hidden");
    }, 3100);
}

function playAgain() {
    score = 0;
    playedGods = [];
    hintsUsed = [];

    document.getElementById('score').textContent = score;
    document.getElementById("play-again").classList.add("hidden");
    document.getElementById("end-game").classList.add("hidden");
    document.getElementById("button-close").style.visibility = "visible";

    hideMessageBox();
    setRandomGod();
    loadGod();
}

function showMessage(message) {
    let alertBox = document.getElementById("alert-box");
    let alertMessage = document.getElementById("custom-message");

    alertMessage.innerHTML = message;
    alertBox.classList.remove("hidden");

    toggleAnswers(true);
}

function hideMessageBox() {
    document.getElementById("alert-box").classList.add("hidden");

    toggleAnswers(false);
}

/**
 * Will disable answer and hint buttons until the alert box has been closed
 */
function toggleAnswers(disabled) {
    let buttons = document.querySelectorAll(".button-toggle");
    for (let button of buttons) {
        button.disabled = disabled;
    }
}