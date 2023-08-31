let homeScore = document.getElementById("home");
let guestScore = document.getElementById("guest");

let scoreHome = 0 ;
let scoreGuest = 0;

function addOne() {
    scoreHome += 1;
    displayScoreHome();
}

function addTwo() {
    scoreHome += 2;
    displayScoreHome();
}

function addThree() {
    scoreHome += 3;
    displayScoreHome();
}

function addOneGuest() {
    scoreGuest += 1;
    displayScoreGuest();
}

function addTwoGuest() {
    scoreGuest += 2;
    displayScoreGuest();
}

function addThreeGuest() {
    scoreGuest += 3;
    displayScoreGuest();
}
function displayScoreHome() {
    homeScore.textContent = scoreHome;
}

function displayScoreGuest() {
    guestScore.textContent = scoreGuest;
}