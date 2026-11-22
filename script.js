// CHANGE SECTIONS

function changeScreen(screenId) {

    let screens = document.querySelectorAll(".screen");

    screens.forEach(function(screen) {
        screen.classList.remove("active");
    });

    document.getElementById(screenId).classList.add("active");

    window.scrollTo(0, 0);
}


// INTRO

function goToPassword() {

    changeScreen("password");

}


// PASSWORD CHECK

function checkPassword() {

    let enteredPassword =
        document.getElementById("passwordInput").value;

    let correctPassword = "24112006";

    if (enteredPassword === correctPassword) {

        document.getElementById("errorMessage").innerText = "";

        let music = document.getElementById("birthdayMusic");

        music.play().catch(function() {});

        changeScreen("gift");

    } else {

        document.getElementById("errorMessage").innerText =
            "Oops! Try again ❤️";

    }

}


// GIFT OPENING

function openGift() {

    changeScreen("videoSection");

    let video = document.getElementById("surpriseVideo");

    video.currentTime = 0;

    video.play().catch(function() {});

}


// LETTER

function showLetter() {

    let video = document.getElementById("surpriseVideo");

    video.pause();

    changeScreen("letter");

    startTyping();

}


// TYPEWRITER EFFECT

let message =
"Happy Birthday, Akkaleyyyyyyyyyy! ❤️ " +
"You are one of the most special people in my life. " +
"Thank you for all the beautiful memories, laughter and love. " +
"I hope this new year of your life brings you endless happiness, " +
"success and everything your heart wishes for. " +
"Keep smiling and stay happy always. " +
"Lots and lots of love! ❤️";

let letterIndex = 0;

function startTyping() {

    let letterElement =
        document.getElementById("typedLetter");

    letterElement.innerHTML = "";

    letterIndex = 0;

    typeLetter();

}

function typeLetter() {

    let letterElement =
        document.getElementById("typedLetter");

    if (letterIndex < message.length) {

        letterElement.innerHTML += message.charAt(letterIndex);

        letterIndex++;

        setTimeout(typeLetter, 45);

    }

}


// MEMORIES

function showMemories() {

    changeScreen("memories");

}


// FINAL SURPRISE

function showFinale() {

    changeScreen("finale");

    createConfetti();

}


// CONFETTI

function createConfetti() {

    let container = document.getElementById("confetti");

    container.innerHTML = "";

    for (let i = 0; i < 60; i++) {

        let confetti = document.createElement("div");

        confetti.innerHTML = "✨";

        confetti.style.position = "absolute";

        confetti.style.left = Math.random() * 100 + "%";

        confetti.style.top = "-20px";

        confetti.style.fontSize = "20px";

        confetti.style.animation =
            "fall " + (2 + Math.random() * 4) + "s linear infinite";

        container.appendChild(confetti);

    }

}