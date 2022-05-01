// flip 2 cards and check for match
// if match, keep face up, else unflip
// flip only 2 cards at a time  and no double clicks
// timer start on 1st click, stop when all cards matched

const cards = document.querySelectorAll('.card');
const container = document.getElementsByClassName('container');
let flippedCard = false;
let freezeState = false;
var numberPairs = 12;
let cardOne, cardTwo;
var timer = { 
    second: 0,
    minute: 0,
    hour: 0,
}
var activeGame = false;

// Flip card,
function flipCard() {
    if (!activeGame) {
        activeGame = true;
        countTimer();
    }
    if (freezeState) return;
    if (this === cardOne) return;

    this.classList.toggle('flip');

    if (!flippedCard) {
        flippedCard = true;
        cardOne = this;
    } 
    else {
        flippedCard = false;
        cardTwo = this;
        checkMatch();
    }
}
    
// check if cards match
function checkMatch(){
    if(cardOne.dataset.imagefront === cardTwo.dataset.imagefront){
        cardOne.removeEventListener("click", flipCard);
        cardTwo.removeEventListener("click", flipCard);
        numberPairs --;
        gameOver();
    }
    else {
        freezeState = true;
        setTimeout(() => {
            cardOne.classList.remove ('flip');
            cardTwo.classList.remove ('flip'); 
            freezeState = false;
        }, 1000);
    }
}

// shuffle cards
function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 23);
        card.style.order = randomPos;
    })
}

cards.forEach(card => card.addEventListener("click", flipCard));

// stop timer when all cards matched.
function gameOver() {
    if (numberPairs == 0) {
        activeGame = false;
     }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//  TIMER 
var totalSeconds = 0;
async function countTimer() {
    while(activeGame == true) {
        ++totalSeconds;
        var hour = Math.floor(totalSeconds / 3600);
        var minute = Math.floor((totalSeconds - hour * 3600/60) / 60);
        var second = totalSeconds - (hour * 3600 + minute * 60);
        if(hour < 10) {
            hour = "0" + hour;
        }
        if(minute < 10) {
            minute = "0" + minute;
        }
        if(second < 10) {
            second = "0" + second;
        }
        document.getElementById("timeDisplay").textContent = hour + " : " + minute + " : " + second;
        await sleep(1000);
    }
}

// new game button
function refreshPage() {
    window.location.reload();
}

shuffle();



